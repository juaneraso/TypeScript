
// interface Heroe{
//    id:string,
//    name: string,
//    age: number
// }

interface Producto{
   id: number,
   nombre : string,
   precio : number,
   quantity: number
}

interface Zapatilla extends Producto{
   talla : number 

}

interface CarritoDeCompras {
  totalPrice: number,
  productos : Zapatilla[]
}

interface CarritoOps{
  add:(product:Zapatilla) => void,
  remove:(id: number) => void,
  clear:()=> void,
}

const carrito : CarritoDeCompras = {

   totalPrice:100,
   productos :[{
      id:1,
      nombre:"Producto1",
      precio:100,
      quantity:1,
      talla:20
   }
   ]

}

const carritoOps: CarritoOps = {
    add: (product: Zapatilla) => {
      // Lógica para agregar un producto al carrito
        carrito.productos.push(product);

      console.log(`Agregando ${product.nombre} al carrito`);
    },
    remove: (id: number) => {
      // Lógica para eliminar un producto del carrito por ID
      console.log(`Eliminando producto con ID ${id} del carrito`);
    },
    clear: () => {
      // Lógica para limpiar el carrito
      console.log('Limpiando el carrito');
    },
  };

  const newProduct: Zapatilla= {
      id:3,
      nombre: 'Producto3',
      precio: 150,
      quantity:2,
      talla:5
  };
  carritoOps.add(newProduct);

  console.log(carrito);