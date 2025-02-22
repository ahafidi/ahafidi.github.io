"use client";

export default function Portfolio() {
  return (
    <section className="py-5">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0">
            <h1 className="mb-5 text-3xl font-medium text-gray-700 dark:text-gray-200 md:text-4xl">
              Portfolio
            </h1>
            <p className="text-xs font-normal text-gray-600 dark:text-gray-300 md:text-base">
              I have brought here my biggest and favorite works as a
              professional.
            </p>
          </div>
          <div className="space-y-24">
            <div className="flex space-x-6">
              <h1 className="text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                01
              </h1>
              <span className="w-28 min-w-10 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="mb-5 text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                  <a
                    href="https://ahafidi.github.io/"
                    className="relative w-fit inline after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    ahafidi.github.io
                  </a>
                </h1>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-300 md:text-base">
                  Personal branding website built with Next.js and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                02
              </h1>
              <span className="w-28 min-w-10 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="mb-5 text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                  <a
                    href="https://article-builder.vercel.app/"
                    className="relative w-fit inline after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Article Builder
                  </a>
                </h1>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-300 md:text-base">
                  Tiny & Easy-to-Use online Article Builder capable of parsing
                  both Markdown & LaTeX.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                03
              </h1>
              <span className="w-28 min-w-10 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="mb-5 text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                  ■■■■■■■.social
                </h1>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-300 md:text-base">
                  A twitter-inspired web platform developed using Next.js and
                  Supabase.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                04
              </h1>
              <span className="w-28 min-w-10 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="mb-5 text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                  ■■■■■.ai
                </h1>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-300 md:text-base">
                  User-friendly interface for interacting with language models.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                05
              </h1>
              <span className="w-28 min-w-10 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="mb-5 text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                  <a
                    href="https://www.engieimpact.com/ellipse"
                    className="relative w-fit inline after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Ellipse
                  </a>{" "}
                  – Zero Platform Carbon
                </h1>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-300 md:text-base">
                  A dynamic intelligence tool to accelerate decarbonization.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                06
              </h1>
              <span className="w-28 min-w-10 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="mb-5 text-3xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
                  Kering
                </h1>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-300 md:text-base">
                  Contributed to the development of e-commerce luxury websites
                  for YSL and Alexander McQueen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
