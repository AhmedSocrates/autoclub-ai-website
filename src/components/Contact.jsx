import { Mail } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { CONTACT_EMAIL } from "../constants";

export default function Contact() {
  const ref = useRevealOnScroll();

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        ref={ref}
        className="animate-on-scroll mx-auto max-w-xl rounded-2xl border border-white/10 bg-surface px-6 py-14 text-center"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Get in Touch
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Questions about AutoClub AI? Reach out.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
          Whether it's feedback, a bug report, or a feature request, I'd love
          to hear from you.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-canvas transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]"
        >
          <Mail className="h-4 w-4" />
          Email Me
        </a>

        <p className="mt-4 text-xs text-slate">{CONTACT_EMAIL}</p>
      </div>
    </section>
  );
}
