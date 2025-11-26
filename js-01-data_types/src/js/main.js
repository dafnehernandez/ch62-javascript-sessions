console.log("Sessions JS01-js");

/* ================================================================
   1. VARIABLES Y NOMENCLATURA (5 min)
   ================================================================
   Reglas modernas:
   - 'const': Úsalo por defecto (valores constantes).
   - 'let': Úsalo solo si el valor va a cambiar (reasignación).
   - 'var': EVITAR (es obsoleto en desarrollo moderno).
   
   Nomenclatura (CamelCase):
   - Correcto: userAge, firstName, isActive
   - Incorrecto: user_age, FirstName, is_active
*/

let userAge = 20;
let genre = "Masculine";
let lastName = "Fernandez";

// ---Template Literales (Backticks ``)`---
// Permiten interpolacion ${} y saltos de linea. Mas limpio que concatenar con '+'.
// ejemeplo: `Hola ch62, soy ${userName}`

const firstName = "Daniel";
let currentAge = 24;
const currentNationality = "Mexican";
// De las variables anteriores muestra en console el sig. mensaje:
// "My name is Daniel, I am 24 years old and I am Mexican."
console.log(`My name is ${firstName}, I am ${currentAge} years old and I am ${currentNationality}`);

/*
===============================================
3. DATOS PRIMITIVOS: NUMBER Y BIGINT
==============================================
Javascript tiene un solo tipo para enteros y decimales: "number".
Number: Tipo de dato numérico de 64 bits para representar valores enteros, punto flotante, +Infinity, -Infinity, NaN
*/
const gravityEarth = 9.81; //Acelercion de la tierra
console.log( typeof gravityEarth); //tipo number

/*
Tipos de datos number
- números positivos: 100, 1, 0.258
- números negativos: -1, -50.35
- valores que no pueden ser representados numéricamente: NaN
- números infinitos: +Infinity, -Infinity
*/
console.log( typeof 3.141592); //number float aqui no existe
console.log( typeof ""); //string
console.log( typeof " "); //string
console.log( typeof 3* "pitufo trabajador"); //NaN en python imprimiria 3 veces el mensaje
console.log( typeof (3 * "pitufo trabajador") ); //number
console.log( typeof (NaN) ); //number
console.log( typeof +Infinity); //number
console.log( typeof ( 3 + "Viernes tematico" ) ); //string
console.log( typeof ("3Viernes temático") ); //string
console.log( 4 / 0); //infinity es el resultado
console.log( typeof(4 / 0) ); //number
console.log( "4" * "2"); //8
console.log( typeof ("4" * "2") ); //number
console.log( typeof "4" * "2" ); //NaN