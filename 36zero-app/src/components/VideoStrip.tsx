"use client";
import { useEffect, useState } from "react";

type Props = {
  mode?: "inline" | "hero";
  /** Low-bitrate/size sources (recommended for hero background) */
  lowSrc?: string;
  lowWebmSrc?: string;
  /** High-bitrate/size sources (fallback for desktops on fast networks) */
  highSrc?: string;
  highWebmSrc?: string;
  /** Ultra-low quality for very slow connections */
  ultraLowSrc?: string;
  ultraLowWebmSrc?: string;
  poster?: string;
  heading?: string;
  subheading?: string;
  /** auto | low | high | ultra-low */
  quality?: "auto" | "low" | "high" | "ultra-low";
};

export default function VideoStrip({
  mode = "inline",
  // Use only the short hero video - direct Vercel Blob URLs
  lowSrc = "https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/No Excuse Hero Short.mp4",
  lowWebmSrc = "https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/No Excuse Hero Short.webm",
  // High quality also uses the short hero video (same as low)
  highSrc = "https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/No Excuse Hero Short.mp4",
  highWebmSrc = "https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/No Excuse Hero Short.webm",
  // Ultra-low quality 540p variant for very slow connections
  ultraLowSrc = "https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/hero-loop-540p.mp4",
  ultraLowWebmSrc = "https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/hero-loop-540p.webm",
  poster = "/img/hero/home-hero.jpg",
  heading = "Your Journey to Zero Emissions",
  subheading = "Experience sustainable marine transportation with our eco‑friendly routes and cutting‑edge electric vessels. Join the future of maritime travel.",
  quality = "auto"
}: Props) {

  const [selectedQuality, setSelectedQuality] = useState<"ultra-low" | "low" | "high">("low");

  useEffect(() => {
    if (quality === "auto") {
      const conn: any = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const saveData = !!conn?.saveData;
      const et = conn?.effectiveType as string | undefined; // 'slow-2g' | '2g' | '3g' | '4g'
      const isMobileViewport = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

      // Choose quality based on connection and viewport
      if (saveData || et === "slow-2g" || et === "2g") {
        setSelectedQuality("ultra-low");
      } else if (et === "3g" || isMobileViewport) {
        setSelectedQuality("low");
      } else {
        setSelectedQuality("high");
      }
    } else {
      setSelectedQuality(quality as "ultra-low" | "low" | "high");
    }
  }, [quality]);

  const mp4 = selectedQuality === "ultra-low" ? ultraLowSrc : selectedQuality === "low" ? lowSrc : highSrc;
  const webm = selectedQuality === "ultra-low" ? ultraLowWebmSrc : selectedQuality === "low" ? lowWebmSrc : highWebmSrc;

  // Detect Safari and iOS for proper video format prioritization
  const isSafariOrIOS = typeof window !== "undefined" && (
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );

  if (mode === "hero") {
    return (
      <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        {/* Background video */}
        <video
          id="hero-video"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"  /* keep metadata to avoid full download before play */
          poster={poster}
          aria-hidden="true"
        >
          {isSafariOrIOS ? (
            // Safari/iOS: prioritize MP4
            <>
              <source src={mp4} type="video/mp4" />
              {webm ? <source src={webm} type="video/webm" /> : null}
            </>
          ) : (
            // Other browsers: prioritize WebM for better compression
            <>
              {webm ? <source src={webm} type="video/webm" /> : null}
              <source src={mp4} type="video/mp4" />
            </>
          )}
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Foreground content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              {heading}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85">
              {subheading}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/zerolap/routes"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Explore Routes
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                Book a Sea Trial
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default inline strip usage (what you had before)
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-white/80 mb-3 text-sm">Built by Sailors — Yard profile</p>
        <div className="relative rounded-xl overflow-hidden border border-white/10">
          <video controls className="w-full aspect-video object-cover" poster={poster}>
            {isSafariOrIOS ? (
              // Safari/iOS: prioritize MP4
              <>
                <source src={mp4} type="video/mp4" />
                {webm ? <source src={webm} type="video/webm" /> : null}
              </>
            ) : (
              // Other browsers: prioritize WebM for better compression
              <>
                {webm ? <source src={webm} type="video/webm" /> : null}
                <source src={mp4} type="video/mp4" />
              </>
            )}
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
}