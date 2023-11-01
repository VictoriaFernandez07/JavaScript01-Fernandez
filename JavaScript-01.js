/* JavaScript.01 */
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
   
    const numero = numeros[i];
   
    if (numero % 2 === 0) {
     
        console.log(numero + "es par");
    
    } 
    
    else {
    
        console.log(numero + "es impar");
   
    }
}

/* JavaScript.02 */
function ParOImpar(número) {

    if (número % 2 === 0) {

        console.log(número + "es par");

    } 

    else {

        console.log(número + "es impar");

    }
    
}

ParOImpar(6);

/* JavaScript.03 */
const frutas = new Array ("Frutilla", "Sandia", "Pera")

function frutaFavorita(MisFrutasFavoritas){
    if (MisFrutasFavoritas === "Frutilla"){

        console.log("Mi fruta favorita es la Frutilla")

    }

    else{

        console.log("No me gusta la Pera")

    }

}

frutaFavorita("Frutilla");


/* JavaScript.04 */
const fruta= [];

function agregarFruta (fruta){

    frutas.push (fruta);
}

console.log (frutas);

agregarFruta ("Arandano");


/* JavaScript.07 */
const frase=[

    "Aférrate a los sueños porque si los sueños mueren la vida se convierte en un ave de alas rotas que no puede volar.",
    "Vivimos mientras soñamos.",
    "La normalidad es un camino pavimentado: es cómodo para caminar, pero nunca crecerán flores en él. Vicente Van Gohg.",
    "La magia está en lo cotidiano.",
    "Deja que ocurra.",
    "Todo depende de la perspectiva.",
    "Que todo lo que tenga que ser, sea… y que la suerte siempre te encuentre."

];

function FraseParaCadaDía (){

    const indice = Math.floor (Math.random() * frase.length);

    const FraseParaCadaDía = frase[indice];

    document.getElementById("FraseParaCadaDía").textContent = FraseParaCadaDía;

}

/* JavaScript.08 */
function cursadaAlumno(nombre, nota) {

    if (nota > 4) {

        console.log("Alumno" + nombre + "aprobó la cursada");

    } 

    else {

        console.log("Alumno" + nombre + "no aprobó la cursada");

    }

}

cursadaAlumno("Victoria", 7);