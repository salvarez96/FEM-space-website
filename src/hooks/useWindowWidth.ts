import { useState } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function newWindowWidth() {
    setWindowWidth(window.innerWidth)
  }
  
  window.removeEventListener('resize', newWindowWidth)
  window.addEventListener('resize', newWindowWidth)

  return windowWidth
}
