"use client";
import React from "react";
import PropTypes from "prop-types";
import "./ItemList.css"

import Item from "../Item/Item";

const ItemList = ({itemList}) => {
    return (
        <div className="items">
            {itemList.map(({id, title, price, category, description ,image}) => {
                return (
                    <Item 
                        key= {id}
                        id = {id}
                        title = {title}
                        price = {price}
                        category = {category}
                        description = {description}
                        image = {image}
                    />
                )
            })}
        </div>
    );
}

ItemList.propTypes = {};
export default ItemList;