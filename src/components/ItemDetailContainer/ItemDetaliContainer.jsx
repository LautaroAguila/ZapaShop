import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProductAsyncById } from '../../utils/MockData'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import { db } from '../../firebase/config'
import { collection, doc, getDoc } from 'firebase/firestore'



const ItemDetaliContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    const {productId} = useParams()

    useEffect(()=>{
        const productsCollection = collection(db, 'products')
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc)
            .then((doc) => {
                setItem({ ...doc.data() })
            })
            .catch((error) => {
                console.log('error: ', error)
            })
        setLoading(false)

    }, [productId]) 

    return loading ? <Spinner/>:( <> <ItemDetail item={item}/> </>)

}
export default ItemDetaliContainer