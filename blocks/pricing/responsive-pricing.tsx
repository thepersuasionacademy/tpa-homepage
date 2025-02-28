import { useEffect, useState } from "react";
import { CustomPricing } from "./custom-pricing";
import { MobilePricing } from "./mobile-pricing";

export const ResponsivePricing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint in Tailwind
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile ? <MobilePricing /> : <CustomPricing />;
}; 