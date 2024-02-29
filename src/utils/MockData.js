import { db } from "../firebase/config";

export const products = [
    {
        id: 1,
        category: "sport",
        title: "Jordan ONE",
        price: 100,
        description: "This colorway of the Air Jordan 1 Retro High OG also known as 'Taxi' brings back a distinct blocking first seen in the 'Bred Toe' from",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b62ad0c4-ae84-4e35-9ec4-361c5973107f/air-jordan-legacy-312-low-mens-shoes-B931hr.png"
    },
    {
        id: 2,
        category: "street",
        title: "Air Jordan",
        price: 100,
        description: "This colorway of the Air Jordan 1 Retro High OG also known as 'Taxi' brings back a distinct blocking first seen in the 'Bred Toe' from",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2b514a6e-7236-44fc-8e5c-7d00f5323a36/air-jordan-1-mid-se-womens-shoes-wkMdft.pngg"
    },
    {
        id: 3,
        category: "running",
        title: "Jordan Low",
        price: 100,
        description: "This colorway of the Air Jordan 1 Retro High OG also known as 'Taxi' brings back a distinct blocking first seen in the 'Bred Toe' from",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b8523d14-0520-4294-b86e-edea1495693a/air-jordan-1-mid-se-womens-shoes-wkMdft.png"
    },
    {
        id: 4,
        category: "moda",
        title: "Jordan Low",
        price: 100,
        description: "This colorway of the Air Jordan 1 Retro High OG also known as 'Taxi' brings back a distinct blocking first seen in the 'Bred Toe' from",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f84e05d5-f1a8-4628-a389-57b3f1889f61/air-jordan-1-mid-se-mens-shoes-Zn07hL.png"
    },

];

export const getProducts = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(products);
        }, 3000);
    });
};
export const getProductsAsync = () =>{
    return fetch('https://fakestoreapi.com/products').then((res) => res.json())
};
export const getProductAsyncById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>
    res.json()
    )
}

export const getCategoriesAsync = () =>{
    return fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    
}