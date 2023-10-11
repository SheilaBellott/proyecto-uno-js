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

alert(
  "A continuacion le proporcionamos los celulares en stock de las marcas : iphone , samsung y xiaomi"
);
let modeloElegido = Number(
  prompt(
    "Porfavor, a continuacion seleccione el NUMERO del celular que desea:         1-iphone 15 pro max               2-samsung s23 ultra         3-xiaomi poco x4 pro        4-samsung a54         5-iphone 13 pro            6-xiaomi redmi 10"
  )
);

while (modeloElegido < 1 || modeloElegido > 6 || isNaN(modeloElegido)) {
  modeloElegido = Number(
    prompt(
      "Porfavor, a continuacion seleccione el Numero del celular que desea:         1-iphone 15 pro max               2-samsung s23 ultra         3-xiaomi poco x4pro        4-samsung a54      5-iphone 13 pro            6-xiaomi redmi 10"
    )
  );
}
switch (modeloElegido) {
  case 1:
    alert(`Usted a elegido el iphone 15 pro max $450000 `);
    break;

  case 2:
    alert(`Usted a elegido el samsung s23 ultra $450000`);
    break;

  case 3:
    alert(`Usted a elegido el xiaomi poco x4pro $450000`);
    break;
  case 4:
    alert(`Usted a elegido el samsung a54 $450000`);
    break;
  case 5:
    alert(`Usted a elegido el iphone 13 pro $450000`);
    break;
  case 6:
    alert(`Usted a elegido el xiaomi redmi 10 $450000`);
    break;
}

let metodoPago = Number(
  prompt(
    "Seleccione el numero correspondiente al metodo de pago que quiera efectuar: 1-Tarjeta de Credito   2-Efectivo   3-Dolares"
  )
);

while (metodoPago < 1 || metodoPago > 3 || isNaN(metodoPago)) {
  metodoPago = Number(
    prompt(
      "Seleccione el numero correspondiente al metodo de pago que quiera efectuar: 1-Tarjeta de Credito   2-Efectivo   3-Dolares"
    )
  );
}

switch (metodoPago) {
  case 1:
    alert("Haz seleccionado Tarjeta de Credito");

    let cuotas = Number(prompt("Seleccione cantidad de cuotas:3, 6, 12"));

    while ((cuotas !== 3 && cuotas !== 6 && cuotas !== 12) || isNaN(cuotas)) {
      cuotas = Number(prompt("Seleccione cantidad de cuotas:3, 6, 12"));
    }
    switch (cuotas) {
      case 3:
        recargo(0.15, 0.25, 0.35);
        alert(` Monto final es de $${resultadoRecargo3}`);
        break;
      case 6:
        recargo(0.15, 0.25, 0.35);
        alert(` Monto final es de $${resultadoRecargo6}`);
        break;
      case 12:
        recargo(0.15, 0.25, 0.35);
        alert(` Monto final es de $${resultadoRecargo12}`);
        break;
      default:
        alert(`Cantidad de cuotas no valida`);
        break;
    }
    break;
  case 2:
    alert(`Haz seleccionado Efectivo, por lo que tienes un 5% de descuento!`);
    alert(`Monto final es de $${450000 - 450000 * 0.05}`);
    break;
  case 3:
    alert(`Haz seleccionado en Dolares`);
    alert(`Monto final es de $${450 + 450 / 9.0}USD`);
    break;
}

function recargo(recargo3, recargo6, recargo12) {
  resultadoRecargo3 = recargo3 * 450000 + 450000;
  resultadoRecargo6 = recargo6 * 450000 + 450000;
  resultadoRecargo12 = recargo12 * 450000 + 450000;
}
