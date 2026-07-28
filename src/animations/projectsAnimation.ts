import { type RefObject } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

import gsap from "gsap";

import SplitType from "split-type";

export function projectsAnimation(projectRef: RefObject<HTMLElement | null>) {
  if (!projectRef.current) return;
  let index = 0;
  let isAnimation = false;
  let currentTL = gsap.timeline();

  const s = gsap.utils.selector(projectRef.current);

  const arrayProject = s(".Project");

  const timelines = [
    createSlideMeTL(Selector(arrayProject[0] as HTMLElement)),
    createProject1TL(Selector(arrayProject[1] as HTMLElement)),
  ];

  const projectNow = arrayProject[index];

  if (!projectNow) return;

  gsap.set(arrayProject, {
    yPercent: 100,
    autoAlpha: 0,
  });

  gsap.set(projectNow, {
    yPercent: 0,
    autoAlpha: 1,
  });

  const ObserverC = s(".ObserveContent")[0];

  const observer = Observer.create({
    target: ObserverC,

    type: "wheel,touch",

    preventDefault: true,

    onUp: previous,

    onDown: next,
  });

  function next() {
    if (isAnimation) return;

    const currentIndex = index;
    index++;

    if (index >= arrayProject.length) {
      index = 0;
    }

    console.log(index);
    goTo(currentIndex, index, 1);
  }

  function previous() {
    if (isAnimation) return;
    const currentIndex = index;
    index--;

    if (index < 0) {
      index = arrayProject.length - 1;
    }

    goTo(currentIndex, index, -1);
  }

  function goTo(prev: number, nextIndex: number, direction: number) {
    if (isAnimation) return;

    isAnimation = true;

    const projectTL = gsap.timeline({
      onComplete: () => {
        isAnimation = false;
      },
    });

    const currentProject = arrayProject[prev]!;
    const nextProject = arrayProject[nextIndex]!;

    projectTL
      .to(currentProject, {
        yPercent: 100 * direction,
        autoAlpha: 0,
        duration: 1,
      })
      .fromTo(
        nextProject,
        {
          yPercent: -100 * direction,
          autoAlpha: 0,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
        },
        "<",
      );

    projectTL.add(() => {
      console.log("Se ejecutó");
      currentTL?.pause(0);

      currentTL = timelines[nextIndex];

      if (!currentTL) return;

      currentTL.restart(true);
    });
  }

  let firstAnimationPlayed = false;

  const trigger = ScrollTrigger.create({
    trigger: projectRef.current,
    onEnter: () => {
      observer.enable();

      if(!firstAnimationPlayed) {
      timelines[0]?.restart(true);
      currentTL = timelines[0];
      firstAnimationPlayed = true;
    }

    },
    onLeave: () => observer.disable(),
    onLeaveBack: () => observer.disable(),
    onEnterBack: () => observer.enable(),
    start: "40% center",
    end: "90% top",
  });

  observer.disable();

  return () => {
    observer.kill();
    trigger.kill();
  };
}

function Selector(projectRef: HTMLElement) {
  const s = gsap.utils.selector(projectRef);
  return s;
}

function createSlideMeTL(Selector: gsap.utils.SelectorFunc) {
  const slideMeTL = gsap.timeline({ paused: true });

  const title = Selector(".title");
  const wheel = Selector(".wheel");

  slideMeTL.from(title, {
    text: "",
    duration: 1,
  })
  .fromTo(wheel, {
    y: "+=20%",
  }, {
    y: "-=70%",
    duration: 1.3,
    ease: "none",
    repeat: -1,
    yoyo: true,
  })

  return slideMeTL;
}

function createProject1TL(Selector: gsap.utils.SelectorFunc) {
  const project1TL = gsap.timeline({ paused: true });
  const title = Selector(".titleProject1");

  const img = Selector(".Img1");

  const Tag = Selector(".Tag");

  const titleSplit = new SplitType(title);

  project1TL
    .from(titleSplit.chars, {
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.2)",
      stagger: 0.04,
      y: 50,
    })
    .from(Tag, {
      opacity: 0,
      stagger: 0.35,
      x: 100,
      ease: "sine.in",
      duration: 0.86,
    }, "<")
    .fromTo(
      img,
      {
        objectPosition: "0% 50%",
      },
      {
        objectPosition: "100% 50%",
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true,
      },
    )
    

  return project1TL;
}
