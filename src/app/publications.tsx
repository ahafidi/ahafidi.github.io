"use client";

export default function Publications() {
  return (
    <section className="py-5">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <h1 className="mb-5 text-3xl font-medium text-gray-700 dark:text-gray-200 md:text-4xl">
            Publications
          </h1>
        </div>
        <div className="text-2xl font-normal text-gray-700 dark:text-gray-200 md:text-4xl">
          <a
            href="https://gist.github.com/ahafidi/419349b235fda7dc6f40f18752ff8ec4"
            className="relative w-fit inline after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            &rarr; Irrationality of Square Roots of Prime Numbers
          </a>
        </div>
      </div>
    </section>
  );
}
