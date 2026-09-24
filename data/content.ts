import type { LucideIcon } from "lucide-react";
import { Flower2, HeartHandshake, MapPin, Sparkles, Sprout, SunMedium } from "lucide-react";
import { imageKitUrl } from "@/lib/imagekit";

export type HoneyDetail = {
  label: string;
  value: string;
};

export type TimelineStep = {
  title: string;
  text: string;
};

export type SequenceChapter = {
  label: string;
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
  { href: "#processo", label: "Processo" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contatti", label: "Contatti" }
] as const;

export const honeyDetails: HoneyDetail[] = [
  { label: "Colore", value: "Ambrato caldo." },
  { label: "Sapore", value: "Floreale e pulito." },
  { label: "Aroma", value: "Intenso, mediterraneo." },
  { label: "Origine", value: "Caltanissetta, Sicilia." }
];

export const timeline: TimelineStep[] = [
  {
    title: "Fioritura",
    text: "Seguiamo le fioriture dell'entroterra e aspettiamo il momento giusto."
  },
  {
    title: "Alveare",
    text: "Curiamo le famiglie con presenza, attenzione e rispetto dei loro tempi."
  },
  {
    title: "Raccolta",
    text: "Preleviamo solo ciò che è pronto, senza forzature e senza fretta."
  }
];

export const sequenceChapters: SequenceChapter[] = [
  {
    label: "Fioriture",
    title: "Ogni raccolto comincia molto prima del vasetto.",
    text: "Comincia nel sole, nel vento e nei fiori dell'entroterra. Noi osserviamo e aspettiamo il momento giusto."
  },
  {
    label: "Cura",
    title: "Sono le api a dettare il tempo.",
    text: "Entriamo in apiario con attenzione, leggiamo il ritmo delle famiglie e interveniamo soltanto quando serve."
  },
  {
    label: "Raccolta",
    title: "Prendiamo solo ciò che è pronto.",
    text: "Il resto rimane all'alveare. È una scelta semplice: rispettare la natura prima ancora di raccoglierne il miele."
  }
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
    title: "I formati",
    caption: "Miele millefiori nei formati da 1 kg, 500 g e 250 g.",
    src: imageKitUrl("miele_formati.png", "w-1600,q-82,f-auto"),
    alt: "Tre vasetti di miele Beenacria nei formati da un chilo, cinquecento e duecentocinquanta grammi",
    shape: "wide",
    focal: "center center"
  },
  {
    title: "I fondatori",
    caption: "Due giovani apicoltori, una terra calda, un progetto fatto con cura.",
    src: imageKitUrl("founder_beenacria.png", "w-1600,q-82,f-auto"),
    alt: "I due fondatori di Beenacria in abiti da apicoltore nell'entroterra siciliano",
    shape: "tall",
    focal: "center 30%"
  },
  {
    title: "L'apiario al tramonto",
    caption: "Le arnie raccolgono l'ultima luce dell'entroterra.",
    src: imageKitUrl("arnie_sunset.png", "w-1600,q-82,f-auto"),
    alt: "Arnie colorate Beenacria al tramonto nel paesaggio di Caltanissetta",
    shape: "wide"
  },
  {
    title: "Cura sul campo",
    caption: "Presenza, attenzione e gesti misurati.",
    src: imageKitUrl("arnie_apicoltore.png", "w-1600,q-82,f-auto"),
    alt: "Apicoltore al lavoro accanto alle arnie colorate al tramonto",
    shape: "wide"
  },
  {
    title: "Case delle api",
    caption: "Colori e natura, nel ritmo quieto dell'apiario.",
    src: imageKitUrl("arnie.png", "w-1600,q-82,f-auto"),
    alt: "Gruppo di arnie colorate Beenacria nella luce calda della sera",
    shape: "wide"
  },
  {
    title: "In apiario",
    caption: "Gli alveari colorati nell'entroterra siciliano.",
    src: imageKitUrl("IMG_4198.JPG", "w-1600,q-82,f-auto"),
    alt: "Alveari colorati nel paesaggio di Caltanissetta",
    shape: "tall"
  },
  {
    title: "Giornata in apiario",
    caption: "Cura degli alveari durante una giornata di lavoro.",
    src: imageKitUrl("3841BA20-1888-4D83-A43C-0A2D539E40B92026-04-07_14-46-37_266.JPEG", "w-1600,q-82,f-auto"),
    alt: "Due apicoltori con tute protettive lavorano accanto agli alveari",
    shape: "wide"
  },
  {
    title: "Il telaino",
    caption: "Api, cera e gesti precisi.",
    src: imageKitUrl("A7B76F77-C781-45D2-AFB7-D0DD03729BC02026-04-07_14-47-47_080.JPEG", "w-1600,q-82,f-auto"),
    alt: "Telaino con api e cera osservato da un apicoltore",
    shape: "wide"
  },
  {
    title: "Controllo degli alveari",
    caption: "Il ritmo lento della cura artigianale.",
    src: imageKitUrl("IMG_7112.JPG", "w-1600,q-82,f-auto"),
    alt: "Apicoltore in tuta gialla controlla un alveare",
    shape: "wide"
  },
  {
    title: "Fioriture e cera",
    caption: "Il miele comincia nel paesaggio.",
    src: imageKitUrl("IMG_7885.PNG", "w-1200,q-82,f-auto"),
    alt: "Telaino con api e fioriture sullo sfondo",
    shape: "tall"
  },
  {
    title: "Case delle api",
    caption: "Alveari colorati, cielo e natura.",
    src: imageKitUrl("IMG_5836.jpg", "w-1200,q-82,f-auto"),
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
      "Scrivici su Facebook o Instagram. Ti risponderemo con disponibilità e formati."
  },
  {
    question: "È un prodotto artigianale?",
    answer:
      "Sì. Beenacria è una piccola realtà locale: pochi lotti, cura diretta e niente logiche industriali."
  }
];
