import MenuItem from "../components/MenuItem.jsx";
import "../styles/Menu.css";
import {useEffect, useState} from "react";
import axios from "axios";

const baseURL = 'https://restaurant-backend-ruby.vercel.app/api/';

function Menu() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(baseURL + 'products').then((response) => {
            setProducts(response.data);
        });
    }, []);

    if (products) {

        return (
            <div className="menu">
                <h1 className="menuTitle">Nuestro menú</h1>
                <div className="menuList">
                    {products.list.map((product, key) => {
                        return (
                            <MenuItem
                                key={key}
                                image={baseURL + "img/" + product.img}
                                name={product.name}
                                price={product.price}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Menu;