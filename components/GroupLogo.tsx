"use client";

import { useEffect, useState } from "react";

const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

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
        // The repository contains the exact supplied PNG as base64 text.
        // Decode it in the browser so the original artwork is rendered pixel-for-pixel.
        const response = await fetch("/assets/kvn-group-logo.png", {
          cache: "force-cache",
        });
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
        // Keep the transparent placeholder rather than showing a broken-image icon.
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
