alert(
  "Bienvenido a Infinity Cellphone, Tenemos los mejores precios en celulares y tecnologia."
);

let usuario = prompt("Ingrese el Usuario");
let contraseña = prompt("Ingrese la contraseña");
while (usuario == "" || contraseña == "") {
  alert("Usuario y Contraseña son necesarios");
  usuario = prompt("Ingrese el usuario");
  contraseña = prompt("Ingrese la contraseña");
}
alert(`${usuario} Bienvenido a Infinity Cellphone`);

alert("Somos importadores directos de las marcas: iphone , samsung y xiaomi");

class Producto {
  constructor(nombre, memoria, precio) {
    this.nombre = nombre;
    this.memoria = memoria;
    this.precio = precio;
  }
}

const productos = [];

productos.push(new Producto("iphone 15pro", "128gb", 900000));
productos.push(new Producto("samsung s23", "256gb", 650000));
productos.push(new Producto("xiaomi poco x4 pro", "64gb", 350000));

const precios = {
  dolar: 1000,
  descuento: 0.05,
};

function buscarProducto(nombre) {
  return productos.find((item) => item.nombre.includes(nombre));
}

function mostrarInfoProducto(producto) {
  if (producto) {
    alert(`
        nombre: ${producto.nombre}
        memoria: ${producto.memoria}
        precio: $${producto.precio}
        `);
  } else {
    alert("Producto no encontrado");
  }
}

function procesarPago(producto, metodoPago, cuotas) {
  if (producto) {
    switch (metodoPago) {
      case 1:
        let recargo;
        switch (cuotas) {
          case 3:
            recargo = 0.15;
            break;
          case 6:
            recargo = 0.25;
            break;
          case 12:
            recargo = 0.35;
            break;
        }

        const montoFinal = producto.precio + producto.precio * recargo;
        alert(`Monto final es de $${montoFinal}`);
        alert("!Gracias por su compra!");
        break;

      case 2:
        alert(
          `Haz seleccionado Efectivo, por lo que tienes un 5% de descuento!`
        );
        const montoDescuento =
          producto.precio - producto.precio * precios.descuento;
        alert(`Monto final es de $${montoDescuento}`);
        alert("!Gracias por su compra!");
        break;

      case 3:
        const montoDolares = producto.precio / precios.dolar;
        alert(`Monto final es de $${montoDolares} USD`);
        alert("!Gracias por su compra!");
        break;

      default:
        alert("Método de pago no válido.");
        break;
    }
  } else {
    alert("Producto no encontrado");
  }
}

let nombre;
let productoSeleccionado;

while (true) {
  while (true) {
    nombre = prompt("Ingrese el modelo del celular");

    if (nombre.trim() === "") {
      alert("Ingrese un modelo de celular. Inténtelo nuevamente.");
    } else {
      break;
    }
  }

  productoSeleccionado = buscarProducto(nombre);

  if (productoSeleccionado) {
    mostrarInfoProducto(productoSeleccionado);
    let metodoPago;

    while (true) {
      metodoPago = Number(
        prompt(
          "Seleccione el método de pago: 1-Tarjeta de Crédito   2-Efectivo   3-Dólares"
        )
      );

      if (metodoPago === 1 || metodoPago === 2 || metodoPago === 3) {
        break;
      } else {
        alert("Método de pago no válido. Inténtelo nuevamente.");
      }
    }

    if (metodoPago === 1) {
      let cuotas;

      while (true) {
        cuotas = Number(prompt("Seleccione cantidad de cuotas: 3, 6, 12"));

        if (cuotas === 3 || cuotas === 6 || cuotas === 12) {
          break;
        } else {
          alert("Cantidad de cuotas no válida. Inténtelo nuevamente.");
        }
      }

      procesarPago(productoSeleccionado, metodoPago, cuotas);
    } else {
      procesarPago(productoSeleccionado, metodoPago);
    }

    break;
  } else {
    alert("Producto no encontrado. Inténtelo nuevamente.");
  }
}
