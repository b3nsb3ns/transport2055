import '../styles/Content.css'

import { useMarkdown } from '../hooks/useMarkdown'
import ReactMarkdown from 'react-markdown'
// import rehypeRaw from 'rehype-raw'

interface ContentProps {
  contentId?: string;
  onSelectContent: (id: string) => void
}

function Content({ contentId = "home", onSelectContent }: ContentProps) {
  const { content, error } = useMarkdown(contentId)

  if (error) {
    return <div className="content error">Failed to load content.</div>
  }

  if (!content) {
    return <div className="content loading">Loading…</div>
  }

  return (
    <div className="content">
      <ReactMarkdown
        // rehypePlugins={[rehypeRaw]}
        components={{
          // allow <a> tag to link to other markdown content
          a: ({href="", children}) => {
            const isExternal =
              href.startsWith("http://") ||
              href.startsWith("https://") ||
              href.startsWith("mailto:")

            if (!isExternal) {
              return (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    onSelectContent?.(href)
                  }}
                >
                  {children}
                </a>
              )
            }

            // normal links
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Content
