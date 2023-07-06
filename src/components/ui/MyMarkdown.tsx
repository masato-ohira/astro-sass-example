import MarkdownIt from 'markdown-it'

const mdOptions: MarkdownIt.Options = {
  html: true,
  breaks: true,
  linkify: false,
  typographer: true,
}
const md = new MarkdownIt(mdOptions)

export const MyMarkdown = ({ content }: { content: string }) => {
  const html = md.render(content as string)
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  )
}
