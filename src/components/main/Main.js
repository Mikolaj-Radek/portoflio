import "./main.css";
import Name from "../start/name";
import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
function App() {
  return (
    <div className="main">
      <Name />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
