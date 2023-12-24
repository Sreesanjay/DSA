let fun = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("hellow");
    },1000)
   })
   fun.then((res)=>{

         console.log(res)
     })