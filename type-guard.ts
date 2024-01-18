interface Mario2 {
    
    nombre : string,
    saltar: () => void 
}

interface Sonic2{
 
  nombre : string,
  correr : ()=> void
}

type Personaje2 = Mario2 | Sonic2 

function checkIsSonic(personaje:Personaje2): personaje is Sonic2{ // type guard
 return (personaje as Sonic2).correr != undefined

}

function jugar2 (personaje:Personaje2){      
   if (checkIsSonic(personaje)){

    personaje.correr()
   }


}
