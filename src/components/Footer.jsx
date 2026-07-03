import Logo from "../assests/Logo.png";
import { CONTACT_EMAIL } from "../constants";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "GitHub / Club Repository", href: "#github" },
  { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-slate sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={Logo}
            alt="Teknomarin, UTM logo"
            className="h-7 w-7 shrink-0 object-contain"
          />
          <span>&copy; 2026 AutoClub AI · Teknomarin, UTM</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
