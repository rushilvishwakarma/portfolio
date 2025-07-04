"use client";

import { useEffect, useState } from "react";
import useCanvasCursor from "./useCanvasCursor";

const CanvasCursor = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useCanvasCursor();

  if (!mounted) {
    return null;
  }

  return (
    <canvas
      className="pointer-events-none fixed inset-0 z-50"
      id="canvas"
      style={{ zIndex: 50 }}
    />
  );
};

export default CanvasCursor;
