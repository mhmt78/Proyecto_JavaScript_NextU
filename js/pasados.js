//Define las variables que necesites
var pasados = [];
var dia;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  //Guarda el resultado en variables
  //Selecciona los eventos que sean anteriores a la fecha actual del JSON
  //Ordena los eventos segun la fecha (los mas recientes primero)
  $.ajax({
      url: "info.json"
    }).done(function (resultado) {

      dia = resultado.fechaActual;
      eventos = resultado.eventos;

      for(var i = 0; i < eventos.length; i++){
        if (eventos[i].fecha < dia){
          pasados.push(eventos[i]);
        }
      }

      pasados = pasados.sort(function(a,b){
        if (a.fecha < b.fecha){
          return 1;
        }
        return -1;
      });

  //Crea un string que contenga el HTML que describe el detalle del evento
  //Recorre el arreglo y concatena el HTML para cada evento
  //Modifica el DOM agregando el html generado
  var html = ""

      for(var m = 0; m < pasados.length; m++){
        html += `<div class="col-12 card mb-3"><h2><a href="detalle.html?id=${pasados[m].id}">${pasados[m].nombre}</a></h2><span style="color: grey">${pasados[m].fecha} ${pasados[m].lugar}</span><span>${pasados[m].descripcion}</span><span style="color:blue">Invitados: ${pasados[m].invitados}</span></div>`
      }
      document.getElementById("pasados").innerHTML = html
  });

});
