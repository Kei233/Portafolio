import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function treeAnimation(
  treeTL: gsap.core.Timeline,
  refTree: HTMLElement,
  finish: React.RefObject<boolean>,
) {
  const nodesAnimation = gsap.utils.selector(refTree);
  gsap.killTweensOf(nodesAnimation(".animation"));

  const nodes = nodesAnimation(".animation");
  const card = nodesAnimation(".card-animate");
  const buttons = nodesAnimation(".toggleBt");

  if(!nodes) return null;

  if (!finish.current) {
    treeTL
      .from(card, {
        opacity: 0,
        scale: 0.95,
        x: -100,
        duration: 0.5,
      }, 0.4)
      .from(buttons, {
        opacity: 0,
        y: 20,
        duration: 0.53,
        ease: "sine.out",
      })
      .add(() => {
        finish.current = true;
      });
  }

  treeTL
    .from(nodes, {
      opacity: 0,
      x: -20,
      stagger: 0.06,
      duration: 1,
      ease: "back.out",
    }, 0)
    .to(nodes, {
      border: "1px solid okchl(0.5 0 0)",
      duration: 2,
      stagger: 0.3,
    })
    .to(nodes, {
      y: () => gsap.utils.random(-6, 6),
      repeat: -1,
      duration: 8,
      yoyo: true,
      ease: "sine.inOut",
    })
    

  ScrollTrigger.create({
    trigger: refTree,
    animation: treeTL,
    start: "top 30%",
  });
}
