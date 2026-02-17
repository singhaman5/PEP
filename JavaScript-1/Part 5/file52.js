// const student = {
//     name: "John",
//     age: 21
// }
// console.log(student)
// const result = JSON.stringify(student)
// console.log(result)

const student = '{"name": "John","age": 21}'
console.log(student)
const result = JSON.parse(student)
console.log(result)