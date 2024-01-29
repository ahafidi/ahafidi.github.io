"use client";

import React from "react";
import Description from "./description";
import Footer from "./footer";
import Header from "./header";
import Portfolio from "./portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (darkMode)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  }, [darkMode])

  return (
    <>
      <Header toggleDarkMode={() => setDarkMode(prevDarkMode => !prevDarkMode)} />

      <main>
        <Description />
        <Portfolio />
      </main>

      <Footer />
    </>
  )
}
