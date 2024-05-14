import { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import {Reorder} from "@mui/icons-material"
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> Nosotros </Link>
                    <Link to="/reservas"> Reservas </Link>
                    <Link to="/contact"> Contacto </Link>
                
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> Nosotros </Link>
                <Link to="/reservas"> Reservas </Link>
                <Link to="/contact"> Contacto </Link>
                <button onClick={toggleNavbar}>
                    <Reorder />
                </button>
            </div>
        </div>
    );
}

export default Navbar;