//Apartado para darle mtransiccion o moviento al titulo
// Seleccionamos el elemento h1
const elementoH1 = document.querySelector('.contenedor--descripcion h1');
// Convertimos el texto en un array de letras
const texto = elementoH1.textContent.split('');
// Reemplazamos el texto del elemento h1 con una cadena vacía
elementoH1.textContent = '';
// Recorremos el array de letras
texto.forEach((letra, i) => {
  // Creamos un elemento span para cada letra
  const letraSpan = document.createElement('span');
  letraSpan.textContent = letra;
  letraSpan.style.visibility = 'hidden';
  // Agregamos el elemento span al elemento h1
  elementoH1.appendChild(letraSpan);
  // Mostramos la letra con un retraso
  setTimeout(() => {
    letraSpan.style.visibility = 'visible';
  }, i * 100);
});