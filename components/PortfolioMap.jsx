"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PortfolioMap.module.css";

const places = [
  {
    id: "home",
    label: "Home",
    icon: "/map-icons/home_house.png",
    bg: "/section-bg/home-bg.png",
    x: "29%",
    y: "28%",
    title: "Home",
    subtitle: "Welcome to my world!",
    cta: "Explore Home",
    text: "Hi, I'm Saklain Mostak. I build interactive and beautiful web experiences.",
    fullTitle: "Welcome Home",
    fullText:
      "This is the beginning of my portfolio adventure. Here visitors can learn who I am, what I build, and what kind of web experiences I love to create.",
  },
  {
    id: "about",
    label: "About",
    icon: "/map-icons/about_tree.png",
    bg: "/section-bg/about-bg.png",
    x: "68%",
    y: "30%",
    title: "About Me",
    subtitle: "Get to know me",
    cta: "Read More",
    text: "I'm a passionate frontend developer who loves creating story-driven web experiences.",
    fullTitle: "About Me",
    fullText:
      "I am a frontend developer who enjoys turning ideas into interactive websites. I focus on clean UI, creative layouts, responsive design, and smooth animation.",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "/map-icons/skills_crystal.png",
    bg: "/section-bg/skills-bg.png",
    x: "50%",
    y: "52%",
    title: "My Skills",
    subtitle: "Tools I use",
    cta: "View All Skills",
    text: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Git and animation.",
    fullTitle: "My Skills",
    fullText:
      "My skills include HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Git, component-based UI development, API handling, and web animation.",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "/map-icons/projects_chest.png",
    bg: "/section-bg/projects-bg.png",
    x: "27%",
    y: "72%",
    title: "My Projects",
    subtitle: "Things I've built",
    cta: "View All Projects",
    text: "Portfolio website, task manager, weather app and practical frontend projects.",
    fullTitle: "My Projects",
    fullText:
      "This section showcases my best projects, including portfolio websites, task managers, API-based apps, dashboard designs, and creative UI experiments.",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "/map-icons/contact_mailbox.png",
    bg: "/section-bg/contact-bg.png",
    x: "73%",
    y: "75%",
    title: "Contact Me",
    subtitle: "Let's work together!",
    cta: "Contact Now",
    text: "Email, GitHub, phone and social links can be shown here.",
    fullTitle: "Contact Me",
    fullText:
      "Visitors can contact me here for collaboration, freelance work, project discussion, feedback, or professional opportunities.",
  },
];

export default function PortfolioMap() {
  const [previewPlace, setPreviewPlace] = useState(null);
  const [activePlace, setActivePlace] = useState(null);

  const closePreview = () => setPreviewPlace(null);

  const openSection = (place) => {
    setActivePlace(place);
    setPreviewPlace(null);
  };

  const backToMap = () => {
    setActivePlace(null);
    setPreviewPlace(null);
  };

  return (
    <main className={styles.page}>
      <div className={styles.animatedBg}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {!activePlace && (
        <section className={styles.mapScreen}>
          <div className={styles.mapHeader}>
            <p>Choose your destination</p>
            <h1>Portfolio Adventure Map</h1>
          </div>

          <div className={styles.mapBox}>
            <Image
              src="/story/map.svg"
              alt="Portfolio adventure map"
              fill
              priority
              sizes="(max-width: 900px) 96vw, 1100px"
              className={styles.mapImage}
            />

            {places.map((place) => (
              <button
                key={place.id}
                type="button"
                className={styles.hotspot}
                style={{ left: place.x, top: place.y }}
                onClick={() => setPreviewPlace(place)}
                aria-label={`Open ${place.label}`}
              >
                <Image
                  src={place.icon}
                  alt=""
                  width={56}
                  height={56}
                  className={styles.hotspotIcon}
                />
              </button>
            ))}
          </div>

          <p className={styles.mapHint}>
            Click an icon to preview. Then press Explore to enter that section.
          </p>
        </section>
      )}

      {previewPlace && !activePlace && (
        <section className={styles.previewOverlay} onClick={closePreview}>
          <article
            className={styles.previewCard}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closePreview}
              aria-label="Close preview"
            >
              ×
            </button>

            <div className={styles.previewTab}>
              <Image src={previewPlace.icon} alt="" width={34} height={34} />
              <span>{previewPlace.label}</span>
            </div>

            <div className={styles.previewHero}>
              <Image
                src={previewPlace.bg}
                alt={previewPlace.title}
                fill
                sizes="370px"
                className={styles.previewBg}
              />

              <div className={styles.previewShade} />

              <div className={styles.previewHeroContent}>
                <h2>{previewPlace.title}</h2>
                <p>{previewPlace.subtitle}</p>
              </div>
            </div>

            <div className={styles.previewContent}>
              <div className={styles.avatarLine}>
                <Image
                  src="/story/avatar.png"
                  alt="Avatar"
                  width={58}
                  height={58}
                  className={styles.avatar}
                />

                <p>{previewPlace.text}</p>
              </div>

              <button
                type="button"
                className={styles.exploreBtn}
                onClick={() => openSection(previewPlace)}
              >
                {previewPlace.cta}
              </button>
            </div>
          </article>
        </section>
      )}

      {activePlace && (
        <section className={styles.detailScreen}>
          <Image
            src={activePlace.bg}
            alt={activePlace.title}
            fill
            priority
            sizes="100vw"
            className={styles.detailBg}
          />

          <div className={styles.detailOverlay} />

          <button
            type="button"
            className={styles.backButton}
            onClick={backToMap}
          >
            ← Back to Map
          </button>

          <article className={styles.detailContent}>
            <Image
              src={activePlace.icon}
              alt=""
              width={90}
              height={90}
              className={styles.detailIcon}
            />

            <p className={styles.smallLabel}>Unlocked Section</p>
            <h1>{activePlace.fullTitle}</h1>
            <h2>{activePlace.subtitle}</h2>
            <p>{activePlace.fullText}</p>
          </article>
        </section>
      )}
    </main>
  );
}
