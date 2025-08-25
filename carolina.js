//Hola hola
//carolina seren y facundo seren
  /* controlar el primro que llega a 100
los valores obtenidos de forma aleatoria de 0 a 9
Math.floor(Math.random() * 10);    0.99*10= 9.9
*/


function resolucion() {
  const array = [0,0,0,0,0,0,0,0];
  let ganador = false;
  let posicionGanador = -1;
  let puntajeGanador = 0;
  let vueltas = 0;

  do{
    for (let index = 0; index < array.length; index++) {
      array[index] += Math.floor(Math.random() * 10);
      
      if (array[index] >= 100) {
        ganador = true;
        posicionGanador = index;
        puntajeGanador = array[index];
        index = array.length //break;
      }
    }
    vueltas++;
  } while(ganador === false)

  console.log(array);
  console.log("Posicion del ganador:", posicionGanador);
  console.log("Puntaje del ganador:", puntajeGanador);
  console.log("Gano en vueltas:", vueltas);
}

// resolucion();

function resolucion2() {
  const array = [0, 0, 0, 0, 0, 0, 0, 0];
  let ganador = false;
  let posicionGanador = -1;
  let puntajeGanador = 0;
  let vueltas = 0;

  do {
    let index = Math.floor(Math.random() * 8);
      array[index] += Math.floor(Math.random() * 10);

      if (array[index] >= 100) {
        ganador = true;
        posicionGanador = index;
        puntajeGanador = array[index];
        index = array.length //break;
      }
    vueltas++;
  } while (ganador === false)

  console.log(array);
  console.log("Posicion del ganador:", posicionGanador);
  console.log("Puntaje del ganador:", puntajeGanador);
  console.log("Gano en vueltas:", vueltas);
}

resolucion2();
 