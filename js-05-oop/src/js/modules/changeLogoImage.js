/**
 * Modifica el titulo principal de la página.
 * @param {string} imageName - Nombre de la imagen 
 */

const changeLogoImage = ( imageName ) => {
    const logo = document.getElementById( "logo" );

    //path base
    const route = "./assets/img/";

    //definimos la ruta de las imágenes, es un objeto con las propiedades cat, dino y guardian
    const imageMap = {
        cat: "cat.jpg",
        dino: "dino.jpg",
        guardian: "guardian-stelar.jpg",
    };

    // Validamos, si dentro del objeto imagemap no existe la propiedad con ese nombre es una imagen invalida
    if ( !imageMap[imageName] ) {
        console.warn(`Imagen "${imageName}" not valid (use "cat", "dino" or "guardian")`);
    }
    else {
        //unimos la ruta base con la propiedad del objeto (nombre de la imagen)
        logo.src = `${route}${imageMap[imageName]}`;
    }
};

export {changeLogoImage};

/* METODO OFICIAL
/* Cambia la imagen inicial por la especificada en la ruta
 * 
 * @param {string} imageRoute Ruta relativa, considerar como inicio la ubicación de este modulo
 
const changeLogo = (imageRoute) => {
    const logoElement = document.getElementById("logo");

    if ( imageRoute && logoElement !== null  ) {
        logoElement.src = /assets/img/${imageRoute};
    } else {
        console.warn( Element with route "${ imageRoute }" not found. );
    }
}

//Exportación nombrada
export {changeLogo}
**/