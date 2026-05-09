"use client";

import PreLoader from "@/components/PreLoader";
import { useEffect, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, 1800);

    return () => clearTimeout(loaderTimer);
  }, []);
  return (
    <main>
      {showLoader ? (
        <PreLoader />
      ) : (
        <section
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            background: "#070b13",
            color: "white",
            textAlign: "center",
            padding: "30px",
          }}
        >
          <div>
            <h1>Intro Finished </h1>
            <p>interactive map </p>
          </div>
        </section>
      )}
    </main>
  );
}
