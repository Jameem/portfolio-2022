import { useEffect, useState, useRef } from "react"
import Typed from "typed.js"

const homeData = {
  skills: ["Engineer", "Developer"],
}
const AnimatedText = () => {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        "Software <strong>Engineer</strong>",
        "Javascript <strong>Developer</strong>",
        "Blockchain <strong>Enthusiast</strong>",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    }
    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, [])

  return <span style={{ whiteSpace: "pre" }} ref={el} />
}
export default AnimatedText
