import gsap from "gsap";

import { type RefObject } from "react";

import SplitType from "split-type";

export function aboutAnimation(aboutRef: RefObject<HTMLElement | null>) {
  const about = aboutRef.current;

  if (!about) return;

  const aboutTL = gsap.timeline({
    scrollTrigger: {
          trigger: about,
          start: "30% center",
        }
  });
  const s = gsap.utils.selector(about);

  const titleAbout = s(".titleAbout")[0];
  const titleSplit = new SplitType(titleAbout, {
    tagName: "span",
  });
  const titleSub = s(".titleSub *");
  const glow = s(".glow");

  aboutTL
    .from(titleSplit.chars, {
      opacity: 0,
      y: 100,
      ease: "back.out(2)",
      duration: 0.7,
      stagger: 0.12,
    })
    .fromTo(
      titleSub,
      {
        color: "oklch(100% 0 0)",
      },
      {
        opacity: 1,
        color: "oklch(67.79% 0.14 236.4)",
        duration: 1,
      },
      "+=0.3",
    )
    .to(glow, {
      x: "+=100",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

  return aboutTL;
}
