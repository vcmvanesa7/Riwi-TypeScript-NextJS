
// EJERCICIO 1: FIZZBUZZ
//-------------------------------------------------------------------
// function fizzBuzz → función que imprime números del 1 al 50
function fizzBuzz(limit: number): void {
    for (let i = 1; i <= limit; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); 
        } else if (i % 3 === 0) {
            console.log("Fizz"); 
        } else if (i % 5 === 0) {
            console.log("Buzz"); 
        } else {
            console.log(i); 
        }
    }
}

// Llamada a la función fizzBuzz con límite 50
// fizzBuzz(50) → ejecuta la función con limit = 50
fizzBuzz(50);




// EJERCICIO 2: SALUDO CON forEach
//-------------------------------------------------------------------
// const → declara una constante que no puede ser reasignada

const names: string[] = ["Vanesa", "Esteban", "Miguel", "Fabian"];
function greetNames(names: string[]): void { 
    names.forEach((name: string) => {
        console.log(`Hola ${name}, bienvenido/a al sistema :D.`);
    });
}
// Llamada a la función greetNames con el arreglo names
greetNames(names);



// EJERCICIO 3: FILTRADO DE ESTUDIANTES
//-------------------------------------------------------------------
interface Student { 
    name: string;
    grade: number;
}
const students: Student[] = [
    { name: "Ana", grade: 85 },
    { name: "Luis", grade: 45 },
    { name: "María", grade: 70 },
    { name: "Carlos", grade: 50 }
];

// function getApprovedStudents -> función que filtra estudiantes aprobados
function getApprovedStudents(students: Student[]): Student[] {
    return students.filter((student: Student) => student.grade >= 60); 
}
const approved = getApprovedStudents(students);
console.log("Estudiantes aprobados:", approved);

