import "./App.css";
import Cardproject from "./components/Cardproject";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Sobre from "./components/Sobre";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-4 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
        <NavBar />
        <main className="flex flex-col gap-8 px-4 md:px-8 lg:px-16">
          <Home />
          <Sobre />
          <Cardproject />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
