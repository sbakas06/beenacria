"use client";

import { AnimatePresence, MotionConfig, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Instagram,
  MapPin,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { beeValues, faqs, galleryItems, honeyDetails, navItems, sicilyNotes, timeline } from "@/data/content";
import { BrandLogo } from "./BrandLogo";

const facebookUrl = "https://www.facebook.com/people/Beenacria-apicoltura/61584444359932/";
const instagramUrl = "https://www.instagram.com/beenacria.apicoltura/";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Beenacria%2C%20Contrada%20Fontanelle%2C%2093100%20Caltanissetta%20CL";
const address = "Beenacria, Contrada Fontanelle, 93100 Caltanissetta CL";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function SectionReveal({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 54 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function MagneticButton({
  children,
  href,
  variant = "primary",
  ariaLabel
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={`magnetic-btn ${variant === "ghost" ? "magnetic-btn--ghost" : ""}`}
      whileHover={reduceMotion ? undefined : { scale: 1.045, y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </motion.a>
  );
}

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.45, duration: 0.55, ease: "easeOut" }}
      aria-hidden="true"
    >
      <motion.div className="drop" animate={{ scaleY: [1, 1.18, 0.95, 1], y: [0, 8, -4, 0] }} transition={{ duration: 1.2, repeat: 1, ease: "easeInOut" }} />
      <span>Beenacria</span>
    </motion.div>
  );
}

function HoneyField() {
  return (
    <div className="honey-field" aria-hidden="true">
      <motion.div
        className="honey-blob honey-blob--one"
        animate={{ x: [0, 32, -18, 0], y: [0, -18, 28, 0], rotate: [0, 3, -4, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="honey-blob honey-blob--two"
        animate={{ x: [0, -26, 18, 0], y: [0, 24, -12, 0], rotate: [0, -5, 2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="honeycomb" animate={{ backgroundPosition: ["0px 0px", "44px 32px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
    </div>
  );
}

function Pollen() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        delay: (index % 8) * 0.34,
        duration: 7 + (index % 6)
      })),
    []
  );

  return (
    <div className="pollen" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          style={{ left: particle.left }}
          animate={{ y: ["105vh", "-12vh"], opacity: [0, 0.7, 0], x: [0, particle.id % 2 ? 22 : -18, 0] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

function FlyingBee({
  className = "",
  style
}: {
  className?: string;
  style?: React.ComponentProps<typeof motion.svg>["style"];
}) {
  return (
    <motion.svg
      className={`flying-bee ${className}`}
      viewBox="0 0 80 52"
      aria-hidden="true"
      style={style}
    >
      <ellipse cx="36" cy="30" rx="17" ry="10" fill="#7a4b14" />
      <ellipse cx="51" cy="28" rx="10" ry="8" fill="#f4a124" />
      <path d="M27 23 L31 39 M39 20 L42 40" stroke="#fff2c4" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="28" cy="16" rx="15" ry="8" fill="rgba(255,255,255,.62)" />
      <ellipse cx="44" cy="14" rx="14" ry="8" fill="rgba(255,255,255,.5)" />
      <path d="M60 24 Q70 14 72 5" stroke="#7a4b14" strokeWidth="3" fill="none" strokeLinecap="round" />
    </motion.svg>
  );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`tilt-card ${className}`}
      whileHover={reduceMotion ? undefined : { rotateX: 2.5, rotateY: -2.5, y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.button
            type="button"
            className={`gallery-tile gallery-tile--${item.shape}`}
            key={item.title}
            onClick={() => setActive(index)}
            aria-label={`Apri foto: ${item.title}`}
            whileHover={{ y: -8, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1100px) 44vw, 28vw"
              style={item.focal ? { objectPosition: item.focal } : undefined}
            />
            <span className="gallery-text">
              <strong>{item.title}</strong>
              <small>{item.caption}</small>
            </span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && mounted ? (
          createPortal(
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label={galleryItems[active].title}
            >
              <motion.button className="lightbox-close" onClick={() => setActive(null)} aria-label="Chiudi gallery">
                <X aria-hidden="true" />
              </motion.button>
              <motion.div
                className="lightbox-art"
                initial={{ scale: 0.88, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 10 }}
              >
                <Image
                  src={galleryItems[active].src}
                  alt={galleryItems[active].alt}
                  fill
                  sizes="94vw"
                  style={galleryItems[active].focal ? { objectPosition: galleryItems[active].focal } : undefined}
                />
                <span>
                  <strong>{galleryItems[active].title}</strong>
                  <small>{galleryItems[active].caption}</small>
                </span>
              </motion.div>
            </motion.div>,
            document.body
          )
        ) : null}
      </AnimatePresence>
    </>
  );
}

function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://beenacria.it/#organization",
        name: "Beenacria",
        url: "https://beenacria.it",
        sameAs: [facebookUrl, instagramUrl],
        logo: "https://beenacria.it/og-image.svg",
        description: "Micro attività siciliana di apicoltura artigianale a Caltanissetta."
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://beenacria.it/#localbusiness",
        name: "Beenacria",
        image: "https://beenacria.it/og-image.svg",
        url: "https://beenacria.it",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Contrada Fontanelle",
          postalCode: "93100",
          addressLocality: "Caltanissetta",
          addressRegion: "CL",
          addressCountry: "IT"
        },
        areaServed: "Sicilia",
        priceRange: "$$",
        description: "Apicoltura artigianale siciliana: miele di qualità, natura e territorio."
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export function HomeExperience() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const heroBeeX = useTransform(scrollYProgress, [0, 1], ["-14vw", "108vw"]);
  const heroBeeY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [20, -16, 18, -8]);

  return (
    <MotionConfig reducedMotion="user">
      <JsonLd />
      <Loader />
      <a className="skip-link" href="#main">
        Salta al contenuto
      </a>
      <HoneyField />
      <Pollen />
      <header className="site-nav">
        <a href="#home" aria-label="Torna alla home Beenacria">
          <BrandLogo className="nav-logo" />
        </a>
        <nav aria-label="Navigazione principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contatti">
          Scrivici
        </a>
      </header>

      <main id="main">
        <section id="home" ref={heroRef} className="hero">
          <motion.div className="hero-photo" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.75, duration: 0.9 }}>
            <Image
              src="/assets/beenacria/photo-02.jpg"
              alt="Due giovani apicoltori Beenacria al lavoro con le api"
              fill
              priority
              sizes="(max-width: 760px) 92vw, 38vw"
            />
          </motion.div>
          <FlyingBee className="flying-bee--hero" style={{ x: heroBeeX, y: heroBeeY }} />
          <motion.div className="hero-inner" style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div initial={{ opacity: 0, scale: 0.86 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              <BrandLogo className="hero-logo" />
            </motion.div>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82 }}>
              Apicoltura artigianale · Caltanissetta
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.8 }}>
              Il miele che racconta la Sicilia.
            </motion.h1>
            <motion.p className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.12, duration: 0.75 }}>
              Due giovani apicoltori, api curate con rispetto e fioriture dell&apos;entroterra siciliano.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }}>
              <MagneticButton href="#miele">Scopri il nostro miele</MagneticButton>
              <MagneticButton href="#contatti" variant="ghost">
                Contattaci
              </MagneticButton>
            </motion.div>
          </motion.div>
          <motion.a className="scroll-cue" href="#miele" aria-label="Scorri alla sezione miele" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown aria-hidden="true" />
          </motion.a>
        </section>

        <SectionReveal id="miele" className="section product-section">
          <div className="section-kicker">Il miele</div>
          <div className="split">
            <div>
              <h2>Miele siciliano, vivo e sincero.</h2>
              <p className="lead">
                Un solo miele, raccolto con cura nell&apos;entroterra di Caltanissetta. Colore caldo, profumo floreale, ritmo naturale.
              </p>
              <div className="pill-row">
                <span>Miele siciliano</span>
                <span>Produzione artigianale</span>
              </div>
              <MagneticButton href={facebookUrl} ariaLabel="Apri la pagina Facebook ufficiale Beenacria">
                Scrivici su Facebook
              </MagneticButton>
              <MagneticButton href={instagramUrl} variant="ghost" ariaLabel="Apri il profilo Instagram Beenacria">
                Instagram
              </MagneticButton>
            </div>
            <TiltCard className="honey-card">
              <Image
                src="/assets/beenacria/product-honey.jpg"
                alt="Vasetto di miele artigianale Beenacria"
                width={2268}
                height={4032}
                className="product-photo"
                sizes="(max-width: 980px) 92vw, 34vw"
              />
              <h3>Miele artigianale Beenacria</h3>
              <p>Dalla natura siciliana, raccolto con cura.</p>
            </TiltCard>
          </div>
          <div className="product-summary" aria-label="Caratteristiche del miele Beenacria">
            {honeyDetails.map((detail) => (
              <article key={detail.label}>
                <span>{detail.label}</span>
                <p>{detail.value}</p>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="section timeline-section">
          <div className="section-kicker">Dal fiore al vasetto</div>
          <h2>Dal fiore al vasetto, senza fretta.</h2>
          <div className="timeline">
            {timeline.map((step, index) => (
              <motion.article
                key={step.title}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 ? 38 : -38 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="chi-siamo" className="section about-section">
          <div className="split split--reverse">
            <div className="organic-frame">
              <Image
                src="/assets/beenacria/founders.png"
                alt="I fondatori di Beenacria, giovani apicoltori siciliani"
                fill
                sizes="(max-width: 980px) 92vw, 38vw"
              />
            </div>
            <div>
              <div className="section-kicker">Chi siamo</div>
              <h2>Una piccola realtà siciliana.</h2>
              <p className="lead">
                Beenacria nasce a Caltanissetta da una passione semplice: seguire le api, rispettare la natura e portare nel vasetto un pezzo di Sicilia.
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal id="api" className="section bees-section">
          <div className="section-kicker">Le api</div>
          <h2>Piccole presenze che tengono acceso il paesaggio.</h2>
          <div className="bees-intro">
            <p className="lead narrow">
              Le api custodiscono biodiversità, impollinano fiori e colture, indicano quando l&apos;ambiente respira bene.
            </p>
            <div className="bees-photo">
              <Image src="/assets/beenacria/photo-03.jpg" alt="Api su un telaino osservato durante il lavoro in apiario" fill sizes="(max-width: 980px) 92vw, 40vw" />
            </div>
          </div>
          <div className="value-grid">
            {beeValues.map((item) => (
              <TiltCard key={item.title}>
                <item.icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </TiltCard>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="sicilia" className="section sicily-section">
          <div className="sicily-visual" aria-hidden="true">
            <Image src="/assets/beenacria/photo-01.jpg" alt="" fill sizes="(max-width: 980px) 85vw, 34vw" />
          </div>
          <div className="section-kicker">Sicilia</div>
          <h2>Ogni goccia nasce da un paesaggio.</h2>
          <p className="lead narrow">
            Sole, fioriture e paesaggi interni: il miele porta nel colore il carattere caldo della Sicilia.
          </p>
          <a className="map-link-inline" href={mapsUrl} aria-label={`Apri ${address} su Google Maps`}>
            <MapPin aria-hidden="true" /> {address}
          </a>
          <div className="value-grid">
            {sicilyNotes.map((item) => (
              <TiltCard key={item.title}>
                <item.icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </TiltCard>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="gallery" className="section gallery-section">
          <div className="section-kicker">Gallery</div>
          <h2>Materia, luce, api e territorio.</h2>
          <p className="lead narrow">Una traccia visiva calda, pronta per accogliere foto reali del brand.</p>
          <Gallery />
        </SectionReveal>

        <SectionReveal className="section faq-section">
          <div className="section-kicker">FAQ</div>
          <h2>Domande semplici, risposte sincere.</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  {faq.question}
                  <ChevronDown aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="contatti" className="section contact-section">
          <div className="split">
            <div>
              <div className="section-kicker">Contatti</div>
              <h2>Scrivici per conoscere disponibilità e formati.</h2>
              <div className="contact-list">
                <a href={facebookUrl} aria-label="Pagina Facebook Beenacria">
                  <Facebook aria-hidden="true" /> Pagina Facebook ufficiale
                </a>
                <a href={instagramUrl} aria-label="Profilo Instagram Beenacria">
                  <Instagram aria-hidden="true" /> Instagram
                </a>
                <a href={mapsUrl} aria-label={`Apri ${address} su Google Maps`}>
                  <MapPin aria-hidden="true" /> {address}
                </a>
              </div>
            </div>
            <TiltCard className="contact-panel">
              <span>Canale diretto</span>
              <h3>Ci trovi sui social e in Contrada Fontanelle.</h3>
              <p>Scrivici per disponibilità e aggiornamenti sui raccolti, o apri la posizione su Maps.</p>
              <MagneticButton href={facebookUrl} ariaLabel="Apri Facebook Beenacria">
                Apri Facebook
              </MagneticButton>
              <MagneticButton href={instagramUrl} variant="ghost" ariaLabel="Apri Instagram Beenacria">
                Instagram
              </MagneticButton>
            </TiltCard>
          </div>
          <a className="map-placeholder" href={mapsUrl} aria-label={`Apri ${address} su Google Maps`}>
            <span>{address}</span>
          </a>
        </SectionReveal>
      </main>

      <footer className="footer">
        <BrandLogo />
        <p>Un miele semplice, vivo, sincero. Dalla natura siciliana, raccolto con cura.</p>
        <a href="#home">Torna su</a>
      </footer>
    </MotionConfig>
  );
}
