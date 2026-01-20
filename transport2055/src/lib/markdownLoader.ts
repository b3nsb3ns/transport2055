import { loadManifest } from './manifestLoader.ts'

// const BASE_URL = import.meta.env.VITE_CONTENT_BASE_URL ?? ''

const cache = new Map<string, Promise<string>>()

export async function loadMarkdown(id: string): Promise<string> {
  const manifest = await loadManifest()
  const filename = manifest[id]

  if (!filename) {
    throw new Error(`Unknown markdown id: ${id}`)
  }

  if (!cache.has(id)) {
    // const promise = fetch(`${BASE_URL}/data/content/${filename}`)
    const promise = fetch(`${import.meta.env.BASE_URL}data/content/${filename}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load ${filename}`)
        }
        return res.text()
      })
      .catch(err => {
        // Ensure failures do not poison the cache
        cache.delete(id)
        throw err
      })

    cache.set(id, promise)
  }
  return cache.get(id)!
}