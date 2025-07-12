const catalogoPrincipal = document.querySelector(".catalogo");
const contenidioCatalogo = document.querySelector(".sedans");
const botonMas = document.getElementById("buton2");

const header5 = document.createElement("h2");
const header4 = document.createElement("h2");
const header3 = document.createElement("h2");
const header2 = document.createElement("h2");
const suvsContent = document.createElement("div");
suvsContent.classList.add("content")
const picksContent = document.createElement("div");
picksContent.classList.add("content");

function pickUpCreate(picks){
    catalogoPrincipal.insertBefore(picksContent,header4)
    for(i of picks){
        const cuadrado2 = document.createElement("div");
        cuadrado2.classList.add(`Cuadrados`);
        cuadrado2.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado2.style.backgroundSize = "contain";
        cuadrado2.style.backgroundPosition = "center";
        cuadrado2.style.backgroundRepeat= "no-repeat";
        picksContent.appendChild(cuadrado2);
        console.log(i.imagen)
    }
}
function suvCreate(suvs){
    catalogoPrincipal.insertBefore(suvsContent,header3)
    for(i of suvs){
        const cuadrado1 = document.createElement("div");
        cuadrado1.classList.add(`Cuadrados`);
        cuadrado1.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado1.style.backgroundSize = "contain";
        cuadrado1.style.backgroundPosition = "center";
        cuadrado1.style.backgroundRepeat= "no-repeat";
        suvsContent.appendChild(cuadrado1);
        console.log(i.imagen)
    }
}
function sedanCreate(sedans){
    for(i of sedans){
        const cuadrado = document.createElement("div");
        cuadrado.classList.add(`Cuadrados`);
        cuadrado.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado.style.backgroundSize = "contain";
        cuadrado.style.backgroundPosition = "center";
        cuadrado.style.backgroundRepeat= "no-repeat";
        contenidioCatalogo.appendChild(cuadrado);
        console.log(i.imagen)
    }
}
function Carros(id,imagen,tipo,marca,año,modelo,precio,kilometraje,transmision,combustible,intCol,extColor,estado,){
    this.ID = id;
    this.Imagen = imagen;
    this.Tipo = tipo;
    this.Marca = marca;
    this.Año = año;
    this.Modelo = modelo;
    this.Precio = precio;
    this.Kilometraje = kilometraje;
    this.Transmision = transmision;
    this.Combustible = combustible;
    this.Color = {
        Interior: intCol,
        Exterior: extColor,
    }
    this.Estado = estado;  
}

//Objetos para Sedan
const Sedan1 = new Carros("hon1","/images/trim-Touring.jpg","Sedan","Honda","2022","Honda Civic","$300000","50000km","Automatico","Gasolina","Rojo","Negro","Seminuevo");
const Sedan2 = new Carros("bmw1","/images/bmw.jpg","Sedan","BMW","2020","Serie 1","$400000","80000km","Automatico","Hibrido","Azul","Negro","Seminuevo");
const Sedan3 = new Carros("toyota1","/images/corolla.jpg","Sedan","Toyota","2024","Corolla","$289000","90000km","Estandar","Gasolina","Blanco","Negro","Usado");
const Sedan4 = new Carros("volkswagen1","/images/virtus.jpeg","Sedan","Volkswagen","2020","Virtus","$170000","100000km","Automatico","Electrico","Azul","Negro","Usado");
const Sedan5 = new Carros("mazda1","/images/mazda3.jpg","Sedan","Mazda","2018","Mazda 3","$260000","89000km","Estandar","Gasolina","Azul Marino","Negro","Usado");
//Objetos para Suv
const Suv1 = new Carros("volkswagen2","/images/taigun.png","SUV","Volkswagen","2020","Taigun","$250000","100000km","Automatico","Gasolina","Azul","Negro","Usado");
const Suv2 = new Carros("kia1","/images/kia.png","SUV","Kia","2024","Seltos","$400000","80000km","Estandar","Gasolina","Blanco","Negro","Seminuevo");
const Suv3 = new Carros("suzuki1","/images/suzuki.jpg","SUV","Suzuki","2023","S-Cross","$289000","90000km","Estandar","Gasolina","Negro Mate","Negro","Usado");
const Suv4 = new Carros("volvo1","/images/volvo.jpg","SUV","Volvo","2022","Changan","$170000","100000km","Estandar","Gasolina","Gris","Negro","Seminuevo");
const Suv5 = new Carros("nissan1","/images/nissan.png","SUV","Nissan","2024","X-Trial","$500000","70000km","Estandar","Gasolina","Beige","Negro","Usado");
//Objetos para Pick Ups
const Pick1 = new Carros("gwm1","/images/GWM.avif","Pick Up","GWM","2024","Poer","$300000","70000km","Estandar","Gasolina","Gris","Negro","Seminuevo");
const Pick2 = new Carros("ford1","/images/ford.jpg","Pick Up","Ford","2022","F-150","$400000","80000km","Estandar","Gasolina","Negro","Negro","Seminuevo");
const Pick3 = new Carros("nissan2","/images/nissanPickup.webp","Pick Up","Nissan","2025","NP300","$100000","90000km","Estandar","Gasolina","Blanco","Negro","Seminuevo");
const Pick4 = new Carros("gmc1","/images/GMC.avif","Pick Up","GMC","2024","Sierra","$700000","70000km","Estandar","Gasolina","Negro","Negro","Usado");
const Pick5 = new Carros("chevrolet1","/images/chevrolet.avif","Pick Up","Chevrolet","2024","Montana RS","$500000","70000km","Estandar","Gasolina","Rojo","Negro","Usado");

const arrSedan = [Sedan1,Sedan2,Sedan3,Sedan4,Sedan5];
const arrSUV = [Suv1,Suv2,Suv3,Suv4,Suv5];
const arrPickUp = [Pick1,Pick2,Pick3,Pick4,Pick5];

let checkStatus = 1;

sedanCreate(arrSedan);
botonMas.addEventListener("click",() => {
    if( checkStatus == 1){
        header5.textContent = "Deportivo";
        catalogoPrincipal.insertBefore(header5,botonMas);
        header4.textContent = "HatchBack";
        catalogoPrincipal.insertBefore(header4,header5);
        header3.textContent = "Pick Up";
        catalogoPrincipal.insertBefore(header3,header4);
        header2.textContent = "SUV";
        catalogoPrincipal.insertBefore(header2,header3);

        suvCreate(arrSUV);
        pickUpCreate(arrPickUp);
        botonMas.textContent = "Contraer";
        return checkStatus = 0;
    }else if(checkStatus == 0){
        suvsContent.innerHTML = "";
        picksContent.innerHTML="";
        catalogoPrincipal.removeChild(header2);
        catalogoPrincipal.removeChild(suvsContent);
        catalogoPrincipal.removeChild(header3);
        catalogoPrincipal.removeChild(picksContent);
        catalogoPrincipal.removeChild(header4);
        catalogoPrincipal.removeChild(header5);
        botonMas.textContent = "Mas";
        return checkStatus = 1;
    }
});
window.addEventListener("scroll",() => {
    const headerAction = document.querySelector(".head");
    headerAction.classList.toggle("abajo",window.scrollY > 0);
});
