import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Last Pizza </h1>
                <p> Pizza para cualquier gusto</p>
                <Link to="/menu">
                    <button> Aquí el menú </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;