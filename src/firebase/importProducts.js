import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import { products } from "../utils/MockData.js";

export const importProducts = async () => {
    const  productsCollection = collection(db, 'products')

    products.forEach(({title, category, description, image, price})=>{
        console.log(products)
        addDoc(productsCollection, {
            title,
            category,
            description,
            image,
            price,
        }).then((docRef)=>{
            console.log(docRef)
            console.log(docRef.id)
        })
    })
    console.log(products)
}