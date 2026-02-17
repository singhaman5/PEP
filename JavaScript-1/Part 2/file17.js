const products = ["product1","product2","product3"]
// for(let i=0;i<products.length;i++){
//     console.log(products[i])
// }

// for each loop
//products.forEach(()=>{})
// products.forEach((product) => {
//     console.log(product)
// })

// Best way of using for each loop
products.forEach((product) => console.log(product))

// function controller(f){
//     f();
// }
// controller(10)

// let a = 10
// let name = "James"
// const f1 = () => console.log("Hello World")
// f1()


function greet(f){
    f()
}
greet(() => console.log("Hello World"))
