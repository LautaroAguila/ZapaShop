import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProductAsyncById } from '../../utils/MockData'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'

const ItemDetaliContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    const {productId} = useParams()
    useEffect(()=>{
        getProductAsyncById(productId).then((product) => {
            setItem(product)
            setLoading(false)
            console.log(product)
        })
    }, [productId]) 

    return loading ? <Spinner/>:( <> <ItemDetail item={item}/> </>)

}
export default ItemDetaliContainer