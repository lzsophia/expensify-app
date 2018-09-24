const promises=new Promise((resolve, reject)=>{
    //simulate long running async task
    setTimeout(()=>{
        reject("something went wrong");
    },5000);
});
console.log('before');
promises.then((data)=>{console.log(data)}).catch((error)=>{
    console.log('error: ',error);
});
console.log('after');