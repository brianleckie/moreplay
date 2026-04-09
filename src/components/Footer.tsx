export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-16 py-10 px-5 md:px-8 flex flex-col gap-3">
      <span className="text-[10px] tracking-[0.15em] text-white/25 uppercase">
        © 2025 MOREPLAY
        <sup style={{ fontSize: "0.65em", verticalAlign: "super" }}>®</sup>
        {" "}— Asunción, Paraguay
      </span>
      <a
        href="https://portfolio-alpha-henna-61.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] tracking-[0.1em] text-white/20 hover:text-white/40 transition-colors duration-200 w-fit"
      >
        Desarrollado por Leki
      </a>
    </footer>
  );
}
