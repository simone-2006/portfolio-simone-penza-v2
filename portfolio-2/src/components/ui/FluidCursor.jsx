import { useEffect } from "react";
import fluidCursor from "../../hooks/use-FluidCursor";

export default function FluidCursor() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    return fluidCursor();
  }, []);

  return (
    <canvas
      id="fluid"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-svh w-full"
    />
  );
}
