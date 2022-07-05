//-------------------------------
//------Actividad FLIP-CARD------
//----------Version 1.0----------
//-------------------------------
// Presentar contenido mediante cartas que giran 180°
// Permite variar entre hacer click o pasar raton por encima, en dispositivo giran al tocar. 
//------------TODO---------------
// ...
//-------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content) {
  activityContent = $.extend(true, {}, content);
  //funcion de activacion de la actividad
  setCards();
}
//-------------------------------
// Variables
//-------------------------------
function setCards() {
  for (i = 1; i <= activityContent.totalCards; i++) {
    var idName = "#card_" + i;
    if (activityContent.allowClick) {
      $(idName).addClass("flip-card-active");
      allowClickCard(idName);
    }
    else {
      if (isMobileDevice()) {
        $(idName).addClass("flip-card-active");
        allowClickCard(idName);
      }
      else {
        $(idName).addClass("flip-card-hover");
      }
    }
  }
}
//-------------------------------
function allowClickCard(idName) {
  $(idName).click(function () {
    console.log("click");
    if ($(this).find(".flip-card-inner").css("transform") == "none") {
      enableCard(idName);
    }
    else {
      disableCard(idName);
    }
  });
}
//-------------------------------
//Establecer Carta activa
function enableCard(id) {
  $(id).find(".flip-card-inner").css("transform", "rotateY(180deg)");
}
//Desactivar carta
function disableCard(id) {
  $(id).find(".flip-card-inner").css("transform", "none");
}
//-------------------------------