//función que toma el valor introducido como respuesta por el usuario en cada pregunta y comprueba si es correcto, de ser así incrementa el valor en una unidad de una variable contadora y al final te muestra el número de aciertos obtenidos junto a las respuestas correctas.
function preguntas(){
   var preg1 = document.getElementById("p1").value;
   var preg2 = document.getElementById("p2").value;
   var preg3 = document.getElementById("p3").value;
   var aciertos = 0;

   if (preg1 == "1969") 
	aciertos++;
   if ((preg2 == "Benarés") || (preg2 == "Varanasi"))
	aciertos++;
   if (preg3 == "Washington")
	aciertos++;

   alert("Número de aciertos obtenidos: " + aciertos + "\n\nRespuestas correctas: " + "\n1: 1969" + "\n2: Benarés/Varanasi" + "\n3: Washington");

}
//funcion popUp que me muestra una imagen redireccionada tras presionar el botón de mostrar imagen respectivo
function popUp(URL) {
        window.open(URL, 'Imagen1', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
    }
