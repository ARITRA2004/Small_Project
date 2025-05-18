console.log("arindam dinda");

const promiss = new Promise((res,rej)=>{
    console.log("this is promise");
    res();
})

promiss.then(()=>{
    console.log("first then");
}).then(()=>{
    console.log("another then");
})