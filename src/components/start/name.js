import "./name.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Name() {
  return (
    <div className="wrapper-about">
      <div className="left-box-about">
        <p className="text-name">Cześć! Nazywam się</p>
        <h1 className="my-name">Mikołaj Radek</h1>
        <p className="what-i-do">Zajmuje się tworzeniem stron internetowych</p>
        <div className="social">
          <a
            href="https://github.com/Mikolaj-Radek"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/miko%C5%82aj-radek-7a1150237/"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Name;
