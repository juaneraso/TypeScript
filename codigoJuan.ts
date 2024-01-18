const amigo = "juan";

type Friend = {
   name : string;
   lastName: string;
}

const friend1 : Friend ={
  name : "Mario",
  lastName :"lopez"
}
 
function createFriend(name : string,lastName: string){
  
     return {
        name,
        lastName
     }       
}

function createFriend2(name:string,lastName:string):Friend{
  
     return{
        name,
        lastName

     }    
        
}

const createFriend3 = (name:string,lastName:string) : Friend =>{ // Tipo el return 
 
    return{
         name,
         lastName

    }

}



console.log(friend1);
console.log(createFriend("Armando","Barrera"));
console.log("friend2",createFriend2("Carl","Carson"));
console.log("friend3",createFriend3("Cosme","Fulanito"));