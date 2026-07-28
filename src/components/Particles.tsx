const particlesClass = `opacity-0 w-2.5 aspect-square rounded-full blur-[4px] bg-white absolute left-1/2 top-1/2 z-0`;

export function Particles() {

  return (
    <div
      className="absolute inset-0 z-10 w-full h-full hidden lg:block pointer-events-none"
    >
      {Array.from({ length: 70 }).map((_, i) => {
        return (
          <div
            key={i}
            className={`Particles ${particlesClass}`}
          ></div>
        );
      })}

      <div className={`drawParticle ${particlesClass}`}></div>
      <div className={`drawParticle ${particlesClass}`}></div>
      <div className={`drawParticle ${particlesClass}`}></div>

      <div className={`ParticleI ${particlesClass}`}></div>

      
    </div>
  );
}
