import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "../../components/DashBoard/DashBoard";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import './Products.css'
import { getCategoriesAsync } from "../../utils/MockData";


function Products() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategoriesAsync().then((categories)=>{
            setCategories(categories)
        })
    }, [])

    return (
        <Dashboard>
            <div className="filter">
                {categories.map((category, index) => (
                    <NavLink 
                        to={`/products/${category}`}
                        key={index} 
                        className="navLink"
                    > {category} </NavLink>   
                )
                
                )}
            </div>
            
            <ItemListContainer/>
        </Dashboard>
    )
}
export default Products;