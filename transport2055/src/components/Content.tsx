import './Content.css'

interface ContentProps {
  text?: string;
}

function Content({ text = "Default content" }: ContentProps) {

  return (
    <div>
    <p>
        This is the content. Or is it?
    </p>
    <p>
        {text}
    </p>
    </div>
  )
}

export default Content
