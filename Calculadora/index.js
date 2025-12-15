
let total = 0;
let actual = "";
let operacion = "";
let operador = "+";

function refrescarPantalla(){
    const pantalla = document.getElementById("pantalla")
    pantalla.textContent = operacion;
}

function agregarNumero(numero){
    actual += numero;
    operacion = operacion +  numero;
    refrescarPantalla();
}

function agregarOperador(op){
    calcularParcial();    
    operador = op;          
    operacion += op;
    actual = "";
    refrescarPantalla();

}
function calcularParcial() {
    let numero = Number(actual);

    if (operador === "+") total += numero;
    if (operador === "-") total -= numero;
    if (operador === "*") total *= numero;
    if (operador === "/") total /= numero;
}
function calcular() {
    calcularParcial();
    operacion = total.toString();  
    actual = operacion;
    total = 0;
    operador = "+";
    refrescarPantalla();
}

function borrar(){
    operacion =  "";
    refrescarPantalla();
}