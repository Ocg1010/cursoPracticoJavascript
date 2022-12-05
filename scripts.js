const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

/* console.log(
  h1,
  p,
  parrafito,
  pid,
  input);

console.log(p, pid, input);


h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'Rojo'); */

/* h1.classList.add('rojo')
h1.classList.remove('Rojo')
h1.classList.remove('Rojo')
 */

/* h1.classList.toggle('Rojo')
h1.classList.contains('Rojo') */

/* input.value = "456"*/

/* input.placeholder = "Hola";

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2013/11/15/18/14/grizzlies-210996_960_720.jpg');
console.log(img);*/
/* pid.innerHTML = "";*/
/* pid.append(img); */

//Escuchando Eventos

const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btn-calcular')
const result = document.querySelector('#result');
const form = document.querySelector('#form');

/* btn.addEventListener('click', btnOnClick);*/

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {
  console.log(event);
  event.preventDefault()
  const sumaImputs = input1.value + input2.value;
  result.innerText = "Resultado: " + sumaImputs; 8
} 

