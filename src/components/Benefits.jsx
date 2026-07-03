import { Sparkles, Clock, Layers, ShieldCheck } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const BENEFITS = [
  {
    icon: Clock,
    title: "Save hours every week",
    description:
      "No more manually building checklists or chasing task updates.",
  },
  {
    icon: Layers,
    title: "One source of truth",
    description:
      "Tasks, events, and social content live in a single place instead of scattered across WhatsApp and Drive.",
  },
  {
    icon: Sparkles,
    title: "Consistent, professional marketing",
    description: "Every post is on-brand and on-schedule, even during exam season.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing falls through the cracks",
    description:
      "Automatic status tracking and notifications keep leaders and members aligned in real time.",
  },
];

function BenefitItem({ icon: Icon, title, description }) {
  const ref = useRevealOnScroll();

  return (
    <div ref={ref} className="animate-on-scroll text-center sm:text-left">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
        <Icon className="h-4 w-4 text-ink" />
      </span>
      <p className="mt-4 text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}

export default function Benefits() {
  const headerRef = useRevealOnScroll();

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headerRef} className="animate-on-scroll mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Benefits
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built to give you time back.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {BENEFITS.map((benefit) => (
            <BenefitItem key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
