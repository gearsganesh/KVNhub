"use client";

import { useEffect, useState } from "react";

const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const LOGO_SOURCE =
  "https://raw.githubusercontent.com/gearsganesh/KVNhub/main/public/assets/kvn-group-logo.png";

export default function GroupLogo({
  className = "",
  alt = "KVN Group",
}: {
  className?: string;
  alt?: string;
}) {
  const [src, setSrc] = useState(PLACEHOLDER);

  useEffect(() => {
    let objectUrl = "";
    let cancelled = false;

    const loadLogo = async () => {
      try {
        // GitHub stores the exact supplied PNG as base64 text. Decode that
        // original asset in the browser so the artwork is not recreated or altered.
        const response = await fetch(LOGO_SOURCE, { cache: "force-cache" });
        if (!response.ok) throw new Error("Unable to load KVN Group logo");
        const encoded = (await response.text()).replace(/\s/g, "");
        const binary = atob(encoded);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i += 1) {
          bytes[i] = binary.charCodeAt(i);
        }
        objectUrl = URL.createObjectURL(
          new Blob([bytes], { type: "image/png" }),
        );
        if (!cancelled) setSrc(objectUrl);
      } catch {
        // Keep a transparent placeholder rather than showing a broken-image icon.
      }
    };

    loadLogo();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return <img className={className} src={src} alt={alt} />;
}
