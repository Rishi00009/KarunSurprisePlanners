import './App.css';
import Header from './components/header';
import Banner from './components/Banner';
import About from './components/pages/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Main Content Sections with IDs for navigation */}
      <section id="home">
        <Banner />
        {/* Home content goes here */}
      </section>
      
      <section id="about" className="py-16">
        <About />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;