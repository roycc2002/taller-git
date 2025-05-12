// Clase Producto
class Producto {
    nombre: string;
    precio: number;
    stock: number;
  
    constructor(nombre: string, precio: number, stock: number) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
  
    vender(cantidad: number): void {
      if (cantidad <= this.stock) {
        this.stock -= cantidad;
        console.log(Venta realizada: ${cantidad} unidades de ${this.nombre});
      } else {
        console.log(No hay suficiente stock de ${this.nombre});
      }
    }
  
    mostrarInfo(): void {
      console.log(Producto: ${this.nombre});
      console.log(Precio: $${this.precio});
      console.log(Stock disponible: ${this.stock});
    }
  }
  
  // Crear dos productos
  const producto1 = new Producto("Laptop", 1500, 10);
  const producto2 = new Producto("Mouse", 25, 50);
  
  // Mostrar información inicial
  producto1.mostrarInfo();
  producto2.mostrarInfo();
  
  // Simular ventas
  producto1.vender(2);  // Vender 2 laptops
  producto2.vender(10); // Vender 10 mouses
  
  // Mostrar información actualizada
  console.log("\nDespués de la venta:");
  producto1.mostrarInfo();
  producto2.mostrarInfo();