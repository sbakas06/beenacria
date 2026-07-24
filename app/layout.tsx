import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://beenacria.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beenacria | Miele siciliano artigianale da Caltanissetta",
    template: "%s | Beenacria"
  },
  description:
    "Beenacria è una micro realtà siciliana di apicoltura artigianale: miele di qualità, api curate con rispetto e fioriture dell'entroterra di Caltanissetta.",
  applicationName: "Beenacria",
  keywords: [
    "Beenacria",
    "miele siciliano",
    "apicoltura artigianale",
    "Caltanissetta",
    "miele artigianale",
    "api Sicilia"
  ],
  authors: [{ name: "Beenacria" }],
  creator: "Beenacria",
  publisher: "Beenacria",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Beenacria | Il miele che racconta la Sicilia",
    description:
      "Api, fioriture e Sicilia in un solo vasetto. Un sito vetrina per una giovane apicoltura artigianale di Caltanissetta.",
    url: siteUrl,
    siteName: "Beenacria",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Logo Beenacria con texture miele e luce siciliana"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Beenacria | Il miele che racconta la Sicilia",
    description: "Miele siciliano artigianale, Caltanissetta, api e natura."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131412"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
