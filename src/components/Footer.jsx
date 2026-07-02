import Logo from "../assests/Logo.png";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "GitHub / Club Repository", href: "#github" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-slate sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
            <img
              src={Logo}
              alt="Teknomarin, UTM logo"
              className="h-full w-full object-cover"
            />
          </span>
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
