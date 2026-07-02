import { Download } from "lucide-react";
import Dashboard from "../assests/Dashboard.png";
import PhoneFrame from "./PhoneFrame";
import { APK_DOWNLOAD_URL } from "../constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32"
    >
      {/* Background glow + grid texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            <span>⚡</span>
            <span>Powered by Gemini AI</span>
          </div>
          <p className="text-xs font-medium uppercase tracking-widest text-slate">
            Made for Teknomarin, UTM
          </p>
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
          Automate Your University Club.{" "}
          <span className="bg-gradient-to-r from-accent to-ink-muted bg-clip-text text-transparent">
            Supercharge Your Productivity.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
          AutoClub AI bridges student leadership, task execution, and smart
          social media marketing through advanced AI automation — built for
          Teknomarin, UTM's marine technology club.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]"
          >
            <Download className="h-4 w-4" />
            Download APK
          </a>
          <p className="text-xs text-slate">
            Available for Android · APK direct download
          </p>
        </div>

        {/* Floating hero mockup */}
        <div className="relative mt-20 w-full max-w-xs sm:max-w-sm">
          <div className="absolute inset-0 -z-10 translate-y-8 rounded-full bg-gradient-to-tr from-accent/40 to-transparent blur-3xl" />

          <PhoneFrame
            src={Dashboard}
            alt="AutoClub AI dashboard screen showing task, event, and member overview"
            className="animate-float w-full"
          />
        </div>
      </div>
    </section>
  );
}
