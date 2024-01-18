let a = "hola";

// console.log(a);

// Funcion tipada 

function suma(a:number,b:number){
  return a + b;

};


function saludar({nombre,edad} : {nombre:string,edad:number}){

  console.log(`hola ${nombre} , tienes ${edad}`)
}

saludar({nombre:"juan", edad:28});


function saludar2({nombre,edad} : {nombre:string,edad:number}){

  console.log(`hola ${nombre} , tienes ${edad}`);
  return edad;

}

//ARROW FUNCTION CON CALLBACK


const funcion3  = (funcion : (name:string) => void)=>{
  funcion('Ramon');

}

const hola = (nombre : string) =>{
   console.log("hola",nombre);

}

funcion3(hola);

const suma2 = (a:number, b:number) : number =>{ // opcional el tipado del return
  
  return a + b;

}

console.log(suma2(2,6));


console.log(suma(5,2));

const nombre : string = "Juan";

// Never
function throwError(message:string):never{
  throw new Error(message);  

}

// Inferencia de funciones anonimas


const avengers = ["spiderman","ironman","hulk"];

 avengers.forEach(avenger =>{
  console.log(avenger.toUpperCase());
 })



// console.log(nombre);



// Objetos

const persona = {
    nombre: "juan",
    edad : 28,
}

// type Hero = {
//    name : string
//    age : number
// }

// let hero : Hero = {
//    name : "Thor",
//    age : 1500
// }

// function createHero (name:string, age:number) : Hero{
//   return{name,age}
// }

// const thor = createHero('Thor',1500);

// console.log(hero);
// console.log(thor);



// Optional properties

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type Hero = {
//     readonly id?: HeroId
//      name : string
//      age : number
//      isActive ?: boolean
//   }
  
//   let hero : Hero = {
//      name : "Thor",
//      age : 1500
//   }
  
//   // function createHero (name:string, age:number) : Hero{

//   function createHero (hero: Hero) : Hero{
//     const {name,age} = hero;
//     return{
//       id:crypto.randomUUID(),
//       name,
//       age,
//       isActive : true}
//   }
  
//   const thor = createHero({name:"Thorgay",age:1500});


  // const thor = createHero('Thor',1500);
  
 

  // console.log(hero);
  // console.log(thor);
  

  // Template union types

 type HexadecimalColor = `#${string}`;
   
  const color = '0033ff'
  const color2 : HexadecimalColor = '#0033ff'




  // Union types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale =  'local' | 'planetary' | 'galactic' | 'univesral'| 'multiversal';

// type Hero = {
//     readonly id?: HeroId
//      name : string
//      age : number
//      isActive ?: boolean
//      powerScale ?: HeroPowerScale
//   }
  
//   let hero : Hero = {
//      name : "Thor",
//      age : 1500
//   }
  
//   // function createHero (name:string, age:number) : Hero{

//   function createHero (hero: Hero) : Hero{
//     const {name,age} = hero;
//     return{
//       id:crypto.randomUUID(),
//       name,
//       age,
//       isActive : true}
//   }
  
//   const thor = createHero({name:"Thorgay",age:1500});
//   thor.powerScale = 'galactic';


//   console.log(thor)

// Intersection types


type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale =  'local' | 'planetary' | 'galactic' | 'univesral'| 'multiversal';

type HeroBasicInfor = {
   name: string,
   age : number,

}

type HeroProperties = {
    readonly id?: HeroId,   
     isActive ?: boolean,
     powerScale ?: HeroPowerScale,
  }

type Hero = HeroBasicInfor & HeroProperties;

  
  let hero : Hero = {
     name : "Thor",
     age : 1500
  }
  
  // function createHero (name:string, age:number) : Hero{

  function createHero (hero: Hero) : Hero{
    const {name,age} = hero;
    return{
      id:"123-123-123-123-123",
      name,
      age,
      isActive : true}
  }
  
  const thor = createHero({name:"Thorgay",age:1500});
  thor.powerScale = 'galactic';


  console.log(thor)




  // Type indexing 
  
  type HeroProperties2 = {
   isActive : boolean,
   address: {
    planet : string,
    city  : string 
   }

  }

  const adressHero : HeroProperties2['address'] = {
 
     planet: 'Earth',
     city : 'Armenia'
  }

  console.log(adressHero);


  /// Type from value 

  const address = {
     planet : 'Earth',
     city : 'Silverstone'
  }

  type Address = typeof address ;

  const newAdress : Address = {
      planet :'venus',
      city : 'barcelona'

  }

  // Type from function return 

   function createAdress () {

     return {
        planet: 'Tierra',
        city:'new york',
     }
   }

    type newAdress = ReturnType <typeof createAdress>

    // Arrays 

    const languages: string[] = [];

    const languages2:(string|number)[] = [];

    languages.push('Javascript');    
    languages.push('Java');

    languages2.push('Javascript');    
    languages2.push('Java');
    languages2.push(2);    
    languages2.push(3);

    console.log('Languages',languages);
    
    console.log('Languages2',languages2);