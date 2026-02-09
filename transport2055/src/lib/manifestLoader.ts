const STORAGE_BASE_URL = import.meta.env.VITE_CLOUDFRONT_BASE_URL ?? ''

let manifestPromise: Promise<Record<string, string>> | null = null

export function loadManifest(): Promise<Record<string, string>> {
  if (!manifestPromise) {
    manifestPromise = fetch(`${STORAGE_BASE_URL}/data/manifest/content-manifest-260125-1.json`)
    // manifestPromise = fetch(`${import.meta.env.BASE_URL}data/manifest/content-manifest-260125-1.json`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load content manifest')
        return res.json()
      })
  }
  return manifestPromise
}
