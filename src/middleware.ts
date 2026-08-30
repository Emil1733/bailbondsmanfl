import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRODUCTION_ORIGIN = 'https://bondflorida.com';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase() ?? '';
  const hostname = host.replace(/:\d+$/, '');
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();
  const isInsecureProductionRequest =
    hostname === 'bondflorida.com' &&
    (request.nextUrl.protocol === 'http:' || forwardedProtocol === 'http');

  // Redirect only the known production alias. Never construct a redirect target
  // from the untrusted Host header; previews and unknown hosts remain untouched.
  if (hostname === 'www.bondflorida.com' || isInsecureProductionRequest) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, PRODUCTION_ORIGIN);
    return NextResponse.redirect(destination, 301);
  }

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
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
