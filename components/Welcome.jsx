"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Welcome.module.css";

const message =
  "Welcome, explorer! You have found my portfolio. Every place on this map unlocks a part of my journey...";

export default function Welcome({ onStart }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingTimer = setInterval(() => {
      setTypedText(message.slice(0, index + 1));
      index++;

      if (index >= message.length) {
        clearInterval(typingTimer);
      }
    }, 35);

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <section className={styles.welcomeScreen}>
      <div className={styles.backgroundGlow} />

      <div className={styles.gamePanel}>
        <div className={styles.characterBox}>
          <Image
            src="/story/avatar.png"
            alt="Portfolio character"
            width={360}
            height={360}
            priority
            className={styles.avatar}
          />
        </div>

        <div className={styles.dialogueArea}>
          <div className={styles.nameTag}>Portfolio Guide</div>

          <div className={styles.speechBubble}>
            <p>{typedText}</p>
            <span className={styles.cursor}>|</span>
          </div>

          <button className={styles.startButton} onClick={onStart}>
            Start Adventure
          </button>
        </div>
      </div>
    </section>
  );
}