function mostrarLongitud(objeto: number | string){
  if(typeof objeto === 'string'){

     return objeto.length;
  }

   return objeto.toString().length;
//    return typeof objeto;

}

console.log(mostrarLongitud("5500"));

//// Examples interfaces 

interface Mario {
    company: string,
    nombre : string,
    saltar: () => void 
}

interface Sonic{
  company: string,
  nombre : string,
  correr : ()=> void
}

type Persona = Mario | Sonic 

