let promise_custom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "John", age: "25"});
    }, 2000);
})


promise_custom.then(  (result) => {
    console.log(`retrieved from promise: ${result.name} and ${result.age}`);  
})


