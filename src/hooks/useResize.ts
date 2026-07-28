import { useState, useLayoutEffect, type RefObject } from "react";

export function useResize(refElement: RefObject<HTMLElement | null>) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      const rectNodes = refElement.current!.getBoundingClientRect();

      setSize({
        width: rectNodes.width,
        height: rectNodes.height,
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);

    observer.observe(refElement.current!);

    return () => observer.disconnect();
  }, [refElement]);

  return { width: size.width, height: size.height };
}
