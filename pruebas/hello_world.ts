//Hola mundo

console.log("holaa");

//Variables

var myString = "Esto es una cadena";
 
// myString = 5;  Error 
 
console.log(typeof myString);

let myString2: String = "Esto es una cadena de texto";
myString2 = "aqui cambia el valor";
console.log(myString2);


let mynumber2 = 6.5 ;
console.log(mynumber2);
console.log(typeof mynumber2);

let myBool : boolean = false; 
myBool = true ;
console.log(myBool);
console.log(typeof myBool);

let myUndefined : undefined ;
 console.log(myUndefined);

 //Controloes de flujo 

 if(mynumber2 === 10){
    console.log("el valor es 10");
 } else {
    console.log("No es 10");
 }

 // Constantes 

 const myConst = "mi constante";
//  myConst = "hola"; Error no se puede volver a asignar
 console.log(myConst);

 function myFunction () :string {
      return "mi funcion ";

 }
 
 console.log(myFunction());


 function sumTwoNumber (firstNumber:number,secondNumber:number) :number {
     return firstNumber + secondNumber;
 };

 console.log(sumTwoNumber(2,5));


 // Listas 

//  let myList: Array <string> = ["Juan","Casa"];
let myList = ["Juan","Casa"]
 console.log(myList);

let mySet: Set<string> = new Set(["Juan","casa","carro","Juan"]);
mySet.add("28");
console.log(mySet);


//Bucles 

for(const value of myList){
    console.log(value);
}

// Clases 

class MyClass {
    name:string
    age:number
    
    constructor(name:string ,age:number){
      this.name = name;
      this.age  = age ;

    }

}

let myClass = new MyClass("Mario",80);
console.log(myClass);
console.log(myClass.age,myClass.name);