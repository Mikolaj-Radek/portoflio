import "./about.css";
import Name from "../start/name";
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
        <img
          src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          className="img"
        />
      </div>
    </div>
  );
}

export default About;
