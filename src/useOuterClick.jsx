import { useEffect, useRef, useState } from 'react'

const useOuterClick = (initialIsActive) => {
  const [isActive, setIsActive] = useState(initialIsActive)
  const ref = useRef(null)

  const handleOuterClick = (event) => {
    // If ref is present and no event registered within the ref
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(false)
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', handleOuterClick, true)

    return () => {
      document.removeEventListener('click', handleOuterClick, true)
    }
  }, [])

  return { ref, isActive, setIsActive }
}

export default useOuterClick
