//Tema 2 - SV course

//1. Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă este par. Afișați rezultatul în consolă.
doChanges = (number) => (number % 2 == 0 ? number - 2 : number * 2);
console.log(doChanges(5));

//2.Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. Parcurgeți array-ul folosind un “for loop”. Afișați rezultatul în consola.

const isNumberPrime = function (number) {
  for (let j = 2; j < number; j++) {
    if (number % j == 0) return false;
  }
  return true;
};

const numbersThatArePrime = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2 || (arr[i] > 1 && isNumberPrime(arr[i]))) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(numbersThatArePrime([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//3. Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola

function storeStringsFromParam(arr) {
  let result = [];
  arr.forEach((element) => {
    if (typeof element === "string") result.push(element);
  });
  return result;
}
console.log(storeStringsFromParam(["Dana", 2, "@", 125, -34, "-568.74"]));

//4. Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”.

function sumEvenNumbers(no) {
  const numberAsArray = Array.from(no.toString());
  let result = 0;
  for (let index = 0; index < numberAsArray.length; index++) {
    if (parseInt(numberAsArray[index]) % 2 == 1) {
      result += parseInt(numberAsArray[index]);
    } else {
      continue;
    }
  }
  return result;
}
console.log(sumEvenNumbers(123456789));

//5. Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, după exemplul prezentat la curs.

const color = "yellow";

switch (color) {
  case "red":
  case "green":
    console.log("Apples are red and green as well");
    break;
  case "blue":
    console.log("The sky is blue");
    break;
  case "pink":
  case "yellow":
    console.log("Dolls have pink and yellow hair");
    break;
  case "black":
    console.log("My tattoo is has black color");
    break;
  default:
    console.log("Not a valid color, choose some color and see the results! ");
}
