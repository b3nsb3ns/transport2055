// const BASE_URL = import.meta.env.VITE_CONTENT_BASE_URL ?? ''

let manifestPromise: Promise<Record<string, string>> | null = null

export function loadManifest(): Promise<Record<string, string>> {
  if (!manifestPromise) {
    // manifestPromise = fetch(`${BASE_URL}/data/content-manifest.json`)
    manifestPromise = fetch(`/data/content-manifest.json`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load content manifest')
        return res.json()
      })
  }
  return manifestPromise
}
