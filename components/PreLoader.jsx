"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./PreLoader.module.css";

export default function PreLoader() {
  return (
    <section className={styles.loaderScreen}>
      <div className={styles.loaderBox}>
        <DotLottieReact
          src="https://lottie.host/509ab990-283a-4cbf-9b33-0ac3a006561c/lsQJ1brSnT.lottie"
          loop
          autoplay
          className={styles.lottie}
        />

        <h3 className={styles.loadingText}>Loading adventure...</h3>
      </div>
    </section>
  );
}