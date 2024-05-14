import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Reservas() {
    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className="rightSide">
                <h1> Reserva ya!</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Nombre Completo</label>
                    <input name="name" placeholder="Ingresa el nombre completo.." type="text" required/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Ingresa tu correo electronico..." type="email" required/>
                    <label htmlFor="name">Fecha Reserva</label>
                    <input name="fecha" placeholder="Ingresa fecha.." type="text" required />
                    <label htmlFor="message">Pedido Especial</label>
                    <textarea
                        rows="6"
                        placeholder="Ingresa tu pedido..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Reservas;