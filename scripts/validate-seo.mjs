const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:3107';
const canonicalBase = 'https://bondflorida.com';
const routes = [
  '/',
  '/about',
  '/contact',
  '/locations',
  '/resources',
  '/county/pasco',
  '/county/pasco/dade-city',
  '/county/lee/cape-coral',
  '/services/dui-bail-bonds',
  '/services/dui-bail-bonds/miami',
  '/jail/land-o-lakes-detention-center',
  '/warrant-search',
];

function attribute(html, tag, attributeName, attributeValue, contentName) {
  const pattern = new RegExp(
    `<${tag}[^>]*${attributeName}=["']${attributeValue}["'][^>]*${contentName}=["']([^"']+)["'][^>]*>`,
    'i',
  );
  const reversePattern = new RegExp(
    `<${tag}[^>]*${contentName}=["']([^"']+)["'][^>]*${attributeName}=["']${attributeValue}["'][^>]*>`,
    'i',
  );
  return html.match(pattern)?.[1] || html.match(reversePattern)?.[1];
}

const failures = [];

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  const html = await response.text();
  const expectedCanonical = route === '/' ? canonicalBase : `${canonicalBase}${route}`;
  const canonical = attribute(html, 'link', 'rel', 'canonical', 'href');
  const ogUrl = attribute(html, 'meta', 'property', 'og:url', 'content');
  const ogImage = attribute(html, 'meta', 'property', 'og:image', 'content');
  const twitterImage = attribute(html, 'meta', 'name', 'twitter:image', 'content');

  if (!response.ok) failures.push(`${route}: HTTP ${response.status}`);
  if (canonical !== expectedCanonical) failures.push(`${route}: canonical ${canonical}`);
  if (ogUrl !== expectedCanonical) failures.push(`${route}: og:url ${ogUrl}`);
  if (ogImage !== `${canonicalBase}/og-image.png`) failures.push(`${route}: og:image ${ogImage}`);
  if (twitterImage !== `${canonicalBase}/og-image.png`) failures.push(`${route}: twitter:image ${twitterImage}`);

  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  for (const source of scripts) {
    try {
      const data = JSON.parse(source);
      const serialized = JSON.stringify(data);
      if (serialized.includes('FAQPage') || serialized.includes('HowTo') || serialized.includes('BailBondBusiness')) {
        failures.push(`${route}: unsupported or unverified schema type`);
      }

      if (data?.['@type'] === 'BreadcrumbList') {
        const positions = data.itemListElement?.map((item) => item.position) || [];
        if (positions.some((position, index) => position !== index + 1)) {
          failures.push(`${route}: invalid breadcrumb positions ${positions.join(',')}`);
        }
      }
    } catch (error) {
      failures.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }
}

const imageResponse = await fetch(`${baseUrl}/og-image.png`);
const imageBytes = new Uint8Array(await imageResponse.arrayBuffer());
const pngSignature = [...imageBytes.slice(0, 8)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
if (imageResponse.headers.get('content-type') !== 'image/png') {
  failures.push(`/og-image.png: MIME ${imageResponse.headers.get('content-type')}`);
}
if (pngSignature !== '89504e470d0a1a0a') {
  failures.push(`/og-image.png: invalid PNG signature ${pngSignature}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Validated canonical, social, image, and JSON-LD output on ${routes.length} representative routes.`);
