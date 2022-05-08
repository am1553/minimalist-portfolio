import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header"
import Home from './Home/Home'
import Projects from "./Projects/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
