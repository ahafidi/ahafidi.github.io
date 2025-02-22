"use client";

import Image from "next/image";
import React from "react";

export default function Header() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const savedPreference = localStorage.getItem("darkMode");
    if (savedPreference !== null) {
      setDarkMode(savedPreference === "true");
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <header className="container max-w-screen-xl px-5 py-5 mx-auto mb-40">
      <nav className="flex justify-between">
        <div className="flex items-center gap-x-5">
          <Image
            className="w-12 h-12 rounded-full ring-2 ring-white"
            src="/assets/profile.png"
            alt="Logo"
            width={48}
            height={48}
          />
          <h3 className="hidden text-lg font-medium text-black lg:inline md:text-2xl dark:text-white">
            Abdelhafid HAFIDI / <span className="arabic">عبدالحفيظ حفيظي</span>
          </h3>
        </div>

        <div className="flex justify-end gap-x-5">
          <div className="group/x">
            <a
              href="https://x.com/ahafidi_"
              target="_blank"
              className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/x:bg-black dark:bg-gray-900 dark:group-hover/x:bg-white"
            >
              <Image
                className="w-8 m-2 transition duration-100 ease-linear group-hover/x:invert dark:invert dark:group-hover/x:invert-0"
                src="assets/x.svg"
                alt="x.com"
                title="x.com"
                width={32}
                height={32}
              />
            </a>
          </div>

          <div className="group/in">
            <a
              href="https://www.linkedin.com/in/abdelhafid-hafidi/"
              target="_blank"
              className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/in:bg-black dark:bg-gray-900 dark:group-hover/in:bg-white"
            >
              <Image
                className="w-8 m-2 transition duration-100 ease-linear group-hover/in:invert dark:invert dark:group-hover/in:invert-0"
                src="assets/linkedin.svg"
                alt="LinkedIn"
                title="LinkedIn"
                width={32}
                height={32}
              />
            </a>
          </div>

          <div className="group/github">
            <a
              href="https://github.com/ahafidi"
              target="_blank"
              className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/github:bg-black dark:bg-gray-900 dark:group-hover/github:bg-white"
            >
              <Image
                className="w-8 m-2 transition duration-100 ease-linear group-hover/github:invert dark:invert dark:group-hover/github:invert-0"
                src="/assets/github.svg"
                alt="GitHub"
                title="GitHub"
                width={32}
                height={32}
              />
            </a>
          </div>

          <div className="group/contrast">
            <button
              className="inline-block p-1 transition duration-100 ease-linear rounded-md group-hover/contrast:bg-black dark:bg-gray-900 dark:group-hover/contrast:bg-white"
              onClick={() => setDarkMode((mode) => !mode)}
            >
              <Image
                className="w-8 m-2 transition duration-100 ease-linear group-hover/contrast:invert dark:invert dark:group-hover/contrast:invert-0"
                src="/assets/contrast.svg"
                alt="Contrast"
                title="Contrast"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
