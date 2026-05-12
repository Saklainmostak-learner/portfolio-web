"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PortfolioMap.module.css";

const profile = {
  name: "Saklain Mostak",
  role: "Frontend Developer",
  email: "saklainmostak.learner@gmail.com",
  phone: "+880 1687785845",
  resume: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/dev-saklain-mostak/",
  github: "https://github.com/Saklainmostak-learner",
  photo: "/story/avatar.png",
};

const experiences = [
  {
    title: "Frontend Developer",
    place: "Personal Projects / Learning Journey",
    time: "2024 - Present",
    text: "Building responsive, animated and interactive web experiences with React, Next.js and modern CSS.",
  },
  {
    title: "JavaScript & React Practice",
    place: "Project Based Learning",
    time: "2024 - Present",
    text: "Working with components, state, props, API data, reusable UI, routing and deployment workflows.",
  },
];

const certificates = [
  {
    title: "Frontend Development",
    issuer: "Course / Platform Name",
    year: "2025",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Course / Platform Name",
    year: "2025",
  },
  {
    title: "React & Next.js",
    issuer: "Course / Platform Name",
    year: "2026",
  },
];

const projects = [
  {
    title: "Story Portfolio",
    category: "Next.js / Animation",
    image: "/section-bg/projects-bg.png",
    description:
      "A game-inspired animated portfolio with adventure map navigation, preview modal and interactive sections.",
    live: "https://your-project-link.com",
    github: "https://github.com/your-username/story-portfolio",
    tech: ["Next.js", "CSS Modules", "Animation"],
  },
  {
    title: "Task Manager App",
    category: "React Project",
    image: "/section-bg/home-bg.png",
    description:
      "A clean task management app with add, delete, status update and local storage features.",
    live: "https://your-project-link.com",
    github: "https://github.com/your-username/task-manager",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Weather App",
    category: "API Project",
    image: "/section-bg/contact-bg.png",
    description:
      "Weather application using API data, search functionality and responsive UI.",
    live: "https://your-project-link.com",
    github: "https://github.com/your-username/weather-app",
    tech: ["API", "JavaScript", "React"],
  },
];

const skills = [
  {
    name: "HTML",
    short: "HTML",
    icon: "🌐",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    orbit: "orbitA",
  },
  {
    name: "CSS",
    short: "CSS",
    icon: "🎨",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    orbit: "orbitB",
  },
  {
    name: "JavaScript",
    short: "JS",
    icon: "⚡",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    orbit: "orbitC",
  },
  {
    name: "React",
    short: "React",
    icon: "⚛️",
    url: "https://react.dev/",
    orbit: "orbitD",
  },
  {
    name: "Next.js",
    short: "Next",
    icon: "▲",
    url: "https://nextjs.org/",
    orbit: "orbitE",
  },
  {
    name: "Node.js",
    short: "Node",
    icon: "🟢",
    url: "https://nodejs.org/",
    orbit: "orbitF",
  },
  {
    name: "Express.js",
    short: "Express",
    icon: "🚂",
    url: "https://expressjs.com/",
    orbit: "orbitG",
  },
  {
    name: "MongoDB",
    short: "Mongo",
    icon: "🍃",
    url: "https://www.mongodb.com/",
    orbit: "orbitH",
  },
  {
    name: "Tailwind CSS",
    short: "Tailwind",
    icon: "💨",
    url: "https://tailwindcss.com/",
    orbit: "orbitI",
  },
  {
    name: "Git",
    short: "Git",
    icon: "🔧",
    url: "https://git-scm.com/",
    orbit: "orbitJ",
  },
];

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
    text: "Learn about my story, experience, certificates, resume and professional links.",
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
    text: "Explore my interactive skill globe with technologies and official resource links.",
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
    text: "A collection of responsive web projects, live demos and GitHub repositories.",
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
    text: "Send me a message, email me directly, or connect with me through social platforms.",
    fullTitle: "Contact Me",
    fullText:
      "Visitors can contact me here for collaboration, freelance work, project discussion, feedback, or professional opportunities.",
  },
];

function HomeSection() {
  return (
    <div className={styles.homeGrid}>
      <div className={styles.homeText}>
        <p className={styles.sectionKicker}>Interactive Portfolio</p>
        <h1>
          Hi, I am <span>{profile.name}</span>
        </h1>
        <p>
          I build creative, responsive and animated web experiences using modern
          frontend technologies. This portfolio is designed like a small
          adventure world where every section unlocks a part of my journey.
        </p>

        <div className={styles.homeActions}>
          <button
            type="button"
            onClick={() => {
              const projectsSection = document.getElementById("projects-area");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>

          <a href={`mailto:${profile.email}`}>Contact Me</a>
        </div>
      </div>

      <div className={styles.homeAvatarCard}>
        <Image
          src={profile.photo}
          alt={profile.name}
          width={360}
          height={360}
          className={styles.homeAvatar}
        />
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className={styles.aboutContent}>
      <div className={styles.aboutHero}>
        <Image
          src={profile.photo}
          alt={profile.name}
          width={360}
          height={360}
          className={styles.aboutPhoto}
        />

        <div>
          <p className={styles.sectionKicker}>About Me</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p>
            I am a frontend developer who enjoys turning ideas into interactive,
            responsive and story-driven websites. I focus on clean UI, smooth
            animation, good user experience and real project-based learning.
          </p>
        </div>
      </div>

      <div className={styles.infoBlock}>
        <div className={styles.blockHeader}>
          <span>01</span>
          <h3>Experience</h3>
        </div>

        <div className={styles.timeline}>
          {experiences.map((item) => (
            <article key={item.title} className={styles.timelineItem}>
              <small>{item.time}</small>
              <h4>{item.title}</h4>
              <p>{item.place}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.infoBlock}>
        <div className={styles.blockHeader}>
          <span>02</span>
          <h3>Certificates</h3>
        </div>

        <div className={styles.certificateGrid}>
          {certificates.map((certificate) => (
            <article key={certificate.title} className={styles.certificateCard}>
              <span>🏆</span>
              <h4>{certificate.title}</h4>
              <p>{certificate.issuer}</p>
              <small>{certificate.year}</small>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.profileLinks}>
        <a href={profile.resume} download className={styles.resumeButton}>
          Download Resume
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className={styles.skillsContent}>
      <div className={styles.skillsIntro}>
        <p className={styles.sectionKicker}>Skill Universe</p>
        <h1>Interactive Skill Globe</h1>
        <p>
          Hover on a skill to reveal its name. Click any skill to visit the
          official documentation or website.
        </p>
      </div>

      <div className={styles.globeStage}>
        <div className={styles.skillGlobe}>
          <div className={styles.globeCore}>
            <span>Frontend</span>
            <strong>Skills</strong>
          </div>

          {skills.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              className={`${styles.skillPlanet} ${styles[skill.orbit]}`}
              style={{ "--i": index }}
              aria-label={skill.name}
              data-name={skill.name}
            >
              <span className={styles.skillIcon}>{skill.icon}</span>
              <small>{skill.short}</small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div id="projects-area" className={styles.projectsContent}>
      <div className={styles.sectionIntro}>
        <p className={styles.sectionKicker}>Selected Work</p>
        <h1>Projects</h1>
        <p>
          Each card can link to live project preview and source code. Replace
          these placeholders with your real projects.
        </p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 92vw, 380px"
              />
            </div>

            <div className={styles.projectBody}>
              <small>{project.category}</small>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.techList}>
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${formData.name || "Visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.contactContent}>
      <div className={styles.contactInfo}>
        <p className={styles.sectionKicker}>Contact</p>
        <h1>Let&apos;s Build Something</h1>
        <p>
          Have a project, idea or collaboration in mind? Send me a message and I
          will get back to you.
        </p>

        <div className={styles.contactCards}>
          <a href={`mailto:${profile.email}`}>
            <span>✉️</span>
            <div>
              <small>Email</small>
              <strong>{profile.email}</strong>
            </div>
          </a>

          <a href={`tel:${profile.phone}`}>
            <span>📞</span>
            <div>
              <small>Phone</small>
              <strong>{profile.phone}</strong>
            </div>
          </a>
        </div>
      </div>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={updateField}
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={updateField}
            required
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows={6}
            value={formData.message}
            onChange={updateField}
            required
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

function SectionContent({ activePlace }) {
  if (activePlace.id === "home") return <HomeSection />;
  if (activePlace.id === "about") return <AboutSection />;
  if (activePlace.id === "skills") return <SkillsSection />;
  if (activePlace.id === "projects") return <ProjectsSection />;
  if (activePlace.id === "contact") return <ContactSection />;

  return null;
}

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
      <div className={styles.animatedBg} aria-hidden="true">
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

          <div className={styles.mapViewport}>
            <div className={styles.mapBox}>
              <Image
                src="/story/map.svg"
                alt="Portfolio adventure map"
                fill
                priority
                sizes="(max-width: 767px) 720px, (max-width: 1100px) 96vw, 1100px"
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
                sizes="(max-width: 767px) 100vw, 370px"
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

          <section className={styles.detailContent}>
            <SectionContent activePlace={activePlace} />
          </section>
        </section>
      )}
    </main>
  );
}
