function getStudentInfo(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const userObj = {
                name: "Aman",
                email: "abc@gmail.com",
                age: 21
            }
            resolve(userObj);
        },2000)
    });
}


function displayInfo({name}){
    console.log(name)
}

async function main(){
    const result = await getStudentInfo()
    displayInfo(result)
    //console.log(result)
    console.log("Program Completed Successfully")
}
main()
// getStudentInfo shoul return object name, email and age



// function getStudentInfo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userObj = {
//         name: "Aman",
//         email: "abc@gmail.com",
//         age: 21
//       };
//       resolve(userObj);
//     }, 2000);
//   });
// }

// // display only name
// async function displayInfo() {
//   const student = await getStudentInfo();
//   console.log(student.name);
// }

// displayInfo();

// async function main() {
//   const result = await getStudentInfo();
//   console.log(result);
//   console.log("Program Completed Successfully");
// }

// main();
