const LANDING_PAGE_KEY = "bondflorida:landing-page";
const LAST_PAGE_KEY = "bondflorida:last-page";
const CONTACT_ORIGIN_KEY = "bondflorida:contact-origin";

export type LeadAttribution = {
  landingPage: string;
  originatingPage: string;
};

export function normalizeSitePath(value: string | null | undefined) {
  if (!value || value.length > 180) return "";
  if (!value.startsWith("/") || value.startsWith("//")) return "";
  if (value.includes("?") || value.includes("#")) return "";
  return /^\/[A-Za-z0-9/_-]*$/.test(value) ? value : "";
}

export function recordPageAttribution(pathname: string) {
  const currentPath = normalizeSitePath(pathname);
  if (!currentPath || typeof window === "undefined") return;

  try {
    const landingPage = normalizeSitePath(
      window.sessionStorage.getItem(LANDING_PAGE_KEY),
    );
    const previousPage = normalizeSitePath(
      window.sessionStorage.getItem(LAST_PAGE_KEY),
    );

    if (!landingPage) {
      window.sessionStorage.setItem(LANDING_PAGE_KEY, currentPath);
    }

    if (
      currentPath === "/contact" &&
      previousPage &&
      previousPage !== "/contact"
    ) {
      window.sessionStorage.setItem(CONTACT_ORIGIN_KEY, previousPage);
    }

    window.sessionStorage.setItem(LAST_PAGE_KEY, currentPath);
  } catch {
    // Attribution must never prevent navigation or lead submission.
  }
}

export function readLeadAttribution(currentPath: string): LeadAttribution {
  const safeCurrentPath = normalizeSitePath(currentPath) || "/";
  if (typeof window === "undefined") {
    return { landingPage: safeCurrentPath, originatingPage: safeCurrentPath };
  }

  try {
    const landingPage =
      normalizeSitePath(window.sessionStorage.getItem(LANDING_PAGE_KEY)) ||
      safeCurrentPath;
    const contactOrigin = normalizeSitePath(
      window.sessionStorage.getItem(CONTACT_ORIGIN_KEY),
    );
    const lastPage = normalizeSitePath(
      window.sessionStorage.getItem(LAST_PAGE_KEY),
    );

    return {
      landingPage,
      originatingPage:
        contactOrigin ||
        (lastPage && lastPage !== "/contact" ? lastPage : safeCurrentPath),
    };
  } catch {
    return { landingPage: safeCurrentPath, originatingPage: safeCurrentPath };
  }
}
