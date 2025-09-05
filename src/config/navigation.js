import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiSolidCard } from "react-icons/bi";

// Primary navigation links (order matters)
export const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "Cases Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "About me", to: "/about" },
];

// Base social links (style/hover handled in component)
export const socialBaseLinks = [
  {
    href: "https://www.instagram.com/lodex.studio/",
    label: "Instagram Lodex Studio (abre em nova aba)",
    icon: FaInstagram,
    key: "instagram",
  },
  {
    href: "https://github.com/lodsa-ntos/lodex-portfolio",
    label: "GitHub Lodex Studio (abre em nova aba)",
    icon: FaGithub,
    key: "github",
  },
  {
    href: "https://www.linkedin.com/in/lodney-santos/",
    label: "Linkedin (abre em nova aba)",
    icon: FaLinkedinIn,
    key: "linkedin",
  },
  {
    href: "https://lodexstudio-cards.vercel.app/",
    label: "Cards (abre em nova aba)",
    icon: BiSolidCard,
    key: "cards",
  },
];

// Navbar text content
export const navbarText = {
  sloganLines: ["Ideas.", "Code.", "Design.", "Unlimited."],
  pingCopy: "Let’s build together",
};
