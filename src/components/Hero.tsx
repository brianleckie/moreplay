export default function Hero() {
  return (
    <section className="px-5 pt-12 pb-8 md:px-8 md:pt-16 md:pb-12">
      <h1
        className="font-bold uppercase leading-none text-white"
        style={{ fontSize: "clamp(2.8rem, 9vw, 6rem)", letterSpacing: "-0.03em" }}
      >
        MOREPLAY
        <sup style={{ fontSize: "0.28em", verticalAlign: "super" }}>®</sup>
      </h1>
      <div className="mt-4 flex flex-col gap-[6px]">
        <p className="text-[10px] tracking-[0.22em] text-white/40 uppercase">
          Streetwear · Asunción, PY
        </p>
        <p className="text-[10px] tracking-[0.22em] text-white/40 uppercase">
          Envíos a todo Paraguay
        </p>
      </div>
    </section>
  );
}
