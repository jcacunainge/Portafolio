//Apartado para descargar el hoja de vida  
let openButton = document.getElementById("open-button");
openButton.addEventListener("click", function() {
  fetch("./archivos/Hv.pdf")
    .then(response => response.arrayBuffer())
    .then(buffer => {
      let blob = new Blob([buffer], { type: "application/pdf" });
      let url = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.click();
    });
});