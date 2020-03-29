// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites}
var proximos = [];
var dia;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  //Guarda el resultado en variables
  $.ajax({
      url: "info.json"
    }).done(function (resultado) {

      dia = resultado.fechaActual;
      eventos = resultado.eventos;

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON
  //Ordena los eventos segun la fecha (los mas cercanos primero)

  for(var i = 0; i < eventos.length; i++){
        if (eventos[i].fecha > dia){
          proximos.push(eventos[i]);
        }
      }

      proximos = proximos.sort(function(a,b){
        if (a.fecha > b.fecha){
          return 1;
        }
        return -1;
      });

  //Crea un string que contenga el HTML que describe el detalle del evento
  //Recorre el arreglo y concatena el HTML para cada evento
  //Modifica el DOM agregando el html generado dentro del div con id=evento
  var html = ""

  for(var m = 0; m < proximos.length; m++){
        html += `<div class="col-12 card mb-3"><h2><a href="detalle.html?id=${proximos[m].id}">${proximos[m].nombre}</a></h2><span style="color: grey">${proximos[m].fecha} ${proximos[m].lugar}</span><span>${proximos[m].descripcion}</span><span style="color:blue">Costo: ${proximos[m].precio}</span></div>`
      }
      document.getElementById("proximos").innerHTML = html

  });
});
