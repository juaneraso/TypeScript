//fetching de datos en ts 
export {}

const API_URL = "https://jsonplaceholder.typicode.com/users";

const response = await fetch(API_URL);
console.log(response);

// const respose = "hola";

// if(!respose){

//     throw new Error ('Request failed')
// }

