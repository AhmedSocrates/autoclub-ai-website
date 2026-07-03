import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const TEAM = [
  {
    name: "Ahmed Mohammed Khalid Alfaki",
    role: "Scrum Master · Dev",
    leadership: true,
    description: "Sprint planning, backend delivery & AI integration.",
  },
  {
    name: "Eyad Aimen Elsheikh Khalil",
    role: "Group Leader · Dev",
    leadership: true,
    description: "Product direction, architecture, backend development & testing.",
  },
  {
    name: "Mohammad Irfan Danial bin Kefli",
    role: "Developer",
    leadership: false,
    description: "Mobile UI & Firebase integration.",
  },
  {
    name: "Muhammad Fathurrahman bin Ayub",
    role: "Developer",
    leadership: false,
    description: "UI development, BLoC pattern implementation.",
  },
];

function TeamCard({ name, role, leadership, description }) {
  const ref = useRevealOnScroll();
  const initial = name.charAt(0);

  return (
    <div
      ref={ref}
      className="animate-on-scroll rounded-2xl border border-white/10 bg-surface p-6 text-center transition-colors duration-200 hover:border-accent/40"
    >
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-surface-2 text-lg font-semibold text-ink">
        {initial}
      </span>

      <p
        className={`mt-5 text-xs font-medium uppercase tracking-widest ${
          leadership ? "text-accent" : "text-slate"
        }`}
      >
        {role}
      </p>
      <h3 className="mt-2 text-base font-bold text-ink">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}

export default function Team() {
  const headerRef = useRevealOnScroll();

  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headerRef} className="animate-on-scroll mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            The Team
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built by the Teknomarin dev team.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
