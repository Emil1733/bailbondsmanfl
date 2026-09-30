const pages = [
  'https://bondflorida.com/jail/tgk-correctional-center',
  'https://bondflorida.com/jail/broward-county-main-jail',
  'https://bondflorida.com/jail/land-o-lakes-detention-center',
  'https://bondflorida.com/county/palm-beach/west-palm-beach',
];

function plainText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function attribute(html, element, name, value, attributeName) {
  const tags = html.match(new RegExp(`<${element}[^>]*>`, 'gi')) ?? [];
  const required = new RegExp(`${name}=["']${value}["']`, 'i');
  const attributePattern = new RegExp(`${attributeName}=["']([^"']*)["']`, 'i');
  const tag = tags.find((candidate) => required.test(candidate));
  return tag?.match(attributePattern)?.[1] ?? null;
}

function headings(html, level) {
  return [...html.matchAll(new RegExp(`<h${level}[^>]*>([\\s\\S]*?)<\\/h${level}>`, 'gi'))]
    .map((match) => plainText(match[1]));
}

function linksTo(html, pathname) {
  return [...html.matchAll(/href=["']([^"']+)["']/gi)]
    .some((match) => {
      try {
        return new URL(match[1], 'https://bondflorida.com').pathname === pathname;
      } catch {
        return false;
      }
    });
}

const sitemapXml = await (await fetch('https://bondflorida.com/sitemap.xml')).text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitePages = [];

for (const url of sitemapUrls) {
  sitePages.push({ url, html: await (await fetch(url)).text() });
}

for (const url of pages) {
  const html = await (await fetch(url)).text();
  const pathname = new URL(url).pathname;
  const bodyText = plainText(
    html
      .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
      .replace(/<footer[\s\S]*?<\/footer>/gi, ' '),
  );
  const inbound = sitePages
    .filter((page) => page.url !== url && linksTo(page.html, pathname))
    .map((page) => page.url);

  console.log(JSON.stringify({
    url,
    title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? null,
    description: attribute(html, 'meta', 'name', 'description', 'content'),
    canonical: attribute(html, 'link', 'rel', 'canonical', 'href'),
    robots: attribute(html, 'meta', 'name', 'robots', 'content'),
    h1: headings(html, 1),
    h2: headings(html, 2),
    approximateWords: bodyText ? bodyText.split(/\s+/).length : 0,
    inboundCount: inbound.length,
    inbound,
  }, null, 2));
}
