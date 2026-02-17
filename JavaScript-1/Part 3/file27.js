// let score = 90
// let result
// if(score > 50){
//     result = "pass"
// }
// else{
//     result = "Fail"
// }
// console.log(result)

// Using ternary operator
// let score = 90
// let result = score > 50 ? "Pass" : "Fail"
// console.log(result)

// let score = 90
// let result = score > 70 &&  "Pass"
// console.log(result)

// let score 
// let result = score || 30
// console.log(result)

// let score = 50
// switch (true){
//     case score >= 90:
//         console.log("Grade O")
//         break
//     case score >= 80:
//         console.log("Grade A+")
//         break
//     case score >= 70:
//         console.log("Grade A")
//         break
//     case score >= 60:
//         console.log("Grade B+")
//         break
//     case score >= 50:
//         console.log("Grade B")
//         break
//     case score >= 40:
//         console.log("Grade C")
//         break
//     default:
//         console.log("Enter a valid grade")
// }

let subject = "HTML"
switch(subject){
    case "HTML" : {
        console.log("Hyper Text Markup Language")
        break
    }
    case "CSS" : {
        console.log("Cascading Style Sheets")
        break
    }
    default: {
        console.log("Unknown")
    }
}
