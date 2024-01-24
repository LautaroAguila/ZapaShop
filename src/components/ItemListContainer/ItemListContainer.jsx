import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './ItemListContainer.css';
import { getProductsAsync } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";




const ItemListContainer = ({}) => {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams()
    console.log(categoryId)
    useEffect(() => {
        getProductsAsync().then((products) => {
            if (categoryId) {
                const filteredProducts = products.filter(
                    (product) => product.category === categoryId
                )
                setItems(filteredProducts)
            }else{
                setItems(products)
                console.log(products)
            }
        })
        
        

    }, [categoryId])

    return items.length === 0 ?(
        <Spinner/>
    ):( 
        <>
            
            <ItemList itemList={items}/>
            
        </>
        
    )
};


export default ItemListContainer;