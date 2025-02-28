"use client";

import { Header1 } from "@/blocks/header/header1";
import { TopHeader } from "@/blocks/header/top-header";
import { Hero5 } from "@/blocks/hero/hero5";
import { CustomPricing } from "@/blocks/pricing/custom-pricing";
import { LightingBackground } from "@/blocks/background/lighting-background";

export default function HomePage() {
  return (
    <>
      <LightingBackground />
      <Header1 />
      <main>
        <TopHeader />
        <Hero5 />
        <CustomPricing />
      </main>
    </>
  );
} 