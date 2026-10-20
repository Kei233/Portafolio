import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ProfessionalInterests() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      const q = gsap.utils.selector(section);
      // Respeta la preferencia de movimiento del usuario.
      mm.add("(prefers-reduced-motion: no-preference)", () => {

        // Encabezado: aparición y desplazamiento.
        gsap.fromTo(
          q(".interest-eyebrow"),
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q(".interest-heading"),
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          q(".interest-title-line"),
          { autoAlpha: 0, yPercent: 100, rotateX: -12 },
          {
            autoAlpha: 1,
            yPercent: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.13,
            ease: "power4.out",
            scrollTrigger: {
              trigger: q(".interest-heading"),
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          q(".interest-intro"),
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q(".interest-heading"),
              start: "top 85%",
              once: true,
            },
          }
        );

        // Panel principal.
        gsap.fromTo(
          q(".web-panel"),
          { autoAlpha: 0, y: 55, clipPath: "inset(8% 0 8% 0)" },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0% 0 0% 0)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q(".web-panel"),
              start: "top 82%",
              once: true,
            },
          }
        );

        // Línea de acento: se dibuja desde la izquierda.
        gsap.fromTo(
          q(".web-accent-line"),
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: q(".web-panel"),
              start: "top 75%",
              once: true,
            },
          }
        );

        // Subáreas: revelado escalonado.
        gsap.fromTo(
          q(".web-specialty"),
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q(".web-specialties"),
              start: "top 88%",
              once: true,
            },
          }
        );

        // Detalles gráficos del panel web.
        gsap.fromTo(
          q(".web-orbit"),
          { rotation: -35, scale: 0.8, autoAlpha: 0 },
          {
            rotation: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q(".web-panel"),
              start: "top 75%",
              once: true,
            },
          }
        );

        // Panel de datos.
        gsap.fromTo(
          q(".data-panel"),
          { autoAlpha: 0, x: 45 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: q(".data-panel"),
              start: "top 85%",
              once: true,
            },
          }
        );

        // Barras: crecen desde su base.
        gsap.fromTo(
          q(".data-bar"),
          { scaleY: 0, transformOrigin: "bottom center" },
          {
            scaleY: 1,
            duration: 0.85,
            stagger: 0.09,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: q(".data-visual"),
              start: "top 90%",
              once: true,
            },
          }
        );

        // Trazo SVG de tendencia.
        const path = section.querySelector<SVGPathElement>(".data-line");

        if (path) {
          const length = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: q(".data-visual"),
              start: "top 90%",
              once: true,
            },
          });
        }

        // Detalle decorativo ambiental.
        gsap.to(q(".ambient-glow"), {
          y: -24,
          x: 12,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Fallback para usuarios que prefieren movimiento reducido:
      // no se ejecutan las animaciones y el contenido permanece visible.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(q(".interest-eyebrow, .interest-title-line, .interest-intro, .web-panel, .web-specialty, .web-orbit, .data-panel, .data-bar"), {
          clearProps: "all",
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-6 pt-28 pb-12 lg:px-12 lg:pt-36 lg:pb-16"
    >
      {/* Ambiente */}
      <div
        className="
          ambient-glow
          pointer-events-none absolute -right-48 top-24
          h-105 w-105 rounded-full
          bg-baltic-blue-600/9 blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado editorial */}
        <header className="interest-heading mb-16 lg:mb-24">
          <div className="interest-eyebrow mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-baltic-blue-600" />
            <span className="font-mono text-xs tracking-[0.25em] text-baltic-blue-600">
              03 / PROFESSIONAL INTERESTS
            </span>
          </div>

          <h2 className="font-Wix text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block overflow-hidden pb-2">
              <span className="interest-title-line inline-block">
                Lo que quiero
              </span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="interest-title-line inline-block text-white/30">
                construir<span className="text-baltic-blue-600">.</span>
              </span>
            </span>
          </h2>

          <p className="interest-intro mt-7 max-w-xl text-base leading-8 text-white/55 lg:text-lg">
            Dos caminos para explorar problemas desde perspectivas
            distintas: construir productos digitales y, en el futuro,
            extraer conocimiento de los datos.
          </p>
        </header>

        {/* DESARROLLO WEB */}
        <article className="web-panel relative overflow-hidden rounded-4xl border border-white/10 bg-[#0d121d]">
          <div className="web-accent-line absolute left-0 right-0 top-0 h-px bg-linear-to-r from-baltic-blue-600 via-baltic-blue-600/30 to-transparent" />

          {/* Número ambiental */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-20 select-none font-Wix text-[260px] font-bold leading-none text-white/[0.018] lg:-right-2 lg:-top-32 lg:text-[390px]"
          >
            01
          </span>

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-7 md:p-12 lg:p-16">
              <div className="mb-8 flex items-center gap-3">
                <span className="rounded-md border border-baltic-blue-600/30 bg-baltic-blue-600/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-baltic-blue-600">
                  ÁREA PRINCIPAL
                </span>
                <span className="font-mono text-xs text-white/30">
                  / 001
                </span>
              </div>

              <h3 className="max-w-xl font-Wix text-4xl font-bold tracking-tight md:text-6xl">
                Desarrollo
                <br />
                <span className="text-white/35">web.</span>
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/55 md:text-base">
                Diseñar y desarrollar aplicaciones que combinen
                interfaces cuidadas, interacciones significativas
                y una arquitectura funcional.
              </p>

              {/* Especialidades */}
              <div className="web-specialties mt-12 grid gap-4 sm:grid-cols-2">
                <div className="web-specialty group rounded-2xl border border-white/10 bg-white/2.5 p-5 transition-colors duration-300 hover:border-baltic-blue-600/50 hover:bg-baltic-blue-600/5 md:p-6">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-baltic-blue-600">
                      01.1
                    </span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 text-white/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-baltic-blue-600"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 4H4V20H20V16M14 4H20V10M20 4L11 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h4 className="text-xl font-semibold">Front-end</h4>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    Interfaz, experiencia de usuario, accesibilidad
                    e interacción visual.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["React", "TypeScript", "GSAP"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-white/5 px-2.5 py-1.5 font-mono text-[10px] text-white/45"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="web-specialty group rounded-2xl border border-white/10 bg-white/2.5 p-5 transition-colors duration-300 hover:border-baltic-blue-600/50 hover:bg-baltic-blue-600/5 md:p-6">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-baltic-blue-600">
                      01.2
                    </span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-baltic-blue-600"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 8L4 12L8 16M16 8L20 12L16 16M14 5L10 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h4 className="text-xl font-semibold">Back-end</h4>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    Lógica de negocio, APIs, bases de datos y
                    procesamiento de solicitudes.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["APIs", "SQL", "Servidor"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-white/5 px-2.5 py-1.5 font-mono text-[10px] text-white/45"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gráfico de conexión visual */}
            <div className="relative hidden min-h-full overflow-hidden border-l border-white/6 lg:flex lg:items-center lg:justify-center">
              <div className="web-orbit relative flex h-87.5 w-87.5 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/6" />
                <div className="absolute inset-8 rounded-full border border-dashed border-baltic-blue-600/20" />
                <div className="absolute inset-18 rounded-full border border-white/8" />

                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-baltic-blue-600 shadow-[0_0_18px_rgba(70,130,255,0.6)]" />
                <div className="absolute bottom-9 right-8 h-1.5 w-1.5 rounded-full bg-white/50" />
                <div className="absolute bottom-16 left-5 h-2 w-2 rounded-full bg-baltic-blue-600/70" />

                <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-baltic-blue-600/30 bg-[#101a2a] shadow-[0_0_80px_rgba(70,130,255,0.09)]">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="h-12 w-12 text-baltic-blue-600"
                    aria-hidden="true"
                  >
                    <path
                      d="M17 14L7 24L17 34M31 14L41 24L31 34M28 9L20 39"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="absolute left-1/2 top-7 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-[#0d121d] px-4 py-2 font-mono text-xs text-white/60">
                  UI / UX
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-lg border border-white/10 bg-[#0d121d] px-4 py-2 font-mono text-xs text-white/60">
                  SYSTEMS
                </div>

                <div className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 rounded-lg border border-white/10 bg-[#0d121d] px-3 py-2 font-mono text-xs text-white/60">
                  FRONT
                </div>

                <div className="absolute right-0 top-1/2 translate-x-1/3 -translate-y-1/2 rounded-lg border border-white/10 bg-[#0d121d] px-3 py-2 font-mono text-xs text-white/60">
                  BACK
                </div>
              </div>

              <span className="absolute bottom-8 left-10 font-mono text-[10px] tracking-[0.2em] text-white/20">
                CONNECTING IDEAS
              </span>
            </div>
          </div>
        </article>

        {/* TRANSICIÓN */}
        <div className="flex items-center gap-5 py-10 lg:py-14">
          <span className="font-mono text-xs text-white/25">02</span>
          <div className="h-px flex-1 bg-linear-to-r from-white/15 to-transparent" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
            FUTURE DIRECTION
          </span>
        </div>

        {/* ANÁLISIS DE DATOS */}
        <article className="data-panel relative overflow-hidden rounded-4xl border border-white/10 bg-[#0b1018]">
          <div className="grid md:grid-cols-[1fr_0.8fr]">
            <div className="p-7 md:p-12 lg:p-14">
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-white/40">
                  ÁREA DE EXPLORACIÓN
                </span>
              </div>

              <h3 className="font-Wix text-3xl font-bold tracking-tight md:text-5xl">
                Análisis de datos
                <span className="text-baltic-blue-600">.</span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/50 md:text-base">
                Investigar patrones, interpretar información y
                convertir datos en conclusiones que permitan
                comprender problemas y apoyar decisiones.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-baltic-blue-600 shadow-[0_0_12px_rgba(70,130,255,0.6)]" />
                <span className="font-mono text-xs text-white/45">
                  PROYECCIÓN A FUTURO
                </span>
              </div>
            </div>

            {/* Visualización decorativa de datos */}
            <div className="data-visual relative flex min-h-60 flex-col justify-end overflow-hidden border-t border-white/6 p-7 md:border-l md:border-t-0 md:p-10">
              <div className="absolute inset-0 opacity-40">
                {[0, 1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="absolute left-0 right-0 border-t border-dashed border-white/10"
                    style={{ top: `${n * 20 + 10}%` }}
                  />
                ))}
              </div>

              <div className="relative flex h-36 items-end justify-between gap-3 px-2">
                {[35, 57, 43, 78, 61, 92, 70, 100].map((height, i) => (
                  <div
                    key={i}
                    className="relative flex h-full flex-1 items-end"
                  >
                    <div
                      className={`data-bar w-full rounded-t-sm ${
                        i === 7
                          ? "bg-baltic-blue-600"
                          : i === 5
                            ? "bg-baltic-blue-600/70"
                            : "bg-baltic-blue-600/25"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>

              <svg
                viewBox="0 0 320 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-x-7 top-10 h-28 w-[calc(100%-3.5rem)] overflow-visible"
                aria-hidden="true"
              >
                <path
                  className="data-line"
                  d="M0 76 C25 68 35 48 58 55 S95 72 118 38 S158 45 180 28 S225 48 245 20 S285 24 320 4"
                  stroke="#6D9DFF"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="320" cy="4" r="3" fill="#6D9DFF" />
              </svg>

              <div className="relative mt-5 flex justify-between font-mono text-[9px] tracking-[0.15em] text-white/25">
                <span>INPUT</span>
                <span>ANALYSIS</span>
                <span>INSIGHT</span>
              </div>
            </div>
          </div>
        </article>

        {/* Cierre */}
        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/25">
            BUILD / UNDERSTAND / EVOLVE
          </span>

          <span className="font-mono text-xs text-baltic-blue-600">
            Un camino en construcción.
          </span>
        </footer>
      </div>
    </section>
  );
}
