import { Sparkles, Send, CheckCircle2, Bell } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import PhoneFrame from "./PhoneFrame";
import Tasks from "../assests/Tasks.png";
import Social from "../assests/Social.png";
import Events from "../assests/Events.png";
import Dashboard from "../assests/Dashboard.png";

const FEATURES = [
  {
    icon: Sparkles,
    eyebrow: "Smart Task Blueprinting",
    title: "AI Task Orchestration Engine",
    description:
      "Ingest club event parameters instantly using gemini-2.5-flash. Auto-generate targeted checklist items, calculate intelligent deadline windows, and dynamically flag due dates.",
    screenshot: Tasks,
    alt: "AutoClub AI task management screen showing a checklist of event tasks with due dates",
    flagship: true,
  },
  {
    icon: Send,
    eyebrow: "One-Click Social Blast",
    title: "Social Media Scheduling Automation",
    description:
      "Create a post, pick a release window, and let gemini-2.0-flash instantly write platform-optimized copy. Real-time delivery to Telegram channels and organized queues for Facebook feeds.",
    screenshot: Social,
    alt: "AutoClub AI social scheduling screen showing posts queued for Telegram and Facebook",
  },
  {
    icon: CheckCircle2,
    eyebrow: "Context-Aware Visuals",
    title: "Smart Execution Card UI",
    description:
      "Beautiful, state-driven task tracking cards with intelligent reminder banners. Automatically tags tasks as Overdue, Due Today, or Due Soon.",
    screenshot: Events,
    alt: "AutoClub AI events screen showing an upcoming club event card",
  },
  {
    icon: Bell,
    eyebrow: "Stay Synced, Instantly",
    title: "Live Collaborative Notification Bus",
    description:
      "Real-time, user-scoped notification inboxes. Alerts assigned members the instant a task is distributed, and updates Club Leaders the moment a milestone is completed.",
    screenshot: Dashboard,
    alt: "AutoClub AI dashboard screen zoomed on the notification bell and club overview",
    imgClassName: "object-top",
  },
];

function FeatureRow({ icon: Icon, eyebrow, title, description, screenshot, alt, flagship, imgClassName, reverse }) {
  const ref = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll flex flex-col items-center gap-10 md:gap-16 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative w-full max-w-xs shrink-0 sm:max-w-sm">
        {flagship && (
          <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-3xl" />
        )}
        <PhoneFrame
          src={screenshot}
          alt={alt}
          imgClassName={imgClassName}
          className={
            flagship
              ? "shadow-[0_0_50px_rgba(250,204,21,0.15)] ring-1 ring-accent/50"
              : ""
          }
        />
      </div>

      <div className="max-w-md text-center md:text-left">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
            flagship ? "bg-accent/15" : "bg-white/5"
          }`}
        >
          <Icon className={`h-5 w-5 ${flagship ? "text-accent" : "text-ink"}`} />
        </span>

        <p className="mt-6 text-xs font-medium uppercase tracking-widest text-slate">
          {eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeatureGrid() {
  const headerRef = useRevealOnScroll();

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headerRef} className="animate-on-scroll mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everything a club needs, automated
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            From task creation to social distribution, AutoClub AI handles
            the busywork so your team can focus on the event itself.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {FEATURES.map((feature, index) => (
            <FeatureRow key={feature.title} {...feature} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
