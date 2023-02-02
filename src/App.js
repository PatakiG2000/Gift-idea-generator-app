import "./App.css";
import Navbar from "./Layout/Navbar";
import Hero from "./Layout/Hero";
import HowItWorks from "./Layout/HowItWorks";
import ButWhy from "./Layout/ButWhy";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <ButWhy></ButWhy>
    </div>
  );
}

export default App;
