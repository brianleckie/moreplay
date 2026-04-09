export default function PlaceholderCard() {
  return (
    <article className="flex flex-col bg-black border border-white/5">
      <div className="aspect-square bg-[#080808] flex items-end justify-start p-3">
        <span className="text-[9px] tracking-[0.2em] text-white/15 uppercase">
          Próximamente
        </span>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="h-2 bg-white/5 w-2/3" />
        <div className="h-2 bg-white/5 w-1/3" />
      </div>
      <div className="p-3 pt-0">
        <div className="h-8 border border-white/5" />
      </div>
    </article>
  );
}
