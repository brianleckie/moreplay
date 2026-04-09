export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1
        className="font-bold uppercase leading-none text-white"
        style={{ fontSize: "clamp(5rem, 18vw, 16rem)", letterSpacing: "-0.04em" }}
      >
        MOREPLAY
        <sup style={{ fontSize: "0.3em", verticalAlign: "super" }}>™</sup>
      </h1>
      <p className="mt-6 text-xs tracking-widest text-white/50 uppercase">
        STREETWEAR. PARAGUAY.
      </p>
    </section>
  );
}
