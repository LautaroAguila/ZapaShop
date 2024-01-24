const products = [
    {
        id: 1,
        name: "Jordan ONE",
        price: 100,
        stock: 10,
        image: "src/utils/image/jordan1.jpeg"
    },
    {
        id: 2,
        name: "Air Jordan",
        price: 100,
        stock: 10,
        image: "src/utils/image/jordan1.jpeg"
    },
    {
        id: 3,
        name: "Jordan Low",
        price: 100,
        stock: 10,
        image: "src/utils/image/jordan1.jpeg"
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