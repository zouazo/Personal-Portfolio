import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Profile from "./pages/profile";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

