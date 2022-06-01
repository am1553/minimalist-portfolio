import './App.css';
import Header from './components/Header/Header';
import About from './sections/About/About';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
