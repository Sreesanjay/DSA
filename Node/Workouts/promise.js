let a = Promise.resolve("hellow");
let b = Promise.resolve("hai");
let c = Promise.reject("hoii");

Promise.all([a,b,c]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})