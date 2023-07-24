// Función para generar un número aleatorio dentro de un rango
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Función para crear una imagen de Shrek en la página
function createShrek() {
  const shrek = document.createElement('img');
  shrek.src = 'images/sherk.jpeg'; // Asegúrate de que esta ruta sea correcta y coincida con la ubicación de la imagen
  shrek.classList.add('shrek');

  // Asignar una posición y velocidad aleatoria al Shrek
  const randomX = randomInRange(0, window.innerWidth);
  const randomY = randomInRange(-200, -100); // Hace que los Shreks comiencen arriba de la pantalla
  const randomSpeed = randomInRange(5, 10);
  shrek.style.left = `${randomX}px`;
  shrek.style.top = `${randomY}px`;

  // Añadir el Shrek al contenedor
  document.querySelector('.sharks-container').appendChild(shrek);

  // Animar el Shrek para que caiga
  let currentY = randomY;
  function moveShrek() {
    currentY += randomSpeed;
    if (currentY > window.innerHeight) {
      shrek.remove(); // Eliminar el Shrek cuando sale de la pantalla
    } else {
      shrek.style.top = `${currentY}px`;
      requestAnimationFrame(moveShrek);
    }
  }

  requestAnimationFrame(moveShrek);
}

// Crear Shreks cada cierto intervalo de tiempo
setInterval(createShrek, 500);
