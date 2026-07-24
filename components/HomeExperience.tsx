"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, Facebook, Instagram, MapPin, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  beeValues,
  faqs,
  galleryItems,
  honeyDetails,
  navItems,
  sequenceChapters,
  sicilyNotes,
  timeline
} from "@/data/content";
import { imageKitUrl } from "@/lib/imagekit";

const facebookUrl = "https://www.facebook.com/people/Beenacria-apicoltura/61584444359932/";
const instagramUrl = "https://www.instagram.com/beenacria.apicoltura/";
const mapUrl = "https://www.openstreetmap.org/?mlat=37.5004&mlon=14.0321#map=16/37.5004/14.0321";
const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=14.0221%2C37.4934%2C14.0421%2C37.5074&layer=mapnik&marker=37.5004%2C14.0321";
const address = "Beenacria, Contrada Fontanelle, 93100 Caltanissetta CL";
const sequenceFrameCounts = {
  desktop: 104,
  // The exported files from 101 through 240 are copies of the final frame.
  mobile: 101
} as const;

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
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function getSequenceFrame(variant: "desktop" | "mobile", index: number) {
  const sourceFolder = variant === "desktop" ? "bg_api_vicio_desktop" : "bg_api_vicio_mobile";
  const transformation = variant === "desktop" ? "w-1920,q-72,f-webp" : "w-900,q-72,f-webp";

  return imageKitUrl(`${sourceFolder}/${String(index + 1).padStart(3, "0")}.png`, transformation);
}

function getSequenceLayerOpacity(handoffProgress: number) {
  const fadeProgress = Math.max(0, Math.min(1, (handoffProgress - 0.04) / 0.52));

  return {
    animated: 1 - fadeProgress,
    fallback: fadeProgress
  };
}

function ScrollSequence({
  progress,
  handoffProgress
}: {
  progress: MotionValue<number>;
  handoffProgress: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const staticRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<Array<HTMLImageElement | undefined>>([]);
  const loadFrameRef = useRef<(index: number) => void>(() => undefined);
  const activeFrameRef = useRef(0);
  const reduceMotion = useReducedMotion();
  const [variant, setVariant] = useState<"desktop" | "mobile">("desktop");
  const frameCount = sequenceFrameCounts[variant];

  const paintFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas) return;

    let image = images[index];
    let paintedIndex = index;
    if (!image?.complete || !image.naturalWidth) {
      for (let offset = 1; offset < frameCount; offset += 1) {
        const previousIndex = Math.max(0, index - offset);
        const nextIndex = Math.min(frameCount - 1, index + offset);
        const previousImage = images[previousIndex];
        const nextImage = images[nextIndex];

        if (previousImage?.complete && previousImage.naturalWidth) {
          image = previousImage;
          paintedIndex = previousIndex;
          break;
        }
        if (nextImage?.complete && nextImage.naturalWidth) {
          image = nextImage;
          paintedIndex = nextIndex;
          break;
        }
      }
    }
    if (!image?.complete || !image.naturalWidth) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const density = Math.min(window.devicePixelRatio || 1, 2);
    const pixelWidth = Math.round(width * density);
    const pixelHeight = Math.round(height * density);

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    const context = canvas.getContext("2d");
    if (!context) return;

    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const x = (width - drawWidth) / 2;
    const y = (height - drawHeight) / 2;

    context.setTransform(density, 0, 0, density, 0, 0);
    context.clearRect(0, 0, width, height);
    context.drawImage(image, x, y, drawWidth, drawHeight);
    canvas.dataset.frame = String(paintedIndex + 1);
    canvas.dataset.frameCount = String(frameCount);
  }, [frameCount]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px) and (orientation: portrait)");
    const updateVariant = () => setVariant(media.matches ? "mobile" : "desktop");
    updateVariant();
    media.addEventListener("change", updateVariant);
    return () => media.removeEventListener("change", updateVariant);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let batchTimer: ReturnType<typeof setTimeout> | undefined;
    const frames: Array<HTMLImageElement | undefined> = Array(frameCount);
    imagesRef.current = frames;

    const loadFrame = (index: number) => {
      if (index < 0 || index >= frameCount || frames[index]) return;

      const image = new window.Image();
      image.decoding = "async";
      frames[index] = image;
      image.onload = () => {
        if (cancelled) return;
        if (index === activeFrameRef.current || index === 0 || (reduceMotion && index === frameCount - 1)) {
          paintFrame(activeFrameRef.current);
        }
      };
      image.onerror = () => {
        frames[index] = undefined;
      };
      image.src = getSequenceFrame(variant, index);
    };

    loadFrameRef.current = loadFrame;

    const initialProgress = progress.get();
    const initialFrame = reduceMotion ? frameCount - 1 : Math.round(initialProgress * (frameCount - 1));
    activeFrameRef.current = initialFrame;
    loadFrame(initialFrame);

    let nextFrame = 0;
    const loadBatch = () => {
      if (cancelled) return;
      let loaded = 0;
      while (nextFrame < frameCount && loaded < 10) {
        if (nextFrame !== initialFrame) loadFrame(nextFrame);
        nextFrame += 1;
        loaded += 1;
      }
      if (nextFrame < frameCount) batchTimer = setTimeout(loadBatch, 120);
    };
    batchTimer = setTimeout(loadBatch, 240);

    const observer = new ResizeObserver(() => paintFrame(activeFrameRef.current));
    if (canvasRef.current) observer.observe(canvasRef.current);

    return () => {
      cancelled = true;
      loadFrameRef.current = () => undefined;
      if (batchTimer) clearTimeout(batchTimer);
      observer.disconnect();
    };
  }, [frameCount, paintFrame, progress, reduceMotion, variant]);

  useMotionValueEvent(progress, "change", (value) => {
    const index = reduceMotion ? frameCount - 1 : Math.round(value * (frameCount - 1));
    if (index !== activeFrameRef.current) {
      activeFrameRef.current = index;
      loadFrameRef.current(index);
      for (let offset = 1; offset <= 3; offset += 1) {
        loadFrameRef.current(index - offset);
        loadFrameRef.current(index + offset);
      }
      paintFrame(index);
    }
  });

  useMotionValueEvent(handoffProgress, "change", (value) => {
    const layerOpacity = getSequenceLayerOpacity(value);
    if (stageRef.current) stageRef.current.style.opacity = String(layerOpacity.animated);
    if (staticRef.current) staticRef.current.style.opacity = String(layerOpacity.fallback);
  });

  useEffect(() => {
    let frame = 0;
    const syncInitialProgress = () => {
      const layerOpacity = getSequenceLayerOpacity(handoffProgress.get());

      if (stageRef.current) {
        stageRef.current.style.opacity = String(layerOpacity.animated);
      }
      if (staticRef.current) {
        staticRef.current.style.opacity = String(layerOpacity.fallback);
      }
    };

    syncInitialProgress();
    frame = window.requestAnimationFrame(syncInitialProgress);
    return () => window.cancelAnimationFrame(frame);
  }, [handoffProgress]);

  return (
    <>
      <div ref={staticRef} className="sequence-static" aria-hidden="true" />
      <div ref={stageRef} className="sequence-stage" aria-hidden="true">
        <canvas ref={canvasRef} className="sequence-canvas" />
        <div className="sequence-shade" />
      </div>
    </>
  );
}

function ActionLink({
  children,
  href,
  variant = "primary",
  ariaLabel
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  ariaLabel?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={`action-link action-link--${variant}`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} />
    </motion.a>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-logo" href="#home" aria-label="Torna alla home Beenacria">
          <Image
            src={imageKitUrl("FullLogo_Transparent.png", "t-true,w-320,q-90,f-auto")}
            alt=""
            width={760}
            height={600}
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contatti">
          <span>Scrivici</span>
          <ArrowRight aria-hidden="true" size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Navigazione mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span className="mobile-nav__index">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.label}</span>
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.classList.add("dialog-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className={`gallery-marquee${reduceMotion ? " gallery-marquee--static" : ""}`}>
        <div className="gallery-track">
          {[...galleryItems, ...galleryItems].map((item, itemIndex) => {
            const index = itemIndex % galleryItems.length;
            const isClone = itemIndex >= galleryItems.length;

            return (
              <motion.button
                type="button"
                className="gallery-tile"
                key={`${item.src}-${itemIndex}`}
                onClick={() => setActive(index)}
                aria-label={isClone ? undefined : `Apri foto: ${item.title}`}
                aria-hidden={isClone}
                tabIndex={isClone ? -1 : 0}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              >
                <Image
                  src={item.src}
                  alt={isClone ? "" : item.alt}
                  fill
                  sizes="(max-width: 560px) 78vw, (max-width: 900px) 48vw, 34vw"
                  style={item.focal ? { objectPosition: item.focal } : undefined}
                />
                <span className="gallery-caption">
                  <strong>{item.title}</strong>
                  <small>{item.caption}</small>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
      {mounted
        ? createPortal(
            <AnimatePresence>
              {active !== null ? (
              <motion.div
                className="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-label={galleryItems[active].title}
                onClick={() => setActive(null)}
              >
                <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Chiudi gallery">
                  <X aria-hidden="true" />
                </button>
                <motion.figure
                  className="lightbox-art"
                  initial={{ scale: 0.94, y: 18 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.96, y: 10 }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <Image
                    src={galleryItems[active].src}
                    alt={galleryItems[active].alt}
                    fill
                    sizes="94vw"
                    style={galleryItems[active].focal ? { objectPosition: galleryItems[active].focal } : undefined}
                  />
                  <figcaption>
                    <strong>{galleryItems[active].title}</strong>
                    <small>{galleryItems[active].caption}</small>
                  </figcaption>
                </motion.figure>
              </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
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
        priceRange: "€€",
        description: "Apicoltura artigianale siciliana: miele di qualità, natura e territorio."
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export function HomeExperience() {
  const sequenceRef = useRef<HTMLDivElement | null>(null);
  const postSequenceRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sequenceRef, offset: ["start start", "end end"] });
  const { scrollYProgress: handoffProgress } = useScroll({
    target: postSequenceRef,
    offset: ["start end", "start start"]
  });
  const heroTextY = useTransform(scrollYProgress, [0, 0.32], [0, 68]);

  return (
    <MotionConfig reducedMotion="user">
      <JsonLd />
      <a className="skip-link" href="#main">
        Salta al contenuto
      </a>
      <SiteHeader />

      <main id="main">
        <div ref={sequenceRef} className="sequence-zone">
          <ScrollSequence progress={scrollYProgress} handoffProgress={handoffProgress} />

          <section id="home" className="hero-section">
            <motion.div className="hero-copy" style={{ y: reduceMotion ? 0 : heroTextY }}>
              <p className="eyebrow">Miele artigianale siciliano</p>
              <h1>Il miele che racconta la Sicilia.</h1>
              <p className="hero-intro">
                Due giovani apicoltori, fioriture dell&apos;entroterra e cura autentica in ogni vasetto.
              </p>
              <div className="hero-actions">
                <ActionLink href="#miele">Scopri il nostro miele</ActionLink>
                <ActionLink href="#contatti" variant="secondary">
                  Contattaci
                </ActionLink>
              </div>
            </motion.div>
          </section>

          {sequenceChapters.map((chapter) => (
            <section className="section sequence-story" key={chapter.label}>
              <motion.div
                className="sequence-story__copy"
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="eyebrow">{chapter.label}</p>
                <h2>{chapter.title}</h2>
                <p className="lead">{chapter.text}</p>
              </motion.div>
            </section>
          ))}
        </div>

        <div ref={postSequenceRef} className="post-sequence">
          <SectionReveal id="miele" className="section product-section">
            <div className="product-copy">
              <div className="product-title">
                <p className="eyebrow">Il prodotto</p>
                <h2>Miele siciliano, vivo e sincero.</h2>
              </div>
              <div className="product-meta">
                <p className="lead">Tre formati: 1 kg, 500 g e 250 g.</p>
                <p className="product-formats">
                  Il 250 g è pensato anche per bomboniere, piccoli doni e occasioni speciali.
                </p>
                <ActionLink href={instagramUrl} variant="secondary" ariaLabel="Apri Instagram Beenacria">
                  Chiedi disponibilità
                </ActionLink>
              </div>
            </div>
            <motion.figure className="product-visual" whileHover={{ scale: 1.012 }} transition={{ duration: 0.5 }}>
              <Image
                src={imageKitUrl("miele_formati.png", "w-1800,q-84,f-auto")}
                alt="Miele Beenacria nei formati da un chilo, cinquecento e duecentocinquanta grammi"
                fill
                sizes="(max-width: 1100px) 92vw, 52vw"
              />
            </motion.figure>
            <dl className="honey-profile" aria-label="Caratteristiche del miele Beenacria">
              {honeyDetails.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </SectionReveal>

          <SectionReveal id="processo" className="section process-section">
            <div className="section-heading">
              <p className="eyebrow">Il processo</p>
              <h2>L&apos;arte della natura.</h2>
            </div>
            <div className="process-panel">
              <div className="process-flow" aria-hidden="true">
                <span />
              </div>
              {timeline.map((step, index) => (
                <article key={step.title}>
                  <div className="process-image">
                    <Image
                      src={
                        [
                          imageKitUrl("arnie_sunset.png", "w-800,q-80,f-auto"),
                          imageKitUrl("arnie_apicoltore.png", "w-800,q-80,f-auto"),
                          imageKitUrl("arnie.png", "w-800,q-80,f-auto")
                        ][index]
                      }
                      alt=""
                      fill
                      sizes="160px"
                    />
                    <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="process-copy">
                    <span className="process-phase">Fase {String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>

        <div className="background-transition background-transition--to-light" aria-hidden="true" />
        <div className="heritage-band">
          <SectionReveal id="chi-siamo" className="section heritage-section">
            <div className="heritage-image organic-mask organic-mask--light">
              <Image
                src={imageKitUrl("founder_beenacria.png", "w-1600,q-84,f-auto")}
                alt="I fondatori di Beenacria, giovani apicoltori siciliani"
                fill
                sizes="(max-width: 800px) 90vw, 46vw"
              />
            </div>
            <div className="heritage-copy">
              <p className="eyebrow">Chi siamo</p>
              <h2>Una piccola realtà siciliana.</h2>
              <p className="lead">
                Beenacria nasce a Caltanissetta da una passione semplice: seguire le api, rispettare la natura e portare nel vasetto un pezzo di Sicilia.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal id="api" className="section landscape-section">
            <div className="landscape-copy">
              <p className="eyebrow">Api e paesaggio</p>
              <h2>Piccole presenze che tengono acceso il paesaggio.</h2>
              <p className="lead">
                Le api custodiscono biodiversità, impollinano fiori e colture e raccontano la salute dell&apos;ambiente.
              </p>
              <div className="nature-values">
                {beeValues.map((item) => (
                  <article key={item.title}>
                    <item.icon aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="landscape-image organic-mask organic-mask--light">
              <Image
                src={imageKitUrl("arnie_apicoltore.png", "w-1600,q-82,f-auto")}
                alt="Alveari nel paesaggio dell'entroterra siciliano"
                fill
                sizes="(max-width: 800px) 90vw, 48vw"
              />
            </div>
          </SectionReveal>

          <SectionReveal id="sicilia" className="section territory-strip">
            <div className="territory-heading">
              <p className="eyebrow">Sicilia</p>
              <h2>Ogni goccia nasce da un paesaggio.</h2>
              <p className="territory-intro">
                Sole, vento e fioriture dell&apos;entroterra: il miele conserva ciò che incontra.
              </p>
            </div>
            <div className="territory-composition">
              <figure className="territory-visual">
                <Image
                  src={imageKitUrl("arnie_sunset.png", "w-1800,q-82,f-auto")}
                  alt="Alveari colorati Beenacria nel paesaggio di Caltanissetta"
                  fill
                  sizes="(max-width: 900px) 92vw, 56vw"
                />
                <figcaption>
                  <span>Entroterra siciliano</span>
                  <strong>Caltanissetta</strong>
                </figcaption>
              </figure>
              <div className="territory-details">
                <p className="territory-quote">“Ogni raccolto porta con sé la luce della sua stagione.”</p>
                <div className="territory-values">
                  {sicilyNotes.map((item, index) => (
                    <article key={item.title}>
                      <span className="territory-index">{String(index + 1).padStart(2, "0")}</span>
                      <item.icon aria-hidden="true" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <a className="location-link" href={mapUrl} aria-label={`Apri ${address} su OpenStreetMap`}>
                  <MapPin aria-hidden="true" />
                  <span>{address}</span>
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="background-transition background-transition--to-dark" aria-hidden="true" />
        <SectionReveal id="gallery" className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">Gallery</p>
            <h2>Materia, luce, api e territorio.</h2>
          </div>
          <Gallery />
        </SectionReveal>

        <SectionReveal id="faq" className="section faq-section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>
              <span>Domande semplici,</span>
              <span>risposte sincere.</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="contatti" className="section contact-section">
          <div className="contact-copy">
            <p className="eyebrow">Contatti</p>
            <h2>Scrivici per conoscere disponibilità e formati.</h2>
            <p className="lead">La produzione segue le stagioni. Contattaci sui canali ufficiali per sapere cosa è disponibile.</p>
            <div className="social-links" aria-label="Canali Beenacria">
              <a href={facebookUrl} aria-label="Pagina Facebook Beenacria">
                <Facebook aria-hidden="true" />
              </a>
              <a href={instagramUrl} aria-label="Profilo Instagram Beenacria">
                <Instagram aria-hidden="true" />
              </a>
              <a href={mapUrl} aria-label={`Apri ${address} su OpenStreetMap`}>
                <MapPin aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              title={`Mappa di ${address}`}
              src={mapEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="map-attribution"
              href="https://www.openstreetmap.org/copyright"
              aria-label="Informazioni sul copyright di OpenStreetMap"
            >
              © OpenStreetMap contributors
            </a>
            <div className="map-meta">
              <div>
                <span className="eyebrow">Dove trovarci</span>
                <strong>{address}</strong>
              </div>
              <ActionLink href={mapUrl} variant="secondary" ariaLabel={`Apri ${address} su OpenStreetMap`}>
                Indicazioni
              </ActionLink>
            </div>
          </div>
        </SectionReveal>
      </main>

      <footer className="footer">
        <div>
          <a className="wordmark" href="#home">
            Beenacria
          </a>
          <p>Un miele semplice, vivo, sincero. Dalla natura siciliana, raccolto con cura.</p>
        </div>
        <div className="footer-links">
          <a href={facebookUrl}>Facebook</a>
          <a href={instagramUrl}>Instagram</a>
          <a href={mapUrl}>Dove siamo</a>
        </div>
        <small>© {new Date().getFullYear()} Beenacria. Caltanissetta, Sicilia.</small>
      </footer>
    </MotionConfig>
  );
}
