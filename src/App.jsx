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
      <div className=" w-full  gap-4 h-screen">
        <NavBar />
        <Home />
        <Sobre/>
        <Cardproject/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
