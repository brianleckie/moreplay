export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-28 px-6 text-center md:py-40">
      <h1
        className="font-bold uppercase leading-none text-white"
        style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
      >
        MOREPLAY
        <sup style={{ fontSize: "0.35em", verticalAlign: "super" }}>™</sup>
      </h1>
      <p className="mt-8 text-[10px] tracking-[0.3em] text-white/40 uppercase">
        STREETWEAR. PARAGUAY.
      </p>
    </section>
  );
}
