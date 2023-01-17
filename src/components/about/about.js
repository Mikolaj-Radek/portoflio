import "./about.css";
import myfoto from "../../zdj/myphoto.jpg";
function About() {
  return (
    <div className="about">
      <div className="about-me">
        <h1 className="about-me-main">Trochę o mnie</h1>
        <p className="text-about">
          Nazywam się <b>Mikołaj Radek</b> od 2 lat rozwijam sie w kierunku
          front-end'u zaczynając od przeróżnych kursów na youtube, udemy. Po
          jakimś czasie nauki, zapisałem sie na 3 miesięczny bootcamp, na którym
          pojawiły sie pierwsze większe projekty, na ten moment rozszerzam swoje
          umiejętności w technologiach które juz znam i uczę się nowych.
        </p>
      </div>
      <div className="my-foto">
        <img src={myfoto} className="img" />
      </div>
    </div>
  );
}

export default About;
