import fs from 'fs/promises'

import hljs from 'highlight.js'
import katex from 'katex'
import { Remarkable } from 'remarkable'
import { linkify } from 'remarkable/linkify'

import 'katex/dist/katex.min.css'
import path from 'path'

const md = new Remarkable({
  html: false, // do not remove!
  xhtmlOut: true,
  breaks: true,
  langPrefix: 'language-',
  linkTarget: '_blank',
  typographer: false,

  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) { }
    }

    try {
      return hljs.highlightAuto(code).value
    } catch (err) { }

    return '' // use external default escaping
  }
}).use(linkify)
md.core.ruler.enable([
  'abbr'
])
md.block.ruler.enable([
  'footnote',
  'deflist'
])
md.inline.ruler.enable([
  'footnote_inline',
  'ins',
  'mark',
  'sub',
  'sup'
])

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'public/posts'))

  return files.map((fileName) => ({
    slug: fileName.replaceAll(' ', '-').replace('.md', '').toLowerCase(),
  }))
}

async function getData(slug: string) {
  const fileName = slug.replaceAll('-', ' ') + '.md'
  const readFile = await fs.readFile(
    path.join(process.cwd(), `public/posts/${fileName}`),
    'utf-8'
  )
  return { data: readFile }
}

export default async function Page({ params }: { params: { slug: string } }) {

  const { data } = await getData(params.slug)

  const render =
    md.render(data)
      .replaceAll(/\$\$?([\s\S]*?)\$?\$/g, (wholeMatched, capturedGroup) => katex.renderToString(capturedGroup))

  return (
    <div className='w-full p-5 prose dark:prose-invert' dangerouslySetInnerHTML={{ __html: render }} />
  )
}
