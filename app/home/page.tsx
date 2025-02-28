"use client";

import { Header1 } from "@/blocks/header/header1";
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
        <ResponsivePricing />
      </main>
    </>
  );
} 