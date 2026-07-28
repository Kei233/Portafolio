import gsap from "gsap";
import type { RefObject } from "react";

const positions = [
  { col: 0, row: 0 },
  { col: 1, row: 0 },
  { col: 2, row: 0 },

  { col: 0, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },

  { col: 0, row: 2 },
  { col: 1, row: 2 },
  { col: 2, row: 2 },
];

function getNeighbors(cell: number): number[] {
  const row = Math.floor(cell / 3);
  const col = cell % 3;

  const neighbors: number[] = [];

  if (row > 0) neighbors.push(cell - 3);
  if (row < 2) neighbors.push(cell + 3);

  if (col > 0) neighbors.push(cell - 1);
  if (col < 2) neighbors.push(cell + 1);

  return neighbors;
}

type Props = {
    sectionRef: RefObject<HTMLElement | null>
    boxPositions: RefObject<number[]>;
}

export function animationFlip({ sectionRef, boxPositions}: Props) {

    if (!sectionRef.current) return;

      const q = gsap.utils.selector(sectionRef);
      const boxesGrid = q(".boxGrid");

      const totalWidth = sectionRef.current!.clientWidth / 3;
      const totalHeight = sectionRef.current!.clientHeight / 3;

      let angle = 0;
      let rotate = 0;

      // Posición inicial
      boxesGrid.forEach((box, i) => {
        const pos = positions[boxPositions.current[i]];

        gsap.set(box, {
          x: pos.col * totalWidth,
          y: pos.row * totalHeight,
        });
      });

      const id = setInterval(() => {
        const occupied = new Set(boxPositions.current);

        // Elegir una caja aleatoria
        const boxIndex =
          gsap.utils.random(0, boxPositions.current.length - 1, 1)

        const currentCell = boxPositions.current[boxIndex];

        const freeNeighbors = getNeighbors(currentCell).filter(
          (cell) => !occupied.has(cell),
        );

        if (!freeNeighbors.length) return;

        const nextCell =
          freeNeighbors[gsap.utils.random(0, freeNeighbors.length - 1, 1)];

        boxPositions.current[boxIndex] = nextCell;

        const { col, row } = positions[nextCell];

        gsap.to(boxesGrid[boxIndex], {
          x: col * totalWidth,
          y: row * totalHeight,
          duration: 0.10,
          ease: "sine.inOut",
        });

        if (rotate < 8) {
          rotate++;
          return;
        }

        angle = (angle + 45);

        gsap.to(sectionRef.current, {
          rotate: angle,
          duration: 1,
          ease: "back.inOut(2)",
        });

        rotate = 0;
      }, 200);

      return () => clearInterval(id);
}