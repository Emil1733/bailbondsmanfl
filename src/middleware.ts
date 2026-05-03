import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const url = request.nextUrl.clone();

  // 1. Force non-www (canonical domain)
  if (host?.startsWith('www.')) {
    const newHost = host.replace('www.', '');
    return NextResponse.redirect(`https://${newHost}${url.pathname}${url.search}`, 301);
  }

  // 2. Trailing slash normalization (optional but good for consistency)
  // Next.js handles this by default usually, but we can be explicit if needed.

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml, llms.txt (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt).*)',
  ],
};
