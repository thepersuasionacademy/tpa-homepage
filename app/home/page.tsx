"use client";

import { Header1 } from "@/blocks/header/header1";
import { Hero5 } from "@/blocks/hero/hero5";
import { CustomPricing } from "@/blocks/pricing/custom-pricing";

export default function HomePage() {
  return (
    <>
      <Header1 />
      <main>
        <Hero5 />
        <CustomPricing />
      </main>
    </>
  );
} 