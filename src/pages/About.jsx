import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <>
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
          <h1> Sobre Nosotros</h1>
          <p>
            Bienvenidos a Last Pizza, donde cada rebanada cuenta una historia.
            La historia de nuestra pizzería comenzó con la visión de nuestros
            abuelos, quienes trajeron consigo las ricas tradiciones culinarias
            de Italia. Con pasión y dedicación, abrieron las puertas de nuestro
            primer local, que pronto se convirtió en un lugar de encuentro para
            amigos y familias que buscaban disfrutar de una pizza genuina y
            deliciosa. Hemos estado haciendo fusiones para que cada pizza que te
            lleves a casa sea del gusto de toda la familia.

            <br /> <br />
            Estamos ubicados en San Eugenio 1331, Ñuñoa
            <br /> <br />
            TLF +569 2548 7459
            <br /> <br />
            Disfruta de todas nuestras especialidades......!!!!!!
          
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
