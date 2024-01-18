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
    company: 'Nintendo',
    nombre : string,
    saltar: () => void 
}

interface Sonic{
  company: 'Sega',
  nombre : string,
  correr : ()=> void
}

type Personaje = Mario | Sonic 

function jugar (personaje:Personaje){     
   if(personaje.company === 'Nintendo'){       
       personaje.saltar() // Este es Mario
       return
   }
   personaje.correr
}
