"use client";

export default function Header({ toggleDarkMode }: { toggleDarkMode: () => void }) {
  return (
    <header className="container max-w-screen-xl px-5 py-5 mx-auto mb-40">
      <nav className="flex justify-between">

        <div className="flex items-center gap-x-5">
          <img className="w-12 h-12 rounded-full ring-2 ring-white" src="assets/profile.jpeg" alt="Logo" />
          <h3 className="hidden text-lg font-medium text-black lg:inline md:text-2xl dark:text-white">Abdelhafid HAFIDI / <span className="arabic">عبدالحفيظ حفيظي</span></h3>
        </div>

        <div className="flex justify-end gap-x-5">

          <div className="group/x">
            <a href="https://x.com/ahafidi_" target="_blank" className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/x:bg-black dark:bg-gray-900 dark:group-hover/x:bg-white">
              <img className="w-8 m-2 transition duration-100 ease-linear group-hover/x:invert dark:invert dark:group-hover/x:invert-0" src="assets/x.svg" alt="x.com" title="x.com" />
            </a>
          </div>

          <div className="group/in">
            <a href="https://www.linkedin.com/in/abdelhafid-hafidi/" target="_blank" className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/in:bg-black dark:bg-gray-900 dark:group-hover/in:bg-white">
              <img className="w-8 m-2 transition duration-100 ease-linear group-hover/in:invert dark:invert dark:group-hover/in:invert-0" src="assets/linkedin.svg" alt="LinkedIn" title="LinkedIn" />
            </a>
          </div>

          <div className="group/github">
            <a href="https://github.com/ahafidi" target="_blank" className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/github:bg-black dark:bg-gray-900 dark:group-hover/github:bg-white">
              <img className="w-8 m-2 transition duration-100 ease-linear group-hover/github:invert dark:invert dark:group-hover/github:invert-0" src="assets/github.svg" alt="GitHub" title="GitHub" />
            </a>
          </div>

          <div className="group/contrast">
            <button
              className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/contrast:bg-black dark:bg-gray-900 dark:group-hover/contrast:bg-white"
              onClick={toggleDarkMode}
            >
              <img className="w-8 m-2 transition duration-100 ease-linear group-hover/contrast:invert dark:invert dark:group-hover/contrast:invert-0" src="assets/contrast.svg" alt="Contrast" title="Contrast" />
            </button>
          </div>

        </div>
      </nav>
    </header>
  )
}
