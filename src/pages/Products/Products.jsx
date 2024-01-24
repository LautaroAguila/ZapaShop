import React from "react";
import Dashboard from "../../components/DashBoard/DashBoard";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import './Products.css'

function Products() {

    return (
        <Dashboard>
            <div className="filter">
                <div>Ropa</div>
                <div>Joyas</div>
                <div>Tecnologia</div>
            </div>
            
            <ItemListContainer/>
        </Dashboard>
    )
}
export default Products;