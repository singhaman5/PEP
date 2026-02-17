// function add(a,b){
//     console.log(a)
//     console.log(b)
// }
// add(4,5)


// function add(a,b){
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[1])
// }
// add(4,5,8,9)


// function add(...arr){
//     console.log(arr)
// }
// add(7,5,8,9)


// function add(...arr){
//     let sum = arr.reduce((total,num) => {
//         return total + sum
//     })
// }
// const result = add(4,5)
// console.log(result)


const add = (...args) => {
    let sum = args.reduce((total,num) => total + num, 0)
};
const result = add(7,5,8,9);
console.log(result)