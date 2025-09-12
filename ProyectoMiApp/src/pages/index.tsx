//El archivo que interactúa con el DOM

interface product {
  name : string,
  brand : string,
  quantity : number
  price : number
  currency : "COP" | "USD",
  isActive : boolean,
  category : 
}



export default function home() {
  let result = 0;

  const sumar = (a: values, b: values): values => {
    return a + b;
  };

  result = sumar(10, 20);
  console.log(result);

  return (
    <>
      <div>Hola Mundo</div>
      <div>Hola Mundo 2</div>
      <div>{result}</div>
    </>
  );
}
