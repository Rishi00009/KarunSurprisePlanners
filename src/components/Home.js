import Banner from "./Banner";
import About from "./pages/About";
import Services from "./Services";
function Home() {
  return (
    <>
      <section id="home">
        <Banner />
      </section>
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
    </>
  );
}

export default Home;