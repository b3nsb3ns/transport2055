import { useEffect, useState } from 'react'
import { loadMarkdown } from '../lib/markdownLoader'

export function useMarkdown(topic: string) {
  const [content, setContent] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    // CLEAR previous state when topic changes
    setContent(null)
    setError(null)

    loadMarkdown(topic)
      .then(text => {
        if (!cancelled) setContent(text)
      })
      .catch(err => {
        if (!cancelled) setError(err)
      })

    return () => {
      cancelled = true
    }
  }, [topic])

  return { content, error }
}
