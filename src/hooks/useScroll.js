import React, { useRef } from "react"

export const useScroll = () => {
  const ref = useRef(null)
  const executeScroll = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }
  const htmlElementAttributes = { ref }

  return [executeScroll, htmlElementAttributes]
}
