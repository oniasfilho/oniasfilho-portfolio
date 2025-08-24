import type { Metadata } from "next";
import "./globals.css";
import UnderConstruction from "./pages/UnderConstruction";

export const metadata: Metadata = {
  title: "Onias Filho - Software Engineer",
  description:
    "Software Engineer with over 5 years of experience. Currently building my portfolio. Get in touch via LinkedIn, WhatsApp, or email.",
  keywords: [
    "Software Engineer",
    "Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Full Stack",
  ],
  authors: [{ name: "Onias Filho", url: "https://linkedin.com/in/oniasfilho" }],
  creator: "Onias Filho",
  openGraph: {
    title: "Onias Filho - Software Engineer",
    description:
      "Software Engineer with over 5 years of experience. Portfolio coming soon!",
    url: "https://oniasfilho.com",
    siteName: "Onias Filho Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onias Filho - Software Engineer",
    description:
      "Software Engineer with over 5 years of experience. Portfolio coming soon!",
    creator: "@oniasfilho",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://oniasfilho.com",
  },
  other: {
    "contact:email": "onias.filho@gmail.com",
    "contact:phone": "+5565981522040",
    "contact:linkedin": "https://linkedin.com/in/oniasfilho",
    "profile:first_name": "Onias",
    "profile:last_name": "Filho",
    "profile:username": "oniasfilho",
  },
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UnderConstruction />
      </body>
    </html>
  );
}
