import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../../components/DashBoard/DashBoard";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import './Products.css'; // Asegúrate de importar tus estilos personalizados
// import { getCategoriesAsync } from "../../utils/MockData"; // Asegúrate de importar tu función para obtener categorías

function Products() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Simulación de carga de categorías
        // getCategoriesAsync().then((categories) => {
        setCategories(['moda', 'street', 'running', 'sport']);
        // })
    }, []);

    return (
        <Dashboard>
            <div className="container">
                <div className="row justify-content-center my-4">
                    <div className="col-12 text-center">
                        <div className="filter d-flex justify-content-center flex-wrap">
                            {categories.map((category, index) => (
                                <NavLink
                                    to={`/products/${category}`}
                                    key={index}
                                    className="nav-link btn btn-outline-primary mx-1 my-1"
                                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                                >
                                    {category}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
                <ItemListContainer />
            </div>
        </Dashboard>
    );
}

export default Products;
