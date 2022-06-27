//
/*for(let i = 0; i<3; i++){
    let numero = Number(prompt("Ingrese un numero"));
    console.log(numero * 2);
}

//

for(let i = 0; i<4; i++){
    let nombre_usuario = prompt("Ingrese su nombre")
    let edad = Number(prompt("Ingrese su edad"));
    if(edad>=18){
        console.log("Bienvenido: ", nombre_usuario, edad );
    }
    else if(edad>=17){
        console.log("Es menor, no puede ingresar")
        break
    }
}*/

//

let pregunta = prompt(`Seleccione lo que desea comprar:
                        REMERAS
                        PANTALONES
                        MEDIAS
                        ZAPATILLAS
                        SALIR`)
while(pregunta!="SALIR"){
    if(pregunta == "REMERAS"){
        alert("Seleccionaste la opcion Remeras");
        break
    }
    else if(pregunta == "PANTALONES"){
        alert("Seleccionaste la opcion Pantalones");
        break
    }
    else if(pregunta == "MEDIAS"){
        alert("Seleccionaste la opcion Medias");
        break
    }
    else if(pregunta == "ZAPATILLAS"){
        alert("Seleccionaste la opcion Zapatillas");
        break
    }
}
