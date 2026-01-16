const cache = new Map<string, Promise<string>>()

export function loadMarkdown(id: string): Promise<string> {
  if (!cache.has(id)) {
    cache.set(
      id,
      fetch(`/data/content/${id}.md`)
        .then(res => {
          if (!res.ok) throw new Error(`Failed to load ${id}`)
          return res.text()
        })
    )
  }
  return cache.get(id)!
}