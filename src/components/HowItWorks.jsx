import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import PhoneFrame from "./PhoneFrame";
import LoginPage from "../assests/LoginPage.png";
import { APK_DOWNLOAD_URL } from "../constants";

const STEPS = [
  {
    number: "01",
    title: "Download",
    description: (
      <>
        Grab the APK directly from{" "}
        <a
          href={APK_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2 hover:text-ink"
        >
          Google Drive
        </a>{" "}
        and install it on your Android device.
      </>
    ),
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Add your environment variables (.env) — Gemini API Key, Telegram Bot credentials — to your profile.",
    image: LoginPage,
    imageAlt: "AutoClub AI login screen for signing in with a UTM email",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Create an event and watch the AI handle management and marketing instantly.",
  },
];

function Step({ number, title, description, image, imageAlt }) {
  const ref = useRevealOnScroll();

  return (
    <div ref={ref} className="animate-on-scroll relative flex flex-1 flex-col items-center text-center">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-base text-sm font-semibold text-accent">
        {number}
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate">
        {description}
      </p>
      {image && (
        <PhoneFrame src={image} alt={imageAlt} className="mt-6 w-32" />
      )}
    </div>
  );
}

export default function HowItWorks() {
  const headerRef = useRevealOnScroll();

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headerRef} className="animate-on-scroll mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Getting Started
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How to Download &amp; Set Up
          </h2>
        </div>

        <div className="relative mt-20 flex flex-col gap-16 md:flex-row md:items-start md:gap-8">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />
          {STEPS.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
