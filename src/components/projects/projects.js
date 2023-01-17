import "./projects.css";
import foto from "../../zdj/foto_Easy-Resize.com.jpg";
import foto1 from "../../zdj/foto1_Easy-Resize.com.jpg";
import foto2 from "../../zdj/foto2_Easy-Resize.com.jpg";
import foto3 from "../../zdj/foto3_Easy-Resize.com.jpg";
import foto4 from "../../zdj/foto4_Easy-Resize.com.jpg";
import foto5 from "../../zdj/foto5_Easy-Resize.com.jpg";

function Projects() {
  return (
    <div className="projects">
      <div className="project-text">
        <p className="proj">Moje projekty</p>
        <div className="all-projects">
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
                  href="http://www.filmgolda.pl/"
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
              <img src={foto} alt="" className="img-port" />
            </div>
            <div className="about-proj">
              <p className="name-projects">Oddaj Rzeczy</p>
              <p className="project-text">
                Projekt do portfolio z możliwoscią rejestracji i zalogowania sie
                na strone
              </p>
              <div className="links">
                <a
                  href="https://candid-tanuki-00a105.netlify.app/"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
                <a
                  href="https://github.com/Mikolaj-Radek/portfoliolab"
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
              <img src={foto3} alt="" className="img-port" />
            </div>
            <div className="about-proj">
              <p className="name-projects">Car Sharing</p>
              <p className="project-text">
                Projekt robiony w czasie nauki, strona jest o wypozyczaniu aut
              </p>
              <div className="links">
                <a
                  href="https://nimble-alpaca-8f8ca9.netlify.app/"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
                <a
                  href="https://github.com/Mikolaj-Radek/Car-sharing"
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
              <p className="name-projects">Zaplanuj Jedzonko</p>
              <p className="project-text">
                Projekt był robiony w zespole 4 osobowym, w trakcie kursu.
              </p>
              <div className="links">
                <a
                  href="https://beamish-bombolone-1aeac6.netlify.app/app.html"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Podgląd
                </a>
                <a
                  href="https://github.com/Mikolaj-Radek/jedzonko"
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
