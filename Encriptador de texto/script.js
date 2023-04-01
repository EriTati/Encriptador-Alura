
//Llaves de encriptacion
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const areatexto = document.querySelector(".areatexto");
const areaencriptado = document.querySelector(".areaencriptado");

const botonencriptar = document.querySelector(".botonencriptar");
const botondesencriptar = document.querySelector(".botondesencriptar");
const botoncopiar = document.querySelector(".botoncopiar");

const imgbuscando = document.getElementById("imgbuscando");
const msgnohaytexto = document.getElementById("msgnohaytexto");

function analizarmensaje(){
  var mensaje1 = areatexto.value;
  var mensaje2 = areaencriptado.value;
  var caracteres = "ºª!¡@#·~$%&/()=¿?^[]`+{}¨ç;,:._-1234567890abcdefghijklmnñopqrstuvwxyz \\\'\v\t\b\´\n\"";
  var mensajeerroneo1= "";
  var mensajeerroneo2= "";
  var validador = true;

  for(var caracter of mensaje1){
    if(!caracteres.includes(caracter)){
      mensajeerroneo1 = "ERROR"
    }
  }

  for(var caracter of mensaje2){
    if(!caracteres.includes(caracter)){
      mensajeerroneo2 = "ERROR"
    }
  }

  if (mensajeerroneo1 == "ERROR" || mensajeerroneo2 == "ERROR"){
    validador = false;
    alert("Ingrese carácteres válidos por favor");
  }

  return validador;
}

function encriptar(){
  if(analizarmensaje() == false) return;

  var mensaje = areatexto.value;
  var mensajeencriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

  areaencriptado.style.display = "block";
  botoncopiar.style.display = "block";

  imgbuscando.hidden = true;  
  msgnohaytexto.hidden = true;  

  areaencriptado.value = mensajeencriptado;
}

function desencriptar(){
  if(analizarmensaje() == false) return;

  var mensajeencriptado = areatexto.value;
  var mensajedesencriptado = mensajeencriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

  areaencriptado.style.display = "block";
  botoncopiar.style.display = "block";

  imgbuscando.hidden = true;  
  msgnohaytexto.hidden = true;  
  
  areaencriptado.value = mensajedesencriptado;
}

function copiar(){
  var mensajeencriptado = areaencriptado.value;
  
  navigator.clipboard.writeText(mensajeencriptado);
}

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;
botoncopiar.onclick = copiar;

