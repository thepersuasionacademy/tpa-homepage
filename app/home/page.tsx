"use client";

import { Header1 } from "@/blocks/header/header1";
import { Hero5 } from "@/blocks/hero/hero5";
import { LightingBackground } from "@/blocks/background/lighting-background";
import { ResponsivePricing } from "@/blocks/pricing/responsive-pricing";
import { Feature4 } from "@/blocks/features/feature4";

export default function HomePage() {
  return (
    <>
      <LightingBackground />
      <Header1 />
      <main>
        <Feature4 />
        <Hero5 />
        <ResponsivePricing />
      </main>
    </>
  );
} 