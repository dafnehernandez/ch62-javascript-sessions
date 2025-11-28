/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".
 Imprimir el valor del retorno por consola.
*/

let temperature = (gradesOnCelsius) => {

    if (gradesOnCelsius > 25){
        return `Hace calor`;
    }
    else {
       return `Hace frío`;
    }
};

console.log(temperature(Number(prompt("Ingresa la temperatura en °C: "))));

let isFeliz = (answer) => {
    if (answer == "si"){ 
        booleanAnswer = true
    }
    else {
        booleanAnswer = false;
    }

    if (booleanAnswer == true){
        //dino
        //return imagen.src = "public/images/dino.jpg";
        return `felih`;
    }
    else {
        //dinoemo
        //return imagen.src = "public/images/dino-emo.jpg"
        return `tite`;
    }
};

console.log(isFeliz(prompt("Ingresa 'si' si la persona esta feliz o 'no' si la persona no lo está: ")));