import { useState, useEffect } from 'react'

const TYPING_SPEED = 80
const DELETING_SPEED = 40
const PAUSE_AFTER_TYPING = 2000
const PAUSE_AFTER_DELETING = 500

export function useTypingEffect(words: string[]) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const currentWord = words[wordIndex % words.length]

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, PAUSE_AFTER_TYPING)
    } else if (isDeleting && displayText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }, PAUSE_AFTER_DELETING)
    } else {
      timer = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? currentWord.substring(0, prev.length - 1)
              : currentWord.substring(0, prev.length + 1)
          )
        },
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      )
    }

    return () => clearTimeout(timer)
  }, [displayText, wordIndex, isDeleting, words])

  return displayText
}

