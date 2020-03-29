// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var dia;
var eventos;
var proximos = [];
var pasados = [];
var proximosdias = [];
var diaspasados = [];
$(document).ready(function () {

   //Carga los datos que estan en el JSON (info.json) usando AJAX
   //Guarda el resultado en variables
  $.ajax({
    url: "info.json"
  }).done(function (resultado){

   eventos = resultado.eventos;
   dia = resultado.fechaActual;

    //Clasifica los eventos segun la fecha actual del JSON
   for(var i = 0; i < eventos.length; i++){
     if (eventos[i].fecha > dia){
       proximos.push(eventos[i]);
     }
   }

   //Ordena los eventos segun la fecha (los mas cercanos primero)
   //Extrae solo dos eventos
   proximos = proximos.sort(function(a,b){
     if (a.fecha > b.fecha){
       return 1;
     }
     return -1;
   });

   proximosdias = proximos.slice(0,2);

   for(var i = 0; i < eventos.length; i++){
     if (eventos[i].fecha < dia){
       pasados.push(eventos[i]);
     }
   }

   //Ordena los eventos segun la fecha (los mas cercanos primero)
   //Extrae solo dos eventos
   pasados = pasados.sort(function(x,y){
     if (x.fecha < y.fecha){
       return 1;
     }
     return -1;
   });

   diaspasados = pasados.slice(0,2);

   //Crea un string que contenga el HTML que describe el detalle del evento
   //Recorre el arreglo y concatena el HTML para cada evento
   //Modifica el DOM agregando el html generado
   var html = ""

   for(var m = 0; m < proximosdias.length; m++){
     html += `<div class="col-5 card mx-auto"><h2><a href="detalle.html?id=${proximosdias[m].id}">${proximosdias[m].nombre}</a></h2><span style="color: grey">${proximosdias[m].fecha}</span><span>${proximosdias[m].descripcion}</span></div>`
   }
   document.getElementById("proximos").innerHTML = html

   //Crea un string que contenga el HTML que describe el detalle del evento
   //Recorre el arreglo y concatena el HTML para cada evento
   //Modifica el DOM agregando el html generado
   var html1 = ""

   for(var m = 0; m < diaspasados.length; m++){
     html1 += `<div class="col-5 card mx-auto"><h2><a href="detalle.html?id=${pasados[m].id}">${diaspasados[m].nombre}</a></h2><span style="color: grey">${diaspasados[m].fecha}</span>   <span>${diaspasados[m].descripcion}</span></div>`
   }
   document.getElementById("pasados").innerHTML = html1
  });
 });
