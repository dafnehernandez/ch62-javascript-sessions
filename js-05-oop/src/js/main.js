//document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";

//console.log(`Datos del arreglo participants desde main.js:`, participants); // ['Alice', 'Bob', 'Charlie']

// importanción nombrada
import { User } from "../models/User.js"
import { changePrincipalTitle } from "./modules/changePrincipalTitle.js";
import { changeLogoImage } from "./modules/changeLogoImage.js";
import { literalUser } from "./modules/literalObject.js";

changePrincipalTitle("title");

//para el autocompletado se debe tener el archivo abierto

// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"

changeLogoImage("guardian");
//changeImage("cat")

console.log( literalUser.getFullName() );
console.log( literalUser );
console.log ( literalUser.stringify() );

const fatima = new User("Fatima", "Orozco", 25, "fatima@gmail.com");
const canito = new User("Alejandro", "Cano", 28, "canrued2010@gmail.com");
const sergio = new User("Sergio", "Soriano", 28, "sgsoriano@gmail.com");
console.log (canito.greet() );
console.log (fatima.greet() );
console.log (sergio.greet() );
