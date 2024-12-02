// Creating a new Promise object and assigning it to the variable myPromise
const myPromise_true = new Promise((resolve, reject) => {
    // Simulating a condition with a boolean variable 'success'
    let success = true; 
    // If the condition is true, call resolve to mark the promise as fulfilled
    if (success) { 
      resolve("The operation was successful!");
    } else { 
      // If the condition is false, call reject to mark the promise as rejected
      reject("The operation failed!");
    } 
  });

  myPromise_true.then( (result) => {
    console.log(result);
    
  }).catch( (error) => {
    console.log(error);
  });

  const myPromise_false = new Promise((resolve, reject) => {
    // Simulating a condition with a boolean variable 'success'
    let success = false; 
    // If the condition is true, call resolve to mark the promise as fulfilled
    if (success) { 
      resolve("The operation was successful!");
    } else { 
      // If the condition is false, call reject to mark the promise as rejected
      reject("The operation failed!");
    } 
  });

  myPromise_false.then( (result) => {
    console.log(result);
    
  }).catch( (error) => {
    console.log(error);
  });