import type { Publications } from "@/app/api/route"

export async function getPublications() {
  const data = await fetch(`${process.env.URL}/api`, { method: 'GET', cache: 'force-cache' })
  return await data.json() as Promise<Publications>
}

export default async function Publications() {
  const publications = await getPublications()

  return (
    <section className="py-5">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="mb-10 lg:mb-0">
          <h1 className="mb-5 text-3xl font-medium text-gray-700 dark:text-gray-200 md:text-4xl">
            Publications
          </h1>
          <p className="text-xl">
            {
              publications.map(({ slug, title }) => (
                <a
                  key={slug}
                  href={`publications/${slug}`}
                  className="relative w-fit inline after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  -&gt; {title}
                </a>))
            }
          </p>
        </div>
      </div>
    </section >
  )
}
