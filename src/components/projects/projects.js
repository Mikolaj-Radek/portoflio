import "./projects.css";
import foto2 from "../../zdj/foto2_Easy-Resize.com.jpg";
import foto4 from "../../zdj/foto4_Easy-Resize.com.jpg";
import foto5 from "../../zdj/statek.png";
import foto3 from "../../zdj/kawa.png";
import foto1 from "../../zdj/sklep.png";

function Projects() {
  return (
    <div className="projects">
      <div className="project-text">
        <p className="proj">Projekty</p>
        <div className="all-projects">
          <div className="wrapper-1">
            <div className="img-box">
              <img src={foto2} alt="" className="img-port" />
            </div>
            <div className="about-proj">
              <p className="name-projects">BestShop</p>
              <p className="project-text">
                strona zrobiona do portfolio wzorując się z gotowego pojektu w
                AdobeXD
              </p>
              <div className="links">
                <a
                  href="https://peaceful-tapioca-5306f3.netlify.app/"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
                <a
                  href="https://github.com/Mikolaj-Radek/WarsztatyTydzie-1"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="wrapper-1">
            <div className="img-box">
              <img src={foto5} alt="" className="img-port" />
            </div>
            <div className="about-proj">
              <p className="name-projects">Wizytówka</p>
              <p className="project-text">strona wizytówka</p>
              <div className="links">
                <a
                  href="https://radekrobert.com/"
                  className="github github-f"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
              </div>
            </div>
          </div>
          <div className="wrapper-1">
            <div className="img-box">
              <img src={foto3} alt="" className="img-port" />
            </div>
            <div className="about-proj">
              <p className="name-projects">Kawiarnia</p>
              <p className="project-text">strona wizytówka</p>
              <div className="links">
                <a
                  href="https://pierwszastronawp.xyz/"
                  className="github github-f"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
              </div>
            </div>
          </div>
          <div className="wrapper-1">
            <div className="img-box">
              <img src={foto1} alt="" className="img-port" />
            </div>
            <div className="about-proj">
              <p className="name-projects">Sklep - Dekoracje</p>
              <p className="project-text">Sklep z dekoracjami </p>
              <div className="links">
                <a
                  href="https://portofliowp.xyz/"
                  className="github github-f"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
              </div>
            </div>
          </div>
          <div className="wrapper-1">
            <div className="img-box">
              <img src={foto4} alt="" className="img-port" />
            </div>
            <div className="about-proj">
              <p className="name-projects">Portfolio</p>
              <p className="project-text">
                Komercyjny projekt portfolio wykonany dla montażysty
              </p>
              <div className="links">
                <a
                  href="https://www.filmgolda.pl/"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
                <a
                  href="https://github.com/Mikolaj-Radek/PortfolioJacek"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
