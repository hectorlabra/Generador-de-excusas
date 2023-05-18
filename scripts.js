//Arrays
let who = ["Mi perro", "Alfredo", "Martina", "Isabel"];
let action = ["comió", "infectó", "secuestró"];
let what = ["mi proyecto", "mi codigo", "mi tarea", "mi comida"];
let when = ["esta mañana","ayer","hace 5 minutos"];
let where = ["en el centro","en el bar","en el metro", "en mi casa"];

//Lista de opciones = Arrays
const listOptions = [who, action, what, when, where];

//Botón y parrafo de excusas
window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuses();
  });
};


function getRandomElementOfAnArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//bucle que genera la excusa recorriendo aleatoreamente los array
let generateExcuses = () => {
  let excuses = " ";

  for (let i = 0; i < listOptions.length; i++) {
    excuses = excuses.concat(" ", getRandomElementOfAnArray(listOptions[i]));
  }

  return excuses;
};
