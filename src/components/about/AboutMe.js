import "./aboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="wrapper-about">
      <div className="left-box-about">
        <p className="text-name">Cześć! Nazywam się</p>
        <h1 className="my-name">Mikołaj Radek</h1>
        <p className="what-i-do">Zajmuje się tworzeniem stron internetowych.</p>
        <div className="social">
          <a href="x" className="github">
            Github
          </a>
          <a href="" className="linkedin">
            Linkedin
          </a>
        </div>
      </div>
      <div className="right-box-about">
        <a href="">
          <FontAwesomeIcon icon={faArrowDown} className="arrow" />
        </a>
      </div>
    </div>
  );
}

export default App;
