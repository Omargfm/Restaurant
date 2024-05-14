import PropTypes from 'prop-types'

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

MenuItem.prototype = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string
}

export default MenuItem;