// -------------------------------
//------Actividad-True-False------
//-----------Version 1.0----------
// -------------------------------
// Actividad de dos opciones con única respuesta para diferentes afirmaciones
//
// Permite Retroalimentacion:
// - Activa: Al hacer click se valida
// - Pasiva: Con un botón adicional se valida.
// - Activa/Pasiva: Retroalimentación por pregunta y general al terminar.
//
//------------TODO---------------
// Pendientes de optimizar y/o implementar
// ...
// -------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content) {
  activityContent = $.extend(true, {}, content);
  // funcion de activacion de la actividad
  setActivityElements();
}
// -------------------------------
// Variables
// -------------------------------
// Etiqueta del marco contenedor de las afirmación
var sentencesContainerId = "#sentencesContainer";
// Etiqueta de la afirmación
var sentenceId = "sentence_";
// Arreglo de las respuestas correctas
var correctAnswers = [];
// Arreglo de las respuestas seleccionadas
var currentAnswers = [];
//Enunciado Actual. "1" por defecto.
var currentQuestion = 1;
// -------------------------------
// Funciones
// -------------------------------
// Inicia la Actividad
function setActivityElements() {
  setActivityButtonState("#btn-resetQuestion", "disabled");
  buildElements();
  setCorrectAnswersArray();
}
// -------------------------------
// Crea el arreglo de las respuestas correctas
function setCorrectAnswersArray() {
  for (var i = 0; i < activityContent.options.length; i++) {
    correctAnswers[i] = activityContent.options[i].answer;
  }
}
//-------------------------------
//Establecer pregunta actual
function changeQuestion() {
  if (activityContent.showOnlyOneQuestion) {
    $(`[id*='${sentenceId}']`).hide();
    $(`#${sentenceId}` + currentQuestion).fadeIn();
  }
  if (currentQuestion == activityContent.options.length)
    $("#btn-nextQuestion").addClass("disabled");
  else
    $("#btn-nextQuestion").removeClass("disabled");
  if (currentQuestion == 1)
    $("#btn-prevQuestion").addClass("disabled");
  else
    $("#btn-prevQuestion").removeClass("disabled");
}
//-------------------------------
// Pregunta Siguiente
function nextQuestion() {
  currentQuestion++;
  changeQuestion();
}
//-------------------------------
// Pregunta Anterior
function prevQuestion() {
  currentQuestion--;
  changeQuestion();
}
// -------------------------------
// Función del botón Evaluar, disponible en modo pasivo
function checkAnswers() {
    setActivityButtonState("#btn-endQuestion","disabled");
    $(".true-false-activity .answer-sign").addClass("disabled");
    $(".true-false-activity #btn-endQuestion").addClass("disabled");
    doWhenAllowShowAnswersState();
    if (equalArrays(currentAnswers, correctAnswers)) {
        exitActivity(true);
    } else {
        exitActivity(false);
    }
}
// -------------------------------
// Mostrar el estado de las respuestas (correctas - incorrectas)
function doWhenAllowShowAnswersState() {
    var state, answerClass;
    if (activityContent.allowShowAnswersState) {
        for (var i = 0; i < activityContent.options.length; i++) {
            state = (currentAnswers[i] === "V") ? true : (currentAnswers[i] === "F") ? false : null;
            answerClass = (currentAnswers[i] === correctAnswers[i]) ? "correct" : "incorrect";
            $("#" + sentenceId + (i + 1) + " ." + state).find(".check-space").addClass(answerClass);
        }
    }
}
// -------------------------------
// Reiniciar la actividad
function resetActivity() {
    currentAnswers.fill(0, 0, activityContent.options.length);
    setActivityButtonState("#btn-resetQuestion","disabled");
    setActivityElements();
}
// -------------------------------
// Construye los elementos de la actividad
function buildElements() {
    var sentencesElements = "";
    for (var i = 0; i < activityContent.options.length; i++) {
        sentencesElements += getSentenceById(i);
    }
    $(sentencesContainerId).html(sentencesElements);
    if (activityContent.allowRandom) {
        randomDiv(sentencesContainerId, "#" + sentenceId, activityContent.options.length);
    }
    $(".true-false-activity").find(".answer-sign").removeClass("selected");
    $(".true-false-activity").find(".check-space").removeClass("selected");
    if (activityContent.allowActiveCheck) {
        setActivityButtonState("#btn-endQuestion","disabled");
    } else {
        setActivityButtonState("#btn-endQuestion","enabled");
    }
}
// -------------------------------
// Construye las afirmaciones según el id
function getSentenceById(id) {
    var idSentence =
    `
        <div class='row mb-3 align-items-center justify-content-around' id='${sentenceId + (id + 1)}'>
            <div class='${activityContent.sentenceClass}' data-toggle='tooltip' title='Afirmación'>
                <p class="mb-0">${activityContent.options[id].label}</p>
            </div>
            <div class='${activityContent.sentenceButtonsClass}'>
                <div class='row align-items-center justify-content-center'>
                    <div class='col-6'>
                        <p class='letter mb-0'>V</p>
                        <button class='btn answer-sign true' data-toggle='tooltip' title='Verdadero' onclick='setAnswerButton("${(id + 1)}", true)'>
                            <div class='check-space'></div>
                        </button>
                    </div>
                    <div class='col-6'>
                        <p class='letter mb-0'>F</p>
                        <button class='btn answer-sign  false' data-toggle='tooltip' title='Falso' onclick='setAnswerButton("${(id + 1)}", false)'>
                            <div class='check-space'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
    return idSentence;
}
// -------------------------------
// Actualiza los estilos y el arreglo de respuestas seleccionadas
function setAnswerButton(id, state) {

    changeClass($("#" + sentenceId + id + " ." + state), "deselected", "selected");
    $("#" + sentenceId + id + " ." + !state).removeClass("selected");
    currentAnswers[(id - 1)] = (state) ? "V" : "F";
    doWhenAllowActiveCheck(id, state);

}
// -------------------------------
// Al actualizarse las respuestas seleccionadas, se hacen estas acciones en modo activo o act/pas
function doWhenAllowActiveCheck(id, state) {
  if (activityContent.allowActiveCheck) {
    if (currentAnswers[(id - 1)] === correctAnswers[(id - 1)]) {
      if ($("#" + sentenceId + id + " ." + !state).find(".check-space").hasClass("incorrect")) {
        $("#" + sentenceId + id + " ." + !state).find(".check-space").removeClass("incorrect");
        $("#" + sentenceId + id + " ." + state).find(".check-space").addClass("warning");
      } else {
        $("#" + sentenceId + id + " ." + state).find(".check-space").addClass("correct");
      }
      exitActivity(true, id);
    } else {
      $("#" + sentenceId + id + " ." + state).find(".check-space").addClass("incorrect");
      exitActivity(false, id);
    }
  }
}
// -------------------------------
// Cambia la clase del elemento
function changeClass(element, oldClass, newClass) {
  element.addClass(newClass);
  element.removeClass(oldClass);
}
// -------------------------------
// Verifica si ambos arreglos son iguales
function equalArrays(a, b) {
    if (a.length != b.length)
        return false;
    else {
        for (i = 0; i < a.length; i++)
        if (a[i] != b[i])
            return false;
    return true;
    }
}
// -------------------------------
