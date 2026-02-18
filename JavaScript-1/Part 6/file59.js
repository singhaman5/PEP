// student = {
//     name: "Nikhil",
//     display : function(){
//         console.log(this.name)
//     }
// }
// student.display()

// student = {
//     name: "Anshul",
//     display : ()=> {
//         console.log(this.name)
//     }
// }
// student.display


student = {
    name: "Anshul",
    display : () {
        console.log(this.name)
    },
}
student.display()