import { useState, useEffect, useCallback } from 'react'

export function useSlider(slideCount: number, autoAdvanceMs: number = 5000) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    if (slideCount <= 1) return
    const interval = setInterval(next, autoAdvanceMs)
    return () => clearInterval(interval)
  }, [next, slideCount, autoAdvanceMs])

  return { current, next, prev, goTo }
}
