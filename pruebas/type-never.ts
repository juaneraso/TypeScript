
function fn( x : string | number){
  if(typeof x === 'string'){ 
     
    x.toLocaleLowerCase();
  } else if (typeof x === 'number'){
    x.toString();
  }
  else{
      // en este punto X es never
  }
}