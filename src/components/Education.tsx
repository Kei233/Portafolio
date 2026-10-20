export function Education() {
  return (
    <section
      className="
        relative
        min-h-screen
        px-6
        py-24
        lg:px-12
        lg:py-32
        overflow-hidden
      "
    >
      {/* Background accent */}
      <div
        className="
          absolute
          top-1/4
          -right-40
          w-96
          h-96
          rounded-full
          bg-baltic-blue-600/10
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-16 lg:mb-24">
          <span className="block font-mono text-sm text-baltic-blue-600 mb-5">
            02 / EDUCATION
          </span>

          <h2 className="font-Wix font-bold tracking-tight text-4xl lg:text-7xl">
            El camino del
            <br />
            <span className="text-white/35">aprendizaje.</span>
          </h2>

          <p className="mt-6 max-w-lg text-white/60 leading-8 lg:text-lg">
            Formación académica y curiosidad constante como base
            para construir mejores soluciones.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="
              absolute
              left-4.75
              top-5
              bottom-8
              w-px
              bg-linear-to-b
              from-baltic-blue-600
              via-white/20
              to-transparent
              md:left-29.75
            "
          />

          {/* University */}
          <article
            className="
              relative
              grid
              grid-cols-[40px_1fr]
              gap-5
              pb-16
              md:grid-cols-[120px_1fr]
              md:gap-10
              lg:pb-24
            "
          >
            <div className="relative flex justify-center">
              <span
                className="
                  mt-2
                  h-3
                  w-3
                  rounded-full
                  bg-baltic-blue-600
                  ring-4
                  ring-baltic-blue-600/15
                "
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-mono text-sm text-white/40">
                  01 — UNIVERSIDAD
                </span>

                <span
                  className="
                    rounded-full
                    border border-baltic-blue-600/40
                    px-3 py-1
                    text-xs
                    font-mono
                    text-baltic-blue-600
                  "
                >
                  EN CURSO
                </span>
              </div>

              <div
                className="
                  border-l-2
                  border-baltic-blue-600/40
                  pl-5
                  md:pl-8
                "
              >
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Ingeniería Informática
                </h3>

                <p className="mt-4 text-white/60 md:text-lg">
                  Universidad de La Salle
                </p>

                <p className="mt-6 max-w-xl text-white/45 leading-7">
                  Formación en fundamentos de computación, pensamiento
                  lógico y desarrollo de soluciones tecnológicas.
                </p>
              </div>
            </div>
          </article>

          {/* Self-taught */}
          <article
            className="
              relative
              grid
              grid-cols-[40px_1fr]
              gap-5
              md:grid-cols-[120px_1fr]
              md:gap-10
            "
          >
            <div className="relative flex justify-center">
              <span
                className="
                  mt-2
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-baltic-blue-600
                  bg-[#080b12]
                "
              />
            </div>

            <div>
              <span className="block font-mono text-sm text-white/40 mb-5">
                02 — POR CUENTA PROPIA
              </span>

              <div
                className="
                  border-l-2
                  border-white/10
                  pl-5
                  md:pl-8
                "
              >
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Aprendizaje autodidacta
                </h3>

                <p className="mt-4 max-w-xl text-white/60 leading-7 md:text-lg">
                  Investigación, documentación y experimentación
                  independiente para profundizar conocimientos y
                  llevar las ideas a proyectos reales.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Documentación", "Experimentación", "Proyectos propios"].map(
                    (item) => (
                      <span
                        key={item}
                        className="
                          rounded-lg
                          border border-white/10
                          bg-white/3
                          px-3 py-2
                          text-sm
                          text-white/50
                        "
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Closing detail */}
        <div
          className="
            mt-20
            border-t
            border-white/10
            pt-6
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
          "
        >
          <span className="font-mono text-xs text-white/30">
            LEARN / BUILD / REPEAT
          </span>

          <span className="font-mono text-xs text-baltic-blue-600">
            Siempre en evolución.
          </span>
        </div>
      </div>
    </section>
  );
}