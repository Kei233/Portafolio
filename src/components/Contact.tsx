import { useGSAP } from "@gsap/react"

import gsap from "gsap";
import { useRef } from "react";

export function Contact() {
  const contactRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const contactTL = gsap.timeline();

    const s = gsap.utils.selector(contactRef.current);

    const title = s(".contactTitle");
    const p = s(".contactP");
    const cursor = s(".cursorP");

    contactTL.from(title, {
      opacity: 0,
      duration: 1,
      ease: "sine.in",
    })
    .from(p, {
      text: "",
      duration: 1,
    })
    .fromTo(cursor, {
      opacity: 0,
    }, {
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: "none",
    })

  }, { scope: contactRef })

  return (
    <section ref={contactRef} id="contacto" className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-8 backdrop-blur-xl md:p-10"
      >
        {/* Glow ambiental */}
        <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-baltic-blue-700/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-pacific-cyan-900/30 blur-3xl" />

        {/* Borde superior sutil */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative">
          <h2 className="contactTitle text-3xl font-semibold tracking-tight text-silver-50 mb-4 md:mb-0">
            ¿Que puedo hacer por ti?
          </h2>
          <p className="contactP mt-3 max-w-lg h-3 text-silver-200/80">
          Disponible para colaboraciones freelance y equipos de producto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            
            <a
              href="https://github.com/Kei233?tab=overview&from=2026-05-01&to=2026-05-24"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg select-none focus:outline-none focus-visible:-translate-y-2 focus-visible:brightness-200 border border-white/10 bg-white/6 px-4 py-2 font-medium text-silver-50 backdrop-blur-md transition-colors hover:bg-white/12"
            >
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/johan-yesid-tavera-360266262/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg select-none focus:outline-none focus-visible:-translate-y-2 focus-visible:brightness-200 border border-baltic-blue-700/40 bg-baltic-blue-900/50 px-4 py-2 font-medium text-silver-50 backdrop-blur-md transition-colors hover:bg-baltic-blue-900/70"
            >
              LinkedIn
            </a>
            
            <a
              href="mailto:johanyesid129@gmail.com"
              className="rounded-lg select-none focus:outline-none focus-visible:-translate-y-2 focus-visible:brightness-200 border border-pacific-cyan-900/60 bg-pacific-cyan-900/40 px-4 py-2 font-medium text-silver-50 backdrop-blur-md transition-colors hover:bg-pacific-cyan-900/60"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}