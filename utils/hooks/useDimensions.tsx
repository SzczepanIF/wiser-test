import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (global.window == undefined || typeof global.window === "undefined") return { width: 0, height: 0 };

  const { innerWidth: width, innerHeight: height } = global.window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
