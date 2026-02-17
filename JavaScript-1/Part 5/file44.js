function f1(x) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(x%2==0){
            resolve(`${x} is an even number`);
        }
        else{
            reject("Odd numbers not allowed")
        }        
    },3000)
  });
}

// try and catch is always written inside the async
async function main(){
    let num = Math.round(Math.random() * 10);
    try {
        const result = await f1(num);
        console.log(result);
        console.log("Program completed successfully");
    } catch(err){
        console.log(err);
    }
}
main()