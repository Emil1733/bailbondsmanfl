# Phase 11 — Security and privacy hardening

## Scope

Phase 11 hardens the public response headers and contact-to-Airtable flow while preserving static rendering for the site's directory and educational pages.

## Implemented controls

- Production CSP no longer includes `unsafe-eval`. Development retains it only because the React/Next.js development runtime requires it.
- CSP now denies plugins/objects and framing, limits form submissions and base URLs to this origin, upgrades insecure requests, and declares the Vercel Analytics connection endpoints.
- Added `Permissions-Policy`, HSTS, `Cross-Origin-Opener-Policy`, and stricter clickjacking protection.
- Added Vercel BotID Basic to the browser and `/api/contact` route. Bot detection now works across serverless instances; the existing timing check, honeypot, payload cap, validation, and in-memory burst limit remain defense-in-depth controls.
- Reduced the optional message limit from 2,000 to 500 characters and explicitly tells visitors not to submit case narratives or sensitive identifiers.
- Defined a 90-day Airtable review/deletion period, a 30-day privacy-request response target, authorized-access boundaries, and Vercel/Airtable processing roles.
- Verified that application-generated public links do not use HTTP.
- Updated development dependencies with non-breaking advisory fixes. Production dependencies have no known advisories according to `npm audit --omit=dev` on August 31, 2026. One low-severity Windows development-server advisory remains through `tsx` → `esbuild`; it is not installed as a production dependency or exposed by the deployed application, and the current upstream `tsx` release does not yet remove the affected range.

## CSP design decision

The production policy still permits inline scripts and styles because this Next.js application is predominantly statically generated. Next.js nonce-based CSP requires dynamic rendering for every protected page, which would discard the performance and cache benefits of the static directory. `unsafe-eval` has been removed from production; migrating the remaining inline allowance should use Next.js Subresource Integrity after that experimental feature is suitable for this deployment.

## Operating procedure

1. Restrict the Airtable personal access token to record creation for this base and table.
2. Limit Airtable access to the owner and people actively responsible for responding to inquiries.
3. Review Airtable monthly and remove contact records older than 90 days unless a documented exception applies.
4. Remove access immediately when a responder no longer needs it.
5. Process verified access, correction, and deletion requests sent to `tevatrosyan13.17@gmail.com` within 30 days.
6. Review Vercel Firewall BotID events and contact failures regularly; never log submitted form values.

## Release gates

- `npm audit --omit=dev`
- `npm run audit:security`
- `npx tsc --noEmit`
- `npm run build`
- deployed-header inspection
- live contact endpoint bot rejection and normal browser-path verification
