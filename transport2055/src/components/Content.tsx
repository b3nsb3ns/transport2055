import '../styles/Content.css'

import { useMarkdown } from '../hooks/useMarkdown'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface ContentProps {
  contentId?: string;
}

function Content({ contentId = "home" }: ContentProps) {
  const { content, error } = useMarkdown(contentId)

  if (error) {
    return <div className="content error">Failed to load content.</div>
  }

  if (!content) {
    return <div className="content loading">Loading…</div>
  }

  return (
    <div className="content">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  )
}

export default Content
