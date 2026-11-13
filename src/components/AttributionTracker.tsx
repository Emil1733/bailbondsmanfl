"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { normalizeSitePath, recordPageAttribution } from "@/lib/attribution";

const PRIMARY_PHONE_HREF = "tel:+13058310358";

export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    recordPageAttribution(pathname);
  }, [pathname]);

  useEffect(() => {
    function handlePhoneClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href^='tel:']");
      if (!link || link.getAttribute("href") !== PRIMARY_PHONE_HREF) return;

      track("primary_phone_clicked", {
        page: normalizeSitePath(window.location.pathname) || "/",
      });
    }

    document.addEventListener("click", handlePhoneClick);
    return () => document.removeEventListener("click", handlePhoneClick);
  }, []);

  return null;
}
