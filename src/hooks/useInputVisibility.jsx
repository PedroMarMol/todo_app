import { useEffect, useState} from 'react'

export default function useInputVisibility(inputId) {
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    const input = document.getElementById(inputId)

    function toggleLabelVisibility() {
      if (input.value) {
        setIsFilled(true)
      } else {
        setIsFilled(false)
      }
    }

    input.addEventListener('input', toggleLabelVisibility)

    return () => {
      input.removeEventListener('input', toggleLabelVisibility)
    }
  }, [inputId])

  return isFilled
}