import Logo from "../assests/Logo.png";

export default function TeknomarinStrip() {
  return (
    <section className="border-y border-white/10 bg-surface/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:text-left">
        <img
          src={Logo}
          alt="Teknomarin, UTM logo"
          className="h-16 w-16 shrink-0 object-contain"
        />
        <p className="text-sm leading-relaxed text-slate sm:text-base">
          <span className="font-semibold text-ink">Built for Teknomarin</span>{" "}
          — UTM's marine technology club, where marine enthusiasts embrace a
          tech-first approach to club operations, events, and outreach.
        </p>
      </div>
    </section>
  );
}
