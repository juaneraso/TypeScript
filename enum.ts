// enum ERROR_TYPES {
//     NOT_FOUND = 'notFound', // 0
//     UNAUTHORIZED = 'unauthorized', // 1
//     FORBIDDEN = 'forbidden' // 2
//   }


const enum ERROR_TYPES {
  NOT_FOUND = 'notFound', // 0
  UNAUTHORIZED = 'unauthorized', // 1
  FORBIDDEN = 'forbidden' // 2
}

function mostrarMensaje (tipoDeError : ERROR_TYPES){

  if(tipoDeError === ERROR_TYPES.NOT_FOUND){
    console.log('No se encuentra el recurso')
  }else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
    console.log('No tiene permisos para acceder');    
  }else if (tipoDeError=== ERROR_TYPES.FORBIDDEN){
    console.log('No tienes permisos para acceder');

  }
}
mostrarMensaje(ERROR_TYPES.NOT_FOUND);