const products = [
    {id: 1,name: "Product1",description: "Expensive", price: 50000},
    {id: 2,name: "Product2",description: "Expensive", price: 25000},
    {id: 3,name: "Product3",description: "Expensive", price: 15000}
]

// let cart = []
// products.map((product) => {
//     const obj = {
//     ...product,
//     quantity:1,
//     };
//     cart = [...cart,obj]
// });

const cart = products.map((product) => {
    const obj = {
    ...product,
    quantity:1,
    };
    return obj;
});
console.log("My Cart")
console.log(cart)