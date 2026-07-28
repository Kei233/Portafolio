import { type RefObject } from "react";

import SplitType from "split-type";

import gsap from "gsap";

export function heroAnimation(refElement: RefObject<HTMLElement | null>) {
  if (!refElement.current) return;

  const heroTL = createHeroTL(refElement.current);

  createParticlesTL(refElement.current);

  return heroTL;
}

function createHeroTL(refElement: HTMLElement) {
  const heroTL = gsap.timeline({
    defaults: { ease: "power3.inOut", duration: 1 },
  });

  const s = gsap.utils.selector(refElement);
  const title = s(".title");
  const subTitle = s(".titleP");
  const parrafo = s(".parrafo");
  const links = s(".links");

  const splitTitle = new SplitType(title);
  const splitTitleP = new SplitType(subTitle);

  heroTL
    .from(
      splitTitle.chars,
      {
        opacity: 0,
        y: 50,
        stagger: 0.12,
        ease: "back.out(1.7)",
        duration: 0.75,
      },
      "<",
    )
    .from(
      splitTitleP.chars,
      {
        x: 100,
        opacity: 0,
        stagger: 0.12,
      },
      "<",
    )
    .fromTo(
      splitTitleP.chars,
      {
        color: "rgba(255, 255, 255, 0.6)",
        stagger: 0.12,
      },
      {
        color: "rgba(74, 182, 232, 1)",
        ease: "power3.inOut",
        stagger: 0.12,
        duration: 2,
      },
      "<",
    )
    .from(
      parrafo,
      {
        text: "",
        ease: "none",
        duration: 2.3,
      },
      "<",
    )
    .from(
      links,
      {
        y: 70,
        opacity: 0,
        duration: 0.75,
        ease: "back.out",
      },
      "<",
    )

    gsap.fromTo(".V", {
      y: 0,
    }, {
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
      duration: 1,
      y: "+=40%",
      ease: "none",
    })

    gsap.to(".downB", {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: refElement,
        start: "20% top",
      }
    });

  return heroTL;
}

function createParticlesTL(refElement: HTMLElement) {
  const s = gsap.utils.selector(refElement);

  const particles = s(".Particles");

  const particlesTL = gsap.timeline({
    repeat: -1,
    repeatRefresh: true,
  });

  // Generamos el movimiento de las particulas y calculamos la duración de la animación
  const particleData = particles.map(() => {
    const x = gsap.utils.random(-100, 100);
    const y = gsap.utils.random(-80, 80);

    return {
      x,
      y,
      duration: Math.max(Math.abs(x), Math.abs(y)) / 25,
    };
  });

  particlesTL
    .set(particles, {
      left: () => `${gsap.utils.random(40, 80)}%`,
      top: () => `${gsap.utils.random(35, 70)}%`,
    })
    .fromTo(
      particles,
      {
        x: 0,
      },
      {
        x: (i) => particleData[i].x,
        duration: (i) => particleData[i].duration,
        stagger: 0.5,
        keyframes: {
          opacity: [0, 1, 0],
        },
      },
      "+=2",
    )
    .fromTo(
      particles,
      {
        y: 0,
      },
      {
        y: (i) => particleData[i].y,
        duration: (i) => particleData[i].duration,
        stagger: 0.36,
      },
      "<",
    );

  return particlesTL;
}

type BuildSVGOptions = {
  group: SVGGElement;
  paths: SVGPathElement[];
  cursor: SVGCircleElement;
};

type CreateNodesOptions = {
  paths: SVGPathElement[];
  group: SVGGElement;
  radius?: number;
  tolerance?: number;
  className?: string;
};

function buildSVG({ group, paths, cursor }: BuildSVGOptions) {

  const svgTL = gsap.timeline();

  group.querySelectorAll(".svg-node").forEach((node) => node.remove());

  const nodes = createNodesFromPaths({
    group,
    paths,
  });

  if(nodes.length === 0){
  svgTL.set(cursor, {
    opacity: 0,
  });

  svgTL.to(".svg", {
    rotate: 0,
    duration: 1,
    ease: "sine.in",
  })

  return;
  };

  gsap.set(nodes, {
    opacity: 1,
  })

  gsap.set(cursor, {
    opacity: 1,    
  })

  const shuffle = gsap.utils.shuffle([...paths]);

  shuffle.forEach((p) => {

    gsap.set(p, {
      drawSVG: "0% 0%",
    })

    svgTL.to(cursor, {
      motionPath: {
        path: p,
        align: p,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      transformOrigin: "50% 50%",
      duration: 0.32,
      ease: "none",
    })
    .to(p, {
    drawSVG: "0% 100%",
    duration: 0.32,
    ease: "none",
    stagger: 0.32,
  }, "<")

  });

  svgTL.to(cursor, {
    opacity: 0,
  });

  svgTL.to(group, {
    opacity: 1,
    duration: 2,
    ease: "sine.inOut",
  })
  .to(nodes, {
    opacity: 0,
    duration: 1,
  }, "<")

  return svgTL;
}

function createNodesFromPaths({
  paths,
  group,
  radius = 3,
  tolerance = 1,
  className = "svg-node",
}: CreateNodesOptions): SVGCircleElement[] {
  const nodes: SVGCircleElement[] = [];
  const ns = "http://www.w3.org/2000/svg";

  function findExistingNode(x: number, y: number) {
    return nodes.find((node) => {
      const cx = Number(node.getAttribute("cx"));
      const cy = Number(node.getAttribute("cy"));

      return Math.hypot(cx - x, cy - y) <= tolerance;
    });
  }

  function createNode(x: number, y: number) {
    const existing = findExistingNode(x, y);

    if (existing) return existing;

    const circle = document.createElementNS(ns, "circle");

    circle.setAttribute("cx", x.toString());
    circle.setAttribute("cy", y.toString());
    circle.setAttribute("r", radius.toString());
    circle.setAttribute("fill", "rgba(255,255,255,1)")

    circle.classList.add(className);

    group.appendChild(circle);

    nodes.push(circle);

    return circle;
  }

  paths.forEach((path) => {
    const start = path.getPointAtLength(0);

    const end = path.getPointAtLength(path.getTotalLength());

    createNode(start.x, start.y);
    createNode(end.x, end.y);
  });

  return nodes;
}

export function callSVGBuilder(svgRef: RefObject<HTMLDivElement | null>) {

  if (!svgRef.current) return;

  const s = gsap.utils.selector(svgRef);

  const cursor = s<SVGCircleElement>(".cursor")[0]!;

  const group = s<SVGGElement>(".group")[0]!;

  const paths = [...s<SVGPathElement>(".group path")];

  const tl = buildSVG({ paths, group, cursor });

  return tl;
}