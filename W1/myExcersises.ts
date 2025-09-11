// //example is to use a function like Array.isArray:

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }

// welcomePeople(["Alice", "Bob", "Charlie"]);
// welcomePeople(["Alice"]);


// // If Union has a common method. (slice method)
// function getFirstThree(x: Number[] | string) {
//   return x.slice(0,6); //.slice returns those positions
// }

// console.log(getFirstThree([2,4,6,8,10,11,12,13,14,15,16,18,19,20]));
// console.log(getFirstThree("VanesaIntentando"));



//Type Aliases
//------------

type point = {
  x:number,
  y:number,
}

function printCoord (coordenada : point) {
  console.log(`The coodinate's values are => ${coordenada.x}
    °Sur-${coordenada.y}°Este`)
};

printCoord({x:123,y:456,})

//