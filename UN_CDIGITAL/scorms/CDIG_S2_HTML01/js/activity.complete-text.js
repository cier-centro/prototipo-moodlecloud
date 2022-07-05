//-------------------------------
//----Actividad Complete Text----
//----------Version 1.0----------
//-------------------------------
// Actividad de completar parrafo haciendo click en botones
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
  //funcion de activacion de la actividad
  setActivityElements();

currentAnswers = new Array (activityContent.options.length);
currentAnswers.fill(false,0,currentAnswers.length);
}
// -------------------------------
// Variables
// -------------------------------
//Etiqueta del marco contenedor del párrafo incompleto y de los campos a completar
var incompleteText = "#incompleteText";
//Etiqueta del marco contenedor de los botones de texto
var textButtonOpt = "#textButtonOptions";
//Etiqueta del id de los contenedores de los botones
var idOptionPrefix = "buttonContainer_";
//Etiqueta del id de los campos a llenar
var idField = "field_";
//Etiqueta del id de los botones
var idButton = "textBtn_";
//Cambia cuando un campo está listo para recibir texto
var isReadyToReceiveAnswer = false;
//Identificador del campo seleccionado
var selectedField = 0;
//Identificador del botón seleccionado
var selectedTextButton = 0;
//Contador de respuestas correctas en validación activa
var totalCorrectInActiveCheck = 0;
//Permite cambios de estado en el botón seleccionado
var allowStateChanges = true;

var currentAnswers;

//-------------------------------
// Funciones
//-------------------------------
// Iniciar Actividad
function setActivityElements() {
  setActivityButtonState("#btn-resetQuestion","disabled");
  setActivityButtonState("#btn-setCorrectAnswers","disabled");
  setActivityButtonState("#btn-endQuestion","enabled");
  setQuestion();
}
//-------------------------------
//Establecer pregunta actual
function setQuestion() {
  $(textButtonOpt).empty();
  createQuestion();
  setActivityType();
}
//-------------------------------
//Crea la interfaz de la pregunta
function createQuestion() {
  var paragraph = "<p>";
  for (var i = 0; i < activityContent.options.length; i++) {
    paragraph += activityContent.options[i].firstPhrase;
    paragraph += '<span id="' + idField + (i + 1) + '" class="activity-field" data-value="' + (
      i + 1) + '" data-answer = "0" data-toggle="tooltip" title="Casilla">.</span>';
    paragraph += activityContent.options[i].lastPhrase;
  }
  paragraph += "</p>";
  $(incompleteText).html(paragraph);
  var activityButtons = getButtons();
  $(textButtonOpt).append(activityButtons);
  if (activityContent.allowRandom) {
    randomDiv(textButtonOpt, "#" + idOptionPrefix, $("[id*='" + idOptionPrefix + "']").length);
  }
  if (activityContent.allowActiveCheck) {
    setActivityButtonState("#btn-endQuestion","disabled");
  }
}
//-------------------------------
//Crea los botones de la actividad
function getButtons() {
  var textButtons = "";
  for (i = 0; i < activityContent.options.length; i++) {
    textButtons += '<div class="' + activityContent.buttonContainerClass + '" id="' + idOptionPrefix + (
      i + 1) + '">' + '<button type="button" id = "' + idButton + (
      i + 1) + '" data-value = "' + (
      i + 1) + '" class="btn btn-primary rounded-pill activity-button" data-toggle="tooltip" title="Palabra">' + activityContent.options[i].hiddenWord + '</button>' + '</div > ';
  }
  if (activityContent.allowFakeWorks) {
    for (i = 0; i < activityContent.fakewords.length; i++) {
      textButtons += '<div class="' + activityContent.buttonContainerClass + '" id="' + idOptionPrefix + (
        i + 1 + activityContent.options.length) + '">' + '<button type="button" id = "' + idButton + (
        i + 1 + activityContent.options.length) + '" data-value = "' + (
        i + 1 + activityContent.options.length) + '" class="btn btn-primary rounded-pill activity-button" data-toggle="tooltip" title="Palabra">' + activityContent.fakewords[i] + '</button>' + '</div > ';
    }
  }
  return textButtons;
}
//-------------------------------
//Asigna las funciones de los elementos (campos-botones) dependiendo del tipo seleccionado
function setActivityType() {
  if (activityContent.type === 1) {
    setFieldFirstModeClickFunction();
    setButtonFirstModeClickFunction();
  } else if (activityContent.type === 2) {
    setFieldOtherModeClickFunction();
    setButtonSecondModeClickFunction();
  } else {
    setFieldOtherModeClickFunction();
    setButtonThirdModeClickFunction();
  }
}
//-------------------------------
// Configura las funciones del evento click para los campos en el tipo 1
function setFieldFirstModeClickFunction() {
  $(incompleteText + " [id*='" + idField + "']").click(function() {
    allowStateChanges = true;
    if (activityContent.allowActiveCheck) {
      $(this).removeClass("incorrect");
    }
    var selectedAnswerField = parseInt($(this).attr("data-answer"));
    if (selectedAnswerField !== 0) {
      doWhenSelectedFieldIsFull(selectedAnswerField, $(this));
      $(this).addClass("selected").removeClass("full").delay(150).queue(function() {
        $(this).removeClass("selected").dequeue().text(".");
      });
    }
  });
}
//-------------------------------
// Configura las funciones del evento click para los botones en el tipo 1
function setButtonFirstModeClickFunction() {
  $(textButtonOpt + " [id*='" + idButton + "']").click(function() {
    var wordsToAnswer = $(incompleteText + " [id*='" + idField + "']");
    for (var i = 0; i < activityContent.options.length; i++) {
      if (parseInt(wordsToAnswer.eq(i).attr("data-answer")) === 0) {
        selectedField = (i + 1);
        allowStateChanges = true;
        break;
      } else {
        allowStateChanges = false;
      }
    }
    if (allowStateChanges)
      setAnsweredState($(this));
  });
}
//-------------------------------
// Configura las funciones del evento click para los campos en los otros tipos
function setFieldOtherModeClickFunction() {
  $(incompleteText + " [id*='" + idField + "']").click(function() {
    allowStateChanges = true;
    if (activityContent.allowActiveCheck) {
      $(this).removeClass("incorrect");
    }
    setReadyToReceiveAnswer($(this));
    var selectedAnswerField = parseInt($(this).attr("data-answer"));
    if (selectedAnswerField !== 0) {
      doWhenSelectedFieldIsFull(selectedAnswerField, $(this));
    }
  });
}
//-------------------------------
// Configura las funciones del evento click para los botones en el tipo 2
function setButtonSecondModeClickFunction() {
  $(textButtonOpt + " [id*='" + idButton + "']").click(function() {
        if (isReadyToReceiveAnswer) {
            isReadyToReceiveAnswer = false;
            setAnsweredState($(this));
        }
  });
}
//-------------------------------
// Configura las funciones del evento click para los botones en el tipo 3
function setButtonThirdModeClickFunction() {
  $(textButtonOpt + " [id*='" + idButton + "']").click(function() {
    if (isReadyToReceiveAnswer) {
      isReadyToReceiveAnswer = false;
    } else {
      var wordsToAnswer = $(incompleteText + " [id*='" + idField + "']");
      for (var i = 0; i < activityContent.options.length; i++) {
        if (parseInt(wordsToAnswer.eq(i).attr("data-answer")) === 0) {
          selectedField = (i + 1);
          allowStateChanges = true;
          break;
        } else {
          allowStateChanges = false;
        }
      }
    }
    if (allowStateChanges)
      setAnsweredState($(this));
  });
}
//-------------------------------
// Configura las funciones cuando el campo seleccionado está lleno
function doWhenSelectedFieldIsFull(selectedAnswerField, thisElement) {
  var buttonElement = textButtonOpt + ' [id*="' + idButton + '"][data-value="' + selectedAnswerField + '"]';
  $(textButtonOpt + " #" + idOptionPrefix + selectedAnswerField).removeClass("d-none");
  setTimeout(function(){
    $(textButtonOpt + " #" + idOptionPrefix + selectedAnswerField).removeClass("disabled")
  },300);
  $(buttonElement).removeClass("disabled");
  thisElement.attr("data-answer", 0);
  setTimeout(function() {
    thisElement.text(".");
  }, 150);
}
//-------------------------------
// Configura las funciones cuando se responde con una palabra
function setAnsweredState(thisElement) {
  selectedTextButton = thisElement.data("value");
  var selectedFieldElement = incompleteText + ' [id*="' + idField + '"][data-value="' + selectedField + '"]';
  $(selectedFieldElement).attr("data-answer", selectedTextButton);
  $(selectedFieldElement).text(thisElement.text());
  changeClass($(selectedFieldElement), "full", "selected");
  $(textButtonOpt + " #" + idOptionPrefix + selectedTextButton).addClass("disabled");
  setTimeout(function(){
    $(textButtonOpt + " #" + idOptionPrefix + selectedTextButton).addClass("d-none");
  },300)
  thisElement.addClass("disabled");
  checkInActiveMode(selectedFieldElement, selectedTextButton);
}
//-------------------------------
// Configura las funciones el campo está listo para recibir respuesta
function setReadyToReceiveAnswer(thisElement) {
  isReadyToReceiveAnswer = true;
  $(incompleteText + " [id*='" + idField + "']").removeClass("selected");
  changeClass(thisElement, "selected", "full")
  selectedField = thisElement.attr("data-value");
}
//-------------------------------
// Configura las funciones cuando la validación activa está seleccionada
function checkInActiveMode(selectedFieldElement, selectedTextButton) {
  if (activityContent.allowActiveCheck) {
    if ((parseInt(selectedField) === selectedTextButton) || ($(selectedFieldElement).text() === activityContent.options[selectedField - 1].hiddenWord)) {
      if ((activityContent.answerModal === 1) || (activityContent.answerModal === 3)) {
        showAnswerPopup("success", selectedTextButton);
      }
      $(selectedFieldElement).addClass("correct disabled");
      totalCorrectInActiveCheck++;
      if (totalCorrectInActiveCheck === activityContent.options.length) {
        exitActivity(totalCorrectInActiveCheck);
      }
    }
    else {
      if ((activityContent.answerModal === 2) || (activityContent.answerModal === 3)) {
        showAnswerPopup("error", parseInt(selectedField));
      }
      $(selectedFieldElement).addClass("incorrect");
    }
  }
}
//-------------------------------
// Cambia la clase de un elemento, una antigua por otra nueva
function changeClass(element, addedClass, removedClass) {
  element.removeClass(removedClass);
  element.addClass(addedClass);
}
//-------------------------------
// Verifica las preguntas correctas
function checkAnswers() {
  setActivityButtonState("#btn-endQuestion","disabled");
  var totalCorrect = 0;
  disableActivity();
  var wordsToAnswer = $(incompleteText + " [id*='" + idField + "']");
  for (i = 0; i < activityContent.options.length; i++) {
    if ((wordsToAnswer.eq(i).data("value") === wordsToAnswer.eq(i).data("answer")) || (wordsToAnswer.eq(i).text() === activityContent.options[i].hiddenWord)) {
      totalCorrect++;
      wordsToAnswer.eq(i).addClass("correct");
      currentAnswers[i] = true;
    } else {
      wordsToAnswer.eq(i).addClass("incorrect");
    }
  }
  exitActivity(totalCorrect); //Retroalimentacion final -> se debe establecer su funcionalidad en el slide correspondiente
}
//-------------------------------
// Deshabilitar los elementos de la actividad
function disableActivity() {
  $(incompleteText + " [id*='" + idField + "']").addClass("disabled");
  $(textButtonOpt + " button").addClass("disabled");
}
//-------------------------------
// Reinicia la actividad
function resetActivity() {
  isReadyToReceiveAnswer = false;
  selectedField = 0;
  selectedTextButton = 0;
  totalCorrectInActiveCheck = 0;
  setActivityElements();
  setCorrectAnswers();
}
//-------------------------------
// Muestra las respuestas en los campos
function setCorrectAnswers() {
    setActivityButtonState("#btn-setCorrectAnswers","disabled");
    var wordsToAnswer = $(incompleteText + " span");
    wordsToAnswer.removeClass("incorrect").removeClass("correct").addClass("full");
    for (i = 0; i < activityContent.options.length; i++) {
        wordsToAnswer.eq(i).text(activityContent.options[i].hiddenWord);
    }
}

// Muestra las respuestas en los campos
function setCorrectAnswers() {
    setActivityButtonState("#btn-setCorrectAnswers","disabled");
    var wordsToAnswer = $(incompleteText + " span");
    for (i = 0; i < activityContent.options.length; i++) {
        if(currentAnswers[i]){
            wordsToAnswer.eq(i).addClass("correct").addClass("full").addClass('disabled');
            wordsToAnswer.eq(i).attr("data-answer", 1);
            wordsToAnswer.eq(i).text(activityContent.options[i].hiddenWord);
            setAnsweredState($("#textBtn_"+(i+1)));
        }
    }
}