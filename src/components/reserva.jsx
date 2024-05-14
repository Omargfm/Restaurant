import react from react

const ReservationForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: '',
    });
   
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
   
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
      console.log('Reserva enviada:', formData);
    };
   
    return (
  <form onSubmit={handleSubmit}>
  <div>
  <label htmlFor="name">Nombre:</label>
  <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
  </div>
  <div>
  <label htmlFor="email">Correo Electrónico:</label>
  <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
  </div>
  <div>
  <label htmlFor="phone">Teléfono:</label>
  <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
  </div>
  <div>
  <label htmlFor="date">Fecha:</label>
  <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
  </div>
  <div>
  <label htmlFor="time">Hora:</label>
  <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
  </div>
  <div>
  <label htmlFor="guests">Número de Personas:</label>
  <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
  </div>
  <div>
  <label htmlFor="specialRequests">Peticiones Especiales:</label>
  <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
  ></textarea>
  </div>
  <button type="submit">Reservar</button>
  </form>
    );
  };
 export default reservas