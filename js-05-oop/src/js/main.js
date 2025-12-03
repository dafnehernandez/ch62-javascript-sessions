
//document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";

//console.log(`Datos del arreglo participants desde main.js:`, participants); // ['Alice', 'Bob', 'Charlie']

import { changePrincipalTitle } from "./modules/changePrincipalTitle.js";
import { changeLogoImage } from "./modules/changeLogoImage.js";

changePrincipalTitle("title");

//para el autocompletado se debe tener el archivo abierto

// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"

changeLogoImage("guardian");
//changeImage("cat")