export default function PhoneFrame({ src, alt, className = "", imgClassName = "" }) {
  return (
    <div
      className={`relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3 shadow-2xl ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
        <img
          src={src}
          alt={alt}
          className={`aspect-[9/18] w-full object-cover object-top ${imgClassName}`}
        />
      </div>
    </div>
  );
}
