import '../styles/Content.css'

import { useMarkdown } from '../hooks/useMarkdown'
import ReactMarkdown from 'react-markdown'
import { useContext } from 'react'
import { ExpandedContext } from '../styles/ExpandedContext'
import type { ExpandedContextType } from '../styles/ExpandedContext'

interface ContentProps {
  contentId?: string;
  onSelectContent: (id: string) => void
}

function Content({ contentId = "home", onSelectContent }: ContentProps) {
  // const [isExpanded, setIsExpanded] = useState(true)
  const { expanded, toggleToOpposite } = useContext<ExpandedContextType>(ExpandedContext)

  // load markdown content from s3
  const { content, error } = useMarkdown(contentId)

  if (error) {
    return <div className="content error">Failed to load content.</div>
  }

  if (!content) {
    return <div className="content loading">Loading…</div>
  }

  return (
    <div className={`content ${expanded ? 'expanded' : 'collapsed'}`}>
      <button
        className='collapse-button'
        onClick={toggleToOpposite}
        aria-label={expanded ? 'Collapse panel' : 'Expand panel'}
      >
        {expanded ? '❮' : '❯'}
      </button>

      <ReactMarkdown
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
