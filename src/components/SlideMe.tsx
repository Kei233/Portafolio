export function SlideMe() {
  return (
    <section className="Project absolute inset-0 flex items-center justify-center overflow-hidden bg-linear-to-b from-baltic-blue-800 to-baltic-blue-950">
      {/* Glow */}
      <div className="absolute h-125 w-125 rounded-full bg-baltic-blue-400/10 blur-[180px]" />

      <div className="relative flex h-full w-full flex-col items-center justify-center">
        
        {/* Título */}
        <h2 className="max-w-full lg:max-w-4xl flex flex-col text-center font-Karin lg:text-7xl text-4xl font-bold leading-none">
          Explora
          <span className="title text-cyan-300">mis proyectos.</span>
        </h2>

        {/* Línea */}
        <div className="mt-10 h-px w-52 bg-linear-to-r hidden lg:block from-transparent via-cyan-300/40 to-transparent" />

        {/* Indicador */}
        <div className="absolute bottom-14 flex flex-col items-center gap-4 text-white/60">

          <div className="relative flex flex-col h-15 w-9 items-center rounded-full border border-cyan-300/30">
            <div className="wheel mt-2 h-2 w-2 rounded-full bg-cyan-300" />
            <div className="self-center w-6 mt-2 h-px bg-cyan-300/30"></div>
          </div>

          <span className="font-Wix hidden lg:block text-base tracking-wide">
            Usa la rueda del ratón
          </span>
          <span className="font-Wix lg:hidden block text-base tracking-wide">
            Desliza para explorar
          </span>
        </div>
      </div>
    </section>
  );
}