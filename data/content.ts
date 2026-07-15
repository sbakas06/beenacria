import type { LucideIcon } from "lucide-react";
import { Flower2, HeartHandshake, MapPin, Sparkles, Sprout, SunMedium } from "lucide-react";

export type HoneyDetail = {
  label: string;
  value: string;
};

export type TimelineStep = {
  title: string;
  text: string;
};

export type GalleryItem = {
  title: string;
  caption: string;
  src: string;
  alt: string;
  shape: "wide" | "tall" | "square";
  focal?: string;
};

export type ValueCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const navItems = [
  { href: "#miele", label: "Miele" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#api", label: "Le api" },
  { href: "#sicilia", label: "Sicilia" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" }
] as const;

export const honeyDetails: HoneyDetail[] = [
  { label: "Colore", value: "Ambrato caldo." },
  { label: "Profumo", value: "Floreale, pulito, mediterraneo." },
  { label: "Sapore", value: "Morbido e sincero." },
  { label: "Origine", value: "Caltanissetta, Sicilia." }
];

export const timeline: TimelineStep[] = [
  { title: "Fioritura", text: "Aspettiamo il momento giusto." },
  { title: "Alveare", text: "Curiamo le famiglie con attenzione." },
  { title: "Raccolta", text: "Preleviamo solo ciò che è pronto." },
  { title: "Vasetto", text: "Il miele riposa e arriva sincero." }
];

export const beeValues: ValueCard[] = [
  {
    title: "Biodiversità",
    text: "Le api tengono insieme fioriture, frutti e paesaggi. Proteggerle significa proteggere il futuro.",
    icon: Sprout
  },
  {
    title: "Impollinazione",
    text: "Ogni volo sposta vita da un fiore all'altro e rende possibile una natura più ricca.",
    icon: Flower2
  },
  {
    title: "Cura lenta",
    text: "Gli alveari chiedono attenzione, presenza e mani gentili.",
    icon: HeartHandshake
  }
];

export const sicilyNotes: ValueCard[] = [
  {
    title: "Sole",
    text: "La luce siciliana scalda le fioriture e lascia nel miele una memoria dorata.",
    icon: SunMedium
  },
  {
    title: "Entroterra",
    text: "Caltanissetta e i paesaggi interni: colline, campi, silenzi buoni e vento caldo.",
    icon: MapPin
  },
  {
    title: "Materia viva",
    text: "Ogni raccolto cambia un poco, come cambiano le stagioni. È questa la sua bellezza.",
    icon: Sparkles
  }
];

export const galleryItems: GalleryItem[] = [
  {
    title: "In apiario",
    caption: "Gli alveari colorati nell'entroterra siciliano.",
    src: "/assets/beenacria/photo-01.jpg",
    alt: "Alveari colorati nel paesaggio di Caltanissetta",
    shape: "tall"
  },
  {
    title: "I fondatori",
    caption: "Due giovani apicoltori, una terra calda, un progetto fatto con cura.",
    src: "/assets/beenacria/founders.png",
    alt: "I fondatori di Beenacria sorridono nel contesto dell'apicoltura",
    shape: "wide",
    focal: "center 32%"
  },
  {
    title: "Giornata in apiario",
    caption: "Cura degli alveari durante una giornata di lavoro.",
    src: "/assets/beenacria/photo-02.jpg",
    alt: "Due apicoltori con tute protettive lavorano accanto agli alveari",
    shape: "wide"
  },
  {
    title: "Il telaino",
    caption: "Api, cera e gesti precisi.",
    src: "/assets/beenacria/photo-03.jpg",
    alt: "Telaino con api e cera osservato da un apicoltore",
    shape: "wide"
  },
  {
    title: "Controllo degli alveari",
    caption: "Il ritmo lento della cura artigianale.",
    src: "/assets/beenacria/photo-04.jpg",
    alt: "Apicoltore in tuta gialla controlla un alveare",
    shape: "wide"
  },
  {
    title: "Fioriture e cera",
    caption: "Il miele comincia nel paesaggio.",
    src: "/assets/beenacria/photo-05.png",
    alt: "Telaino con api e fioriture sullo sfondo",
    shape: "tall"
  },
  {
    title: "Case delle api",
    caption: "Alveari colorati, cielo e natura.",
    src: "/assets/beenacria/photo-06.jpg",
    alt: "Fila di alveari colorati con api in volo",
    shape: "square"
  }
];

export const faqs = [
  {
    question: "Il miele cristallizza?",
    answer:
      "Sì. È un processo naturale del miele autentico. Se lo preferisci fluido, scaldalo dolcemente a bagnomaria."
  },
  {
    question: "Come conservarlo?",
    answer:
      "Tieni il vasetto ben chiuso, lontano da luce diretta e fonti di calore. Non serve frigorifero."
  },
  {
    question: "Da dove proviene?",
    answer:
      "Da fioriture dell'entroterra siciliano, nel territorio di Caltanissetta."
  },
  {
    question: "Come posso acquistarlo o ordinarlo?",
    answer:
      "Scrivici dalla pagina Facebook ufficiale. Ti risponderemo con disponibilità e formati."
  },
  {
    question: "È un prodotto artigianale?",
    answer:
      "Sì. Beenacria è una piccola realtà locale: pochi lotti, cura diretta e niente logiche industriali."
  }
];
