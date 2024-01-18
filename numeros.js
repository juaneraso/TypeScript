function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplo: obtener un número aleatorio entre 1 y 10
const randomNumber = getRandomNumber(1, 45);
console.log(randomNumber);
