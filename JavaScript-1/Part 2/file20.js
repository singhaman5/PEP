const products = [
    {id: 1,name: "Product1",description: "Expensive", price: 50000, category: "Laptop"},
    {id: 2,name: "Product2",description: "Expensive", price: 25000, category: "Desktop"},
    {id: 3,name: "Product3",description: "Expensive", price: 15000, category: "Mobile"},
    {id: 4,name: "Product4",description: "Expensive", price: 80000, category: "Television"},
    {id: 5,name: "Product5",description: "Expensive", price: 22000, category: "Monitor"},
    {id: 6,name: "Product6",description: "Expensive", price: 56000, category: "PC"}
]
let search = "Laptop"

// const resultArray = products.map((product) =>{
//     const obj = {
//     ...product,
//     quantity:1,
//     };
//     return obj;
// })
// console.log(resultArray)

// Another way
// let resultArray = products.map((product) => {
//   return product;
// });
// console.log(resultArray)

// Another way
// const resultArray = products.map(product => product);
// console.log(resultArray)

// To search and print everything where laptop is stored
// const resultArray = products.filter((product) => {
//     return product.category == search
// });
// console.log(resultArray)

const resultArray = products.filter((product) => product.category == search);
console.log(resultArray)