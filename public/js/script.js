
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
const hatchBack = document.createElement("div");
hatchBack.classList.add("content");
const deportivosContent = document.createElement("div");
deportivosContent.classList.add("content");

function deportivosCreate(deportivo){
    catalogoPrincipal.insertBefore(deportivosContent,botonMas)
    for(i of deportivo){
        const cuadrado4 = document.createElement("div");
        cuadrado4.classList.add(`Cuadrados`);
        cuadrado4.setAttribute('id', i.IDe);
        cuadrado4.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado4.style.backgroundSize = "contain";
        cuadrado4.style.backgroundPosition = "center";
        cuadrado4.style.backgroundRepeat= "no-repeat";
        deportivosContent.appendChild(cuadrado4);
        console.log(i.Imagen)
    }
}
function hatchBackCreate(hatch){
    catalogoPrincipal.insertBefore(hatchBack,header5)
    for(i of hatch){
        const cuadrado3 = document.createElement("div");
        cuadrado3.classList.add(`Cuadrados`);
        cuadrado3.setAttribute('id', i.IDe);
        cuadrado3.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado3.style.backgroundSize = "contain";
        cuadrado3.style.backgroundPosition = "center";
        cuadrado3.style.backgroundRepeat= "no-repeat";
        hatchBack.appendChild(cuadrado3);
        console.log(i.Imagen)
    }
}
function pickUpCreate(picks){
    catalogoPrincipal.insertBefore(picksContent,header4)
    for(i of picks){
        const cuadrado2 = document.createElement("div");
        cuadrado2.classList.add(`Cuadrados`);
        cuadrado2.setAttribute('id', i.IDe);
        cuadrado2.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado2.style.backgroundSize = "contain";
        cuadrado2.style.backgroundPosition = "center";
        cuadrado2.style.backgroundRepeat= "no-repeat";
        picksContent.appendChild(cuadrado2);
        console.log(i.Imagen)
    }
}
function suvCreate(suvs){
    catalogoPrincipal.insertBefore(suvsContent,header3)
    for(i of suvs){
        const cuadrado1 = document.createElement("div");
        cuadrado1.classList.add(`Cuadrados`);
         cuadrado1.setAttribute('id', i.IDe);
        cuadrado1.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado1.style.backgroundSize = "contain";
        cuadrado1.style.backgroundPosition = "center";
        cuadrado1.style.backgroundRepeat= "no-repeat";
        suvsContent.appendChild(cuadrado1);
        console.log(i.Imagen)
    }
}
function sedanCreate(sedans){
    for(i of sedans){
        const cuadrado = document.createElement("div");
        cuadrado.classList.add(`Cuadrados`);
        cuadrado.setAttribute('id', i.IDe);
        cuadrado.style.backgroundImage = `url("${i.Imagen}")`;
        cuadrado.style.backgroundSize = "contain";
        cuadrado.style.backgroundPosition = "center";
        cuadrado.style.backgroundRepeat= "no-repeat";
        contenidioCatalogo.appendChild(cuadrado);
        console.log(i.Imagen)
    }
}
function Carros(id,imagen,tipo,marca,año,modelo,precio,kilometraje,transmision,combustible,intCol,extColor,estado,){
    this.IDe = id;
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
//Objetos para HatchBacks
const hatch1 = new Carros("suzuki2","/images/susukiCelerio.jpg","Hatchback","Suzuki","2018","Celerio","$75000","100000km","Estandar","Gasolina","Azul","Negro","Usado");
const hatch2 = new Carros("suzuki3","/images/suzukiBOO.jpg","Hatchback","Suzuki","2019","BOO","$80000","80000km","Estandar","Gasolina","Rojo","Negro","Seminuevo");
const hatch3 = new Carros("hyundai1","/images/hyunday.jpg","Hatchback","Hyundai","2020","Eon","$100000","90000km","Estandar","Gasolina","Azul Marino","Negro","Usado");
const hatch4 = new Carros("toyota2","/images/yarisHatchback.jpg","Hatchback","Toyota","2019","Yaris Hatchback","$700000","70000km","Estandar","Gasolina","Blanco","Negro","Usado");
const hatch5 = new Carros("suzuki4","/images/suzukiswift.jpg","Hatchback","Suzuki","2017","Swift","$500000","70000km","Estandar","Gasolina","Rojo","Negro","Usado");
//Objetos para Deportivos
const deportivo1 = new Carros("porsche1","/images/porche.jpg","Deportivo","Porsche","2022","Porsche 911","$700000","100000km","Automatico","Electrico","Blanco","Negro","Seminuevo");
const deportivo2 = new Carros("mclaren1","/images/mclaren.jpg","Deportivo","McLaren","2014","P1","$600000","80000km","Automatico","Gasolina","Blanco","Negro","Seminuevo");
const deportivo3 = new Carros("lamborgini1","/images/lamborgini huracan.jpg","Deportivo","Lamborghini","2015","Huracan","$1000000","90000km","Automatico","Gasolina","Blanco","Negro","Usado");
const deportivo4 = new Carros("chevrolet2","/images/camaro.png","Deportivo","Chevrolet","2019","Camaro","$700000","70000km","Estandar","Gasolina","Rojo","Negro","Usado");
const deportivo5 = new Carros("aston1","/images/aston.webp","Deportivo","Aston Martin","2019","V8","$5000000","70000km","Estandar","Electrico","Blanco","Negro","Seminuevo");

const arrSedan = [Sedan1,Sedan2,Sedan3,Sedan4,Sedan5];
const arrSUV = [Suv1,Suv2,Suv3,Suv4,Suv5];
const arrPickUp = [Pick1,Pick2,Pick3,Pick4,Pick5];
const arrHatch = [hatch1,hatch2,hatch3,hatch4,hatch5];
const arrDeportivo = [deportivo1,deportivo2,deportivo3,deportivo4,deportivo5];

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
        hatchBackCreate(arrHatch);
        deportivosCreate(arrDeportivo);
        botonMas.textContent = "Contraer";
        return checkStatus = 0;
    }else if(checkStatus == 0){
        suvsContent.innerHTML = "";
        picksContent.innerHTML="";
        hatchBack.innerHTML="";
        deportivosContent.innerHTML="";
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

catalogoPrincipal.addEventListener("click",(e) => {
    let target = e.target;
    switch(target.id){
        case "hon1":
            localStorage.setItem("carro",JSON.stringify(Sedan1));
            localStorage.setItem("desc",JSON.stringify("Honda Civic 2022, seminuevo, elegante diseño y eficiente consumo de gasolina."));
            window.location.href = "./archivos_carros.html";
            break;
        case "bmw1":
            localStorage.setItem("carro",JSON.stringify(Sedan2));
            localStorage.setItem("desc",JSON.stringify("BMW Serie 1 2020, lujo compacto con motor híbrido y gran desempeño."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "toyota1":
            localStorage.setItem("carro",JSON.stringify(Sedan3));
            localStorage.setItem("desc",JSON.stringify("Toyota Corolla 2024, confiabilidad japonesa en estado usado y transmisión estándar."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "volkswagen1":
            localStorage.setItem("carro",JSON.stringify(Sedan4));
            localStorage.setItem("desc",JSON.stringify("Volkswagen Virtus 2020, sedán eléctrico, ideal para ciudad y viajes."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "mazda1":
            localStorage.setItem("carro",JSON.stringify(Sedan5));
            localStorage.setItem("desc",JSON.stringify("Mazda 3 2018, estilo deportivo, motor estándar y excelente manejo urbano."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "volkswagen2":
            localStorage.setItem("carro",JSON.stringify(Suv1));
            localStorage.setItem("desc",JSON.stringify("Volkswagen Taigun 2020, SUV espaciosa, usada, cómoda y eficiente."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "kia1":
            localStorage.setItem("carro",JSON.stringify(Suv2));
            localStorage.setItem("desc",JSON.stringify("Kia Seltos 2024, diseño moderno, seminueva, ideal para familias pequeñas."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "suzuki1":
            localStorage.setItem("carro",JSON.stringify(Suv3));
            localStorage.setItem("desc",JSON.stringify("Suzuki S-Cross 2023, SUV negra, práctica y en excelente estado."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "volvo1":
            localStorage.setItem("carro",JSON.stringify(Suv4));
            localStorage.setItem("desc",JSON.stringify("Volvo Changan 2022, SUV seminueva con enfoque en seguridad y confort."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "nissan1":
            localStorage.setItem("carro",JSON.stringify(Suv5));
            localStorage.setItem("desc",JSON.stringify("Nissan X-Trail 2024, SUV robusta, buena para caminos largos y urbanos."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "gwm1":
            localStorage.setItem("carro",JSON.stringify(Pick1));
            localStorage.setItem("desc",JSON.stringify("GWM Poer 2024, pick up seminueva, lista para trabajo rudo y aventura."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "ford1":
            localStorage.setItem("carro",JSON.stringify(Pick2));
            localStorage.setItem("desc",JSON.stringify("Ford F-150 2022, pick up potente, confiable, lista para todo terreno."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "nissan2":
            localStorage.setItem("carro",JSON.stringify(Pick3));
            localStorage.setItem("desc",JSON.stringify("Nissan NP300 2025, camioneta estándar, gran capacidad de carga y durabilidad."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "gmc1":
            localStorage.setItem("carro",JSON.stringify(Pick4));
            localStorage.setItem("desc",JSON.stringify("GMC Sierra 2024, pick up de lujo, gran motor y diseño sofisticado."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "chevrolet1":
            localStorage.setItem("carro",JSON.stringify(Pick5));
            localStorage.setItem("desc",JSON.stringify("Chevrolet Montana RS 2024, pick up deportiva, moderna y ágil."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "suzuki2":
            localStorage.setItem("carro",JSON.stringify(hatch1));
            localStorage.setItem("desc",JSON.stringify("Suzuki Celerio 2018, hatchback compacto, económico y fácil de manejar."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "suzuki3":
            localStorage.setItem("carro",JSON.stringify(hatch2));
            localStorage.setItem("desc",JSON.stringify("Suzuki BOO 2019, opción seminueva, diseño juvenil y muy rendidora."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "hiundai1":
            localStorage.setItem("carro",JSON.stringify(hatch3));
            localStorage.setItem("desc",JSON.stringify("Hyundai Eon 2020, hatchback pequeño, ideal para ciudad y primer auto."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "toyota2":
            localStorage.setItem("carro",JSON.stringify(hatch4));
            localStorage.setItem("desc",JSON.stringify("Toyota Yaris Hatchback 2019, confiable, espacioso y muy funcional."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "suzuki4":
            localStorage.setItem("carro",JSON.stringify(hatch5));
            localStorage.setItem("desc",JSON.stringify("Suzuki Swift 2017, hatchback rojo, estilo deportivo y rendimiento sólido."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "porsche1":
            localStorage.setItem("carro",JSON.stringify(deportivo1));
            localStorage.setItem("desc",JSON.stringify("BMW Serie 1 2020, lujo compacto con motor híbrido y gran desempeño."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "mclaren1":
            localStorage.setItem("carro",JSON.stringify(deportivo2));
            localStorage.setItem("desc",JSON.stringify("BMW Serie 1 2020, lujo compacto con motor híbrido y gran desempeño."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "lamborgini1":
            localStorage.setItem("carro",JSON.stringify(deportivo3));
            localStorage.setItem("desc",JSON.stringify("BMW Serie 1 2020, lujo compacto con motor híbrido y gran desempeño."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "chevrolet2":
            localStorage.setItem("carro",JSON.stringify(deportivo4));
            localStorage.setItem("desc",JSON.stringify("BMW Serie 1 2020, lujo compacto con motor híbrido y gran desempeño."));
            window.location.href = "./archivos_carros.html"; 
            break;
        case "aston1":
            localStorage.setItem("carro",JSON.stringify(deportivo5));
            localStorage.setItem("desc",JSON.stringify("BMW Serie 1 2020, lujo compacto con motor híbrido y gran desempeño."));
            window.location.href = "./archivos_carros.html"; 
            break;
    }
});