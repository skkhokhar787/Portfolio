import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc] text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-800">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
