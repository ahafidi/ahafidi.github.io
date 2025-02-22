import Description from "./description";
import Footer from "./footer";
import Header from "./header";
import Portfolio from "./portfolio";
import Publications from "./publications";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Description />
        <Portfolio />
        <Publications />
      </main>

      <Footer />
    </>
  );
}
