import { AlertCircle } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const PROBLEMS = [
  "Admin burnout from manual, repetitive club tasks.",
  "Fragmented workflows — data and files scattered across WhatsApp, Google Drive, and Notion.",
  "Inconsistent marketing and engagement across social channels.",
];

export default function ProblemSolution() {
  const ref = useRevealOnScroll();

  return (
    <section className="relative py-24 md:py-32">
      <div ref={ref} className="animate-on-scroll mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-accent">
          Why AutoClub AI
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              The Problem
            </h3>
            <ul className="mt-6 space-y-4">
              {PROBLEMS.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate" />
                  <span className="text-sm leading-relaxed text-slate sm:text-base">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-16">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              The Solution
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-slate sm:text-base">
              AutoClub AI is a centralized, database-driven platform that not
              only organizes a club's operations but uses an AI co-pilot to
              actively execute administrative and marketing tasks — turning
              fragmented, manual workflows into an automated assembly line.
            </p>
            <p className="mt-4 text-sm font-semibold text-accent">
              Your Club's AI Co-Pilot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
