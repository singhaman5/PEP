//const products = ["product1","product2","product3"]

const products = [
    {id: 1,name: "Product1",description: "Expensive", price: 50000},
    {id: 1,name: "Product2",description: "Expensive", price: 25000},
    {id: 1,name: "Product3",description: "Expensive", price: 15000}
]
let cart = []
//const cart = [] -> Only work on cart.push(product)

//products.forEach((product) => console.log(product))

// products.forEach((product) => {
//     product.quantity = 1
//     product.total = product.price * product.quantity
//     //cart.push(product)
//     //cart = [...cart,product]
// });
// console.log(cart)

// Another way of printing the above using for each loop
// products.forEach((product) => {
//     const obj = {
//     ...product,
//     quantity:1,
//     };
//     cart = [...cart,obj]
// });
// console.log(cart)
