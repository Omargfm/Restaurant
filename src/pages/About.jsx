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
          <h1> ABOUT US</h1>
          <p>
            Bienvenidos a Pizzería Omar, donde cada rebanada cuenta una
            historia. Nuestra pizzería ha sido un pilar de la comunidad desde
            que nuestros abuelos la fundaron en 1960. Desde entonces, hemos
            dedicado nuestras vidas a preservar las recetas familiares y el
            sabor auténtico que nos caracteriza. La historia de nuestra pizzería
            comenzó con la visión de nuestros abuelos, quienes trajeron consigo
            las ricas tradiciones culinarias de Italia. Con pasión y dedicación,
            abrieron las puertas de nuestro primer local, que pronto se
            convirtió en un lugar de encuentro para amigos y familias que
            buscaban disfrutar de una pizza genuina y deliciosa. En Pizzería
            Omar, creemos en la importancia de mantener vivas las técnicas
            artesanales. Cada pizza es elaborada con ingredientes frescos y de
            la más alta calidad, seleccionados cuidadosamente para asegurar que
            cada bocado sea una experiencia memorable. Nuestra masa se prepara a
            diario, siguiendo una receta secreta que ha pasado de generación en
            generación, y nuestras salsas están hechas a mano con tomates
            maduros y especias seleccionadas. A lo largo de los años, hemos
            crecido y evolucionado, pero nuestros valores fundamentales siguen
            siendo los mismos: ofrecer un servicio excepcional, crear un
            ambiente acogedor y, sobre todo, brindar pizzas que deleitan el
            paladar y el corazón. Ya sea que vengas a celebrar una ocasión
            especial o simplemente a disfrutar de una cena entre semana, en
            Pizzería La Tradición te sentirás como en casa. Gracias por ser
            parte de nuestra historia y por permitirnos ser parte de la tuya.
            ¡Esperamos verte pronto y compartir contigo la tradición de nuestra
            familia!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
