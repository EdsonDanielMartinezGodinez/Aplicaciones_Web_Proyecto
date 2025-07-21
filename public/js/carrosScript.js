const datosP = document.querySelector(".datos");
const imagenCarro= document.querySelector(".img");
const modelo = document.getElementById("model");
const marca = document.getElementById("marca");
const tipo = document.getElementById("tipo");
const año = document.getElementById("año");
const estado = document.getElementById("Estado");
const color = document.getElementById("color");
const trans = document.getElementById("trans");
const com = document.getElementById("combustible");
const kilometraje = document.getElementById("km");
const valor = document.getElementById("precio");
const descCarro = document.querySelector(".descripcion");  

const carro = JSON.parse(localStorage.getItem("carro"));
const descText = localStorage.getItem("desc");

const parrafoDesc = document.createElement("p");

function crearFormato(arr,text1){
    imagenCarro.style.backgroundImage = `url("${arr.Imagen}")`;
    imagenCarro.style.backgroundRepeat = "no-repeat";
    imagenCarro.style.backgroundSize = "contain";
    imagenCarro.style.backgroundPosition = "center";
    modelo.textContent = `Modelo: ${arr.Modelo}`;
    marca.textContent = `Marca: ${arr.Marca}`;
    tipo.textContent = `Tipo: ${arr.Tipo}`;
    año.textContent = `Año: ${arr.Año}`;
    estado.textContent = `Estado: ${arr.Estado}`;
    color.textContent = `Color Exterior: ${arr.Color.Interior}  Color Interior: ${arr.Color.Exterior}`;
    trans.textContent = `Transmision: ${arr.Transmision}`;
    com.textContent = `Combustible: ${arr.Combustible}`;
    kilometraje.textContent = `Km: ${arr.Kilometraje}`;
    valor.textContent = `Precio: ${arr.Precio}`;
    parrafoDesc.textContent = `${text1}`;
    descCarro.appendChild(parrafoDesc);
}

crearFormato(carro,descText);