export const translations = {
  en: {
    meta: {
      title: "Onias Filho - Software Engineer",
      description: "Software Engineer with over 5 years of experience. Currently building my portfolio. Get in touch via LinkedIn, WhatsApp, or email.",
      keywords: ["Software Engineer", "Developer", "Portfolio", "React", "Next.js", "Full Stack"],
      ogDescription: "Software Engineer with over 5 years of experience. Portfolio coming soon!"
    },
    underConstruction: {
      message: "Rome wasn't built in a day...",
      messageSecondLine: "but my portfolio will be ready",
      soon: "soon enough"
    }
  },
  "pt-BR": {
    meta: {
      title: "Onias Filho - Engenheiro de Software",
      description: "Engenheiro de Software com mais de 5 anos de experiência. Atualmente construindo meu portfólio. Entre em contato via LinkedIn, WhatsApp ou email.",
      keywords: ["Engenheiro de Software", "Desenvolvedor", "Portfólio", "React", "Next.js", "Full Stack"],
      ogDescription: "Engenheiro de Software com mais de 5 anos de experiência. Portfólio em breve!"
    },
    underConstruction: {
      message: "Roma não foi construída em um dia...",
      messageSecondLine: "mas meu portfólio vai estar pronto",
      soon: "em breve"
    }
  }
} as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}
