import Logo from "../assests/Logo.png";
import { APK_DOWNLOAD_URL } from "../constants";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={Logo}
            alt="Teknomarin, UTM logo"
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-ink">
            AutoClub AI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={APK_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-canvas transition-all duration-200 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]"
        >
          Download APK
        </a>
      </nav>
    </header>
  );
}
