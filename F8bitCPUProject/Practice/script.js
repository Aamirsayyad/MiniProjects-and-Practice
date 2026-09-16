const Prom= new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("Hello World!")},3000);
    }).then((data)=>console.log(data));


