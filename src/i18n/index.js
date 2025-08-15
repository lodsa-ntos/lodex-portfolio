import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      "nav": {
        "home": "Início",
        "about": "Sobre mim",
        "services": "Serviços", 
        "portfolio": "Portfólio",
        "blog": "Blog",
        "contact": "Conversar"
      },
      "hero": {
        "greeting": "Olá, sou o Lodney",
        "title": "Frontend Developer",
        "subtitle": "Criação de websites modernos, leves e escaláveis",
        "description": "Interfaces funcionais com identidade clara e foco no detalhe. Não prometo tudo.",
        "cta": "Ver trabalhos",
        "contact": "mas o que prometo, eu entrego"
      },
      "about": {
        "title": "Sobre mim",
        "subtitle": "Frontend Developer & UI Designer",
        "description": "Apaixonado por criar experiências digitais que conectam marcas e pessoas de forma autêntica",
        "location": "Sacavém, Lisboa",
        "experience": "2+ anos de experiência",
        "projects": "15+ projetos entregues"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About me",
        "services": "Services",
        "portfolio": "Portfolio", 
        "blog": "Blog",
        "contact": "Let's talk"
      },
      "hero": {
        "greeting": "Hi, I'm Lodney",
        "title": "Frontend Developer",
        "subtitle": "Creating modern, lightweight and scalable websites",
        "description": "Functional interfaces with clear identity and attention to detail. I don't promise everything.",
        "cta": "View work",
        "contact": "but what I promise, I deliver"
      },
      "about": {
        "title": "About me",
        "subtitle": "Frontend Developer & UI Designer",
        "description": "Passionate about creating digital experiences that authentically connect brands and people",
        "location": "Sacavém, Lisbon",
        "experience": "2+ years of experience",
        "projects": "15+ delivered projects"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    debug: true, // Enable debug to see what's happening

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
