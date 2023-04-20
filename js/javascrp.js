let nombre = prompt("Hola! soy tu asistente de ventas! de Trivium. podrias decirme tu nombre?")

alert( nombre + " en trivium tenemos 2 tipos de productos cada uno con sus descuentos")

// Definimos la clase "Producto"
class Items {
  constructor(nombreProducto, costo, descuento) {
    this.nombreProducto = nombreProducto;
    this.costo = costo;
    this.descuento = descuento
  }
}

const itemAxe = new Items("axe", 20, 0.85);
const itemDove = new Items("dove", 25, 0.80);

let total = 0
let valorfinal = 0
let cantidad = 0


let producto2 = "";
while (producto2 !== "axe" && producto2 !== "dove" ) {
  let producto = prompt("Los productos disponibles son Axe y Dove. ¿Cuál quisieras cotizar? (Para salir escribe 'esc')")
  producto2 = producto.toLowerCase();

  if (producto2 === "axe") {
    cantidad = prompt("para los productos de " + producto + " el valor base es de 20 pesos la unidad y tenemos descuentos del 15% a partir de 100 unidades, cuantas unidades deseas cotizar " + nombre +"?" )
     
    function calculadordeprecio1() {        
      if (cantidad > 100) {
        total = cantidad * itemAxe.costo * itemAxe.descuento
        return total
      }
        total = cantidad * itemAxe.costo 
        return total  
    }     

    calculadordeprecio1()
    alert(nombre + " el costo final de tu compra sera " + total + " pesos! visualiza la consola para mas info")
    console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ itemDove.costo +" pesos y el valor final sera de " + total)

  } else if (producto2 == "dove") {
    cantidad =  prompt( "para los productos de " + producto + " el valor base es de 25 pesos la unidad y tenemos descuentos del 20% a partir de 200 unidades, cuantas unidades deseas cotizar " + nombre +"?" )
 
    function calculadordeprecio2() {
        if (cantidad > 199) {
            total= cantidad * itemDove.costo * itemDove.descuento
            return total
         }
         total = cantidad * itemDove.costo 
            return total
    }  
    calculadordeprecio2()
    alert(nombre + " el costo final de tu compra sera " + total + " pesos! visualiza la consola para mas info")
    console.log("la cantidad seleccionada fue " + cantidad+" unidades, con un costo unidario de "+ itemAxe.costo +" pesos y el valor final sera de " + total)
    

} else if (producto2.toLowerCase() == "esc") {
    break;
  };
}