function sumar(){
    let nUno = parseInt(document.getElementById("nUno").value);
    let nDos = parseInt(document.getElementById("nDos").value);

    let resultado = parseInt(nUno + nDos);

    document.getElementById("result").innerHTML = resultado;
}

function restar(){
    let nUno = parseInt(document.getElementById("nUno").value);
    let nDos = parseInt(document.getElementById("nDos").value);

    let result = parseInt(nUno - nDos);

    document.getElementById("result").innerHTML = result;
}

function multiplicar() {
    let nUno = parseInt(document.getElementById("nUno").value);
    let nDos = parseInt(document.getElementById("nDos").value);

    let result = parseInt(nUno * nDos);

    document.getElementById("result").innerHTML = result;
}

function dividir() {
    let nUno = parseInt(document.getElementById("nUno").value);
    let nDos = parseInt(document.getElementById("nDos").value);

    let result = parseFloat(nUno/nDos);

    document.getElementById("result").innerHTML = result;

}

function borrar(){
    document.getElementById("nUno").value = "";
    document.getElementById("nDos").value = "";
    document.getElementById("result").innerHTML = "";
}
