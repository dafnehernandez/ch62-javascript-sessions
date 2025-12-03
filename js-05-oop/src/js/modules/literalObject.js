/* Ejemplo de Objeto Literal
  - Útil para configuraciones únicas .
  - No escalable para crear múltiples entidades.
  - Fácil de crear y usar.
  - Evitar tener decenas de variables sueltas.

Symbol:
Un Symbol es un tipo de dato primitivo introducido en ES6. 
Su característica principal es que es único e inmutable.

Se utiliza principalmente para crear propiedades "ocultas" o identificadores 
únicos en objetos que no colisionen con otras claves (keys), 
incluso si tienen el mismo nombre descriptivo.

*/

const literalUser = {
    name: "Alejandro",
    age: 28,
    email: "canrued@gmail.com",

    getFullName() {
        //return `${literalUser.name} ${literalUser.lastName} ${literalUser.age}`;
         return `${this.name} ${this.lastName} ${this.age}`;
    }
}

export { literalUser };
