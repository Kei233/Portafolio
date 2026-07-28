export function Project1() {
  return (
    <section className="Project absolute inset-0 flex flex-col lg:flex-row h-full w-full gap-x-10 p-8 lg:px-10 lg:pt-16 lg:pb-12 bg-linear-to-tr from-baltic-blue-800/15 via-transparent to-baltic-blue-800/15">
      {/* Información */}
      <div className="flex w-3/5 flex-col justify-between">
        <div className="space-y-6 lg:h-full h-1/2">
          <div className="space-y-3">
            <div className="font-Ubuntu text-sm uppercase tracking-widest text-neutral-500">
              Frontend Experiment
            </div>

            <h2 className="titleProject1 font-Wix lg:text-4xl text-xl leading-tight font-semibold text-balance max-w-xl">
              Galleria dell'Accademia Reconcept
            </h2>
          </div>

          <p className="max-w-2xl hidden lg:block font-Ubuntu text-lg leading-relaxed text-neutral-300">
            Un reconcepto visual inspirado en la página de la{" "}
            <span className="text-white">
              Galleria dell'Accademia di Firenze
            </span>
            . El objetivo no era replicar el sitio original, sino replantear la
            experiencia utilizando una narrativa basada en scroll,
            microinteracciones y una arquitectura de animaciones más limpia con
            GSAP.
          </p>

          <div className="lg:flex hidden flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "GSAP"].map((tech) => (
              <span
                key={tech}
                className="Tag rounded-lg border border-white/10 px-4 py-1.5 font-Ubuntu text-sm text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-xl hidden lg:block border-l border-white/15 pl-5">
          <p className="font-Ubuntu text-neutral-400">
            <span className="text-white">Enfoque:</span> construir una demo
            ligera centrada en la narrativa visual, priorizando mantenibilidad y
            animaciones sincronizadas mediante pequeñas funciones reutilizables.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full h-1/2 lg:w-2/5 gap-y-4">
        {/* Tarjeta lateral */}
        <img
          src="/GSAP-RECONCEPT.png"
          alt="Imagen del Proyecto"
          className="Img1 aspect-video object-cover h-full object-left rounded-xl select-none"
        />

      <aside className="flex h-fit flex-col rounded-xl border border-white/10 bg-black/10 px-4 py-6 lg:p-6 backdrop-blur-sm">
        <div className="mb-6 flex items-center gap-x-2 lg:gap-x-4">
          <img
            src="https://cdn.simpleicons.org/github/white"
            alt="GitHub"
            className="md:h-9 md:w-9 w-8 h-8 select-none object-cover"
          />

          <div>
            <h3 className="font-Wix lg:text-lg text-md font-medium">Código fuente</h3>

            <p className="font-Ubuntu hidden lg:block text-sm text-neutral-400">
              Disponible públicamente.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/Kei233/GSAP-RECONCEPT"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 transition-all duration-200 ease-in-out hover:border-white/30 hover:bg-silver-100 hover:text-black focus:outline-none focus-visible:border-white/60 focus-visible:-translate-y-1 text-sm lg:text-md"
        >
          <span className="font-Ubuntu">Ver repositorio</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </aside>

      </div>
     
    </section>
  );
}
