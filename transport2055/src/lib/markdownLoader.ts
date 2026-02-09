import { loadManifest } from './manifestLoader.ts'

// const STORAGE_BASE_URL = import.meta.env.VITE_CLOUDFRONT_BASE_URL ?? ''

const cache = new Map<string, Promise<string>>()

export async function loadMarkdown(id: string): Promise<string> {
  const manifest = await loadManifest()
  const pathname = manifest[id]

  if (!pathname) {
    throw new Error(`Unknown markdown id: ${id}`)
  }

  if (!cache.has(id)) {
    // const promise = fetch(`${STORAGE_BASE_URL}/data/content/${id}/${pathname}`)
    const promise = fetch(`${import.meta.env.BASE_URL}data/content/${pathname}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load ${pathname}`)
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