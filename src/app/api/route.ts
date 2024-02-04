import fs from 'fs/promises'

export type Publication = {
  slug: string
  title: string
}

export type Publications = Publication[]

export async function GET() {
  const files = await fs.readdir('public/posts')

  const publications: Publications = files.map((fileName) => ({
    slug: fileName.replaceAll(' ', '-').replace('.md', '').toLowerCase(),
    title: fileName.replace('.md', ''),
  }))

  return Response.json(publications)
}
