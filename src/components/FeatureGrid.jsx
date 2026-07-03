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
    steps: [
      "A club leader enters basic event details (name, date, venue, scope).",
      "gemini-2.5-flash parses those parameters and drafts a full checklist of tasks needed to run the event, based on the type of event.",
      "Each generated task gets an intelligent deadline calculated backward from the event date, spacing work out realistically.",
      "Tasks are auto-assigned status flags and pushed straight into the task board — no manual list-building required.",
    ],
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
    steps: [
      "A member drafts a short post brief (event name, key details, tone) and picks a target release window.",
      "gemini-2.0-flash generates platform-tailored copy — adjusting length, hashtags, and phrasing for each destination.",
      "Posts scheduled for Telegram go out instantly and directly to the connected channel at the chosen time.",
      "Posts for Facebook are placed into an organized publishing queue, ready for a quick review before going live.",
    ],
    screenshot: Social,
    alt: "AutoClub AI social scheduling screen showing posts queued for Telegram and Facebook",
  },
  {
    icon: CheckCircle2,
    eyebrow: "Context-Aware Visuals",
    title: "Smart Execution Card UI",
    description:
      "Beautiful, state-driven task tracking cards with intelligent reminder banners. Automatically tags tasks as Overdue, Due Today, or Due Soon.",
    steps: [
      "Every task renders as a card that reflects its live state — not just a static checkbox.",
      "The app continuously compares each task's deadline against the current time.",
      "Based on that comparison, a reminder banner and color tag automatically apply: Overdue, Due Today, or Due Soon.",
      "Members instantly see what needs attention first, without digging through a flat list.",
    ],
    screenshot: Events,
    alt: "AutoClub AI events screen showing an upcoming club event card",
  },
  {
    icon: Bell,
    eyebrow: "Stay Synced, Instantly",
    title: "Live Collaborative Notification Bus",
    description:
      "Real-time, user-scoped notification inboxes. Alerts assigned members the instant a task is distributed, and updates Club Leaders the moment a milestone is completed.",
    steps: [
      "Every user has a private, scoped notification inbox — no noisy shared feed.",
      "The moment a task is assigned to a member, they receive an instant notification.",
      "When that member marks the task complete, Club Leaders are notified in real time that a milestone has landed.",
      "The whole loop happens without anyone needing to manually check in or send a status update.",
    ],
    screenshot: Dashboard,
    alt: "AutoClub AI dashboard screen zoomed on the notification bell and club overview",
  },
];

function HowItWorksList({ steps }) {
  return (
    <ol className="mt-6 space-y-2 border-t border-white/10 pt-4">
      {steps.map((step, index) => (
        <li key={step} className="flex items-start gap-3 text-sm text-zinc-400">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-accent">
            {index + 1}
          </span>
          <span className="leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function FeatureRow({ icon: Icon, eyebrow, title, description, steps, screenshot, alt, flagship, imgClassName, reverse }) {
  const ref = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll flex flex-col items-center gap-10 md:items-start md:gap-16 ${
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

        <div className="text-left">
          <HowItWorksList steps={steps} />
        </div>
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
