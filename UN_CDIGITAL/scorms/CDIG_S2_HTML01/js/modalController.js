// -------------------------------
// Listado de los mensaje de ayuda de las actividades
genericFeedbackMessage =  {
  correctFeedback: ["¡Muy bien!",""],
  incorrectFeedback: ["¡Vuelve a intentarlo!", "Revise sus respuestas"],
},
// -------------------------------
// Listado de los mensajes de ayuda de las actividades
helpModalMessages = {
  //Mensaje de ayuda para la actividad de Radio
  radioGroupActivity: ["Ayuda","De las opciones propuestas, seleccione la correcta."],
  //Mensaje de ayuda para la actividad de check
  checkGroupActivity: ["Ayuda","De las opciones propuestas, seleccione las que sean correctas."],
  //Mensaje de ayuda para la actividad de completar texto
  completeTextActivity: ["Ayuda","Seleccione la casilla vacía y en seguida elija la palabra que corresponda para completar el texto."],
  //Mensaje de ayuda para la actividad de introducir texto
  inputTextActivity: ["Ayuda","Escriba la respuesta correcta en la casilla correspondiente."],
  //Mensaje de ayuda para la actividad de verdadero/falso
  trueFalseActivity: ["Ayuda","Seleccione verdadero o falso según corresponda en cada afirmación."],
  //Mensaje de ayuda para la actividad de encontrar pareja
  findPairActivity: ["Ayuda","Haga clic sobre las cartas para formar parejas relacionadas."],
  //Mensaje de ayuda para la actividad de memoria
  memoryPairActivity: ["Ayuda","Haga clic sobre las cartas para formar parejas relacionadas."],
  //Mensaje de ayuda para la actividad de crucigrama
  crosswordActivity: ["Ayuda","Ingrese las letras en las casillas correspondientes para completar las palabras según las pistas y descripciones."],
  //Mensaje de ayuda para la actividad de arrastre
  dragDropActivity: ["Ayuda","Seleccione y arrastre los elementos al espacio que corresponda."],
  //Mensaje de ayuda para la actividad de slider
  rangeSliderActivity: ["Ayuda","Seleccione y arrastre el control deslizante al espacio que corresponda."],
};
// -------------------------------
// Permite que el popup se cierre en cualquier espacio de este (independiente del botón cerrar [x])
// Desactivar si hay botones en su interior
$(document).ready(function() {
  $("#activityModal").unbind();
  $('#activityModal').on('click', function() {
    $('#activityModal').modal('hide');
  });
});
// -------------------------------
// Funcion para abrir modal de ayuda
function openHelp() {
  $("#activityModal").addClass("help").removeClass("correct").removeClass("incorrect");
  setAndOpenModal("help");
}
// -------------------------------
// Configura el sonido y los mensajes que se van a mostrar en el modal, también abre el modal
function setAndOpenModal(state, messagesArray) {
  var modalMessageArray = getMessageArray(state, messagesArray);

  if ((state === "success") || (state === "error")) {
    var classToAdd = (state === "success") ? "correct": "incorrect";
    var classToRemove = (state === "success") ? "incorrect": "correct";
    $("#activityModal").addClass(classToAdd).removeClass("help").removeClass(classToRemove);
    toggleAudio(state);
  }
  //console.log(messagesArray);
  $('#activityModal').find('.msg-body').html(modalMessageArray[0]);
  $('#activityModal').modal('show');

}
// -------------------------------
// Devuelve la cadena de mensajes segun el estado (help/success/error)
function getMessageArray(state, messagesArray) {
  var modalMessageArray;
  if (state === "help") {
    modalMessageArray = getHelpActivityMessage();
  }
  else if (state === "success") {
    modalMessageArray = messagesArray.correctFeedback;
    modalMessageArray[0] = (modalMessageArray[0] === "")? genericFeedbackMessage.correctFeedback[0] : modalMessageArray[0];
    modalMessageArray[1] = (modalMessageArray[1] === "")? genericFeedbackMessage.correctFeedback[1] : modalMessageArray[1];
  }
  else if (state === "error") {
    modalMessageArray = messagesArray.incorrectFeedback;
    modalMessageArray[0] = (modalMessageArray[0] === "")? genericFeedbackMessage.incorrectFeedback[0] : modalMessageArray[0];
    modalMessageArray[1] = (modalMessageArray[1] === "")? genericFeedbackMessage.incorrectFeedback[1] : modalMessageArray[1];
  }
  return modalMessageArray;
}
// -------------------------------
// Devuelve el mensaje de ayuda según el tipo de actividad
function getHelpActivityMessage() {
  var helpMessage;
  switch(activityContent.controller) {
    case "js/activity.radio-group.js":
      helpMessage = helpModalMessages.radioGroupActivity;
    break;
    case "js/activity.checklist.js":
      helpMessage = helpModalMessages.checkGroupActivity;
    break;
    case "js/activity.complete-text.js":
      helpMessage = helpModalMessages.completeTextActivity;
    break;
    case "js/activity.input-text.js":
      helpMessage = helpModalMessages.inputTextActivity;
    break;
    case "js/activity.true-false.js":
    helpMessage = helpModalMessages.trueFalseActivity;
    break;
    case "js/activity.find-pair.js":
    helpMessage = helpModalMessages.findPairActivity;
    break;
    case "js/activity.memory-pair.js":
    helpMessage = helpModalMessages.memoryPairActivity;
    break;
    case "js/activity.crossword.js":
    helpMessage = helpModalMessages.crosswordActivity;
    break;
    case "js/activity.drag-drop.js":
    helpMessage = helpModalMessages.dragDropActivity;
    break;
    case "js/activity.range-slider":
    helpMessage = helpModalMessages.rangeSliderActivity;
    break;
    default:
      helpMessage = ["Ayuda","Mensaje de ayuda sin definir"];
  }
  return helpMessage;
}
// -------------------------------
// Muestra el botón "Siguiente"
function showNextButton() {
  $("#activityModal").on('hidden.bs.modal', function() {
    //console.log("Se muestra botón Siguiente");
    $("#activityModal").unbind('hidden.bs.modal');
    $("#nextControlButton").focus();
    $("#nextControlButton").css("transition", "all 1s ease-in");
    $("#nextControlButton").removeClass("hidden");
  });
}
// -------------------------------
// Muestra el botón "Anterior"
function showPrevButton() {
  $("#activityModal").on('hidden.bs.modal', function() {
    //console.log("Se muestra botón anterior");
    $("#activityModal").unbind('hidden.bs.modal');
    jumpTop();
    $("#prevControlButton").focus();
    $("#prevControlButton").css("transition", "all 1s ease-in");
    $("#prevControlButton").removeClass("hidden");
  });
}
//-------------------------------
