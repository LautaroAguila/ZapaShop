import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import './ItemListContainer.css';
import styled from 'styled-components';
import { getProductsAsync , getProductAsyncById } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";


const ItemListContainer = ({}) => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {

        getProductsAsync().then((products) => {
            setItems(products)
            console.log(products)
        })
        
        getProductAsyncById(3).then((product) => {
            console.log(product)
        })

    }, [])

    return items.length === 0 ?(
        <Spinner/>
    ):( 
        <ItemList itemList={items}/>
    )
};


export default ItemListContainer;