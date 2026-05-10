"use client";

import { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";

import PortfolioMap from "@/components/PortfolioMap";
import GameWelcome from "@/components/Welcome";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <PreLoader />;
  }

  if (showWelcome) {
    return <GameWelcome onStart={() => setShowWelcome(false)} />;
  }

  return <PortfolioMap />;
}
