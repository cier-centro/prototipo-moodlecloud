//-------------------------------
//-----Actividad Radio Group-----
//----------Version 1.0----------
//-------------------------------
// Actividad de Opción Múltiple con única Respuesta usando <input type = "radio">
// Permite 1 o varias preguntas del mismo tipo
//
// Permite Retroalimentacion:
// - Activa: Al hacer click se valida
// - Pasiva: Con un botón adicional se valida.
// - Activa/Pasiva: Retroalimentación por pregunta y general al terminar.
//
//------------TODO---------------
// Pendientes de optimizar y/o implementar
// ...
//-------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content) {
  activityContent = $.extend(true, {}, content);
  //funcion de activacion de la actividad
  setRadioGroup();
}
//-------------------------------
// Variables
//-------------------------------
//Etiqueta del marco contenedor del titulo del custionario
var radioGroupTitle = "radioGroupQuestions";
//Etiqueta del marco contenedor de las opciones del custionario
var radioGroupOpt = "radioGroupOptions";
//Etiqueta del id de los contenedores de (radio-labels)
var idOptionPrefix = "radioOption";
//Pregunta Actual. "1" por defecto.
var currentQuestion = 1;
//Respuestas guardadas
var currentAnswers;
// Flag completación de todas las preguntas
var allCompleted;
var totalCorrect;
//-------------------------------
// Funciones
//-------------------------------
// Iniciar Actividad
function setRadioGroup() {
  currentAnswers = new Array(activityContent.options.length);
  createQuestion();
  setDefaultSettings();
}
//-------------------------------
//Establecer valores por defecto
function setDefaultSettings() {
  currentQuestion = 1;
  allCompleted = false;
  currentAnswers.fill(0, 0, activityContent.options.length);
  setActivityButtonState("#btn-endQuestion", "enabled");
  setActivityButtonState("#btn-resetQuestion", "disabled");
  changeQuestion();
  setCurrentRadioListener();
}
//-------------------------------
//Establecer pregunta actual
function changeQuestion() {
  if (activityContent.showOnlyOneQuestion) {
    $("[id*='radioQuestion']").hide();
    $('#radioQuestion' + currentQuestion).fadeIn();
  }
  if (currentQuestion == activityContent.options.length - 1)
    $("#btn-nextQuestion").addClass("disabled");
  else
    $("#btn-nextQuestion").removeClass("disabled");
  if (currentQuestion == 1)
    $("#btn-prevQuestion").addClass("disabled");
  else
    $("#btn-prevQuestion").removeClass("disabled");
}
//-------------------------------
//Crear pregunta actual
function createQuestion() {
  $("[id*='" + idOptionPrefix + "']").addClass("custom-control custom-radio");
  $("[id*='" + idOptionPrefix + "']").attr("data-toggle", "tooltip");
  $("[id*='" + idOptionPrefix + "']").attr("title", activityContent.optionTooltipTitle);
  $("[id*='" + idOptionPrefix + "']").find("input").attr('type', 'radio');
  $("[id*='" + idOptionPrefix + "']").find("input").addClass("");
  $("[id*='" + idOptionPrefix + "']").find("label").addClass("");
  for (var i = 1; i < activityContent.options.length; i++) {
    $("#" + radioGroupTitle + i).html(activityContent.options[i].title);
    $("#" + radioGroupTitle + i).attr("data-toggle", "tooltip");
    $("#" + radioGroupTitle + i).attr("title", activityContent.questionTooltipTitle);
    $("[id*='" + idOptionPrefix + i + "']").find("input").attr('name', "question" + i);
    for (j = 1; j <= activityContent.options[i].labels.length; j++) {
      $("#radioBtn" + i + "_" + j).attr('value', i + "_" + j);
      $("#" + idOptionPrefix + i + '_' + j).find("label").html(activityContent.options[i].labels[j - 1]);
    }
    if (activityContent.allowRandom) {
      randomDiv("#" + radioGroupOpt + i, "#" + idOptionPrefix + i + '_', activityContent.options[i].labels.length);
    }
  }
  if (!activityContent.showOnlyOneQuestion || ((activityContent.options.length - 1) <= 1)) {
    $("#changeQuestionButtons").addClass("d-none");
  }
}
//-------------------------------
// Pregunta Siguiente
function nextQuestion() {
  if (!activityContent.allowActiveCheck) {
    currentQuestion++;
    changeQuestion();
  }
}
//-------------------------------
// Pregunta Anterior
function prevQuestion() {
  if (!activityContent.allowActiveCheck) {
    currentQuestion--;
    changeQuestion();
  }
}
//-------------------------------
// Establecer listener para la activacion de los radio button
function setCurrentRadioListener() {
  $("[id*='" + idOptionPrefix + "']").click(function () {
    $("[id*='" + idOptionPrefix + "']").removeClass("selected");
    $(this).addClass("selected");
    $(this).find("input[type='radio']").prop('checked', true);
    var radioValue = $(this).find("input[type='radio']").val();
    var radioValueArray = radioValue.split("_");
    if (activityContent.allowActiveCheck) {
      currentQuestion = radioValueArray[0];
    }
    if (radioValue) {
      currentAnswers[radioValueArray[0]] = radioValueArray[1];
      check();
    }
  });
}
//-------------------------------
// Verificar el radio actual
function check() {
  if (activityContent.allowActiveCheck) {
    if (parseInt(currentAnswers[currentQuestion]) === activityContent.options[currentQuestion].correct) {
      disableRadiosByQuestion();
      completeQuestion("success", currentQuestion, currentAnswers[currentQuestion]); //Retroalimentacion por pregunta -> se debe establecer su funcionalidad en el slide correspondiente
      checkQuestions();
      if (allCompleted) {
        exitActivity(activityContent.options.length - 1, currentQuestion, currentAnswers[currentQuestion]); //Retroalimentacion final -> se debe establecer su funcionalidad en el slide correspondiente
      }
    } else {
      completeQuestion("error", currentQuestion, currentAnswers[currentQuestion]);
    }
  } else {
    checkQuestions();
  }
}
//-------------------------------
// Verificar las preguntas completadas y activar la salida al terminar
function checkQuestions() {
  var totalAnswers = 0;
  for (i = 1; i <= activityContent.options.length; i++) {
    if (currentAnswers[i] > 0) {
      totalAnswers++;
    }
  }
  if (totalAnswers == (activityContent.options.length - 1)) {
    if (!activityContent.allowActiveCheck) {
      setActivityButtonState("#btn-endQuestion", "enabled");
    } else {
      checkAnswers();
    }
  }
}
//-------------------------------
// Verificar las preguntas correctas
function checkAnswers() {
  totalCorrect = 0;
  setActivityButtonState("#btn-endQuestion", "disabled");
  for (i = 1; i < activityContent.options.length; i++) {
    if (currentAnswers[i] == activityContent.options[i].correct) {
      totalCorrect++;
    }
  }
  if (!activityContent.allowActiveCheck) {
    exitActivity(totalCorrect, currentQuestion, currentAnswers[currentQuestion]); //Retroalimentacion final -> se debe establecer su funcionalidad en el slide correspondiente
    disableRadios();
    allCompleted = true;
  } else {
    if (totalCorrect == activityContent.options.length - 1) {
      allCompleted = true;
    }
  }
}
//-------------------------------
// deshabilitar los radio Button
function disableRadios() {
  $("[id*='radioBtn']").prop('disabled', true);
  $("[id*='" + idOptionPrefix + "']").unbind("click").addClass("disabled");
}
//-------------------------------
// deshabilitar los radio button por pregunta
function disableRadiosByQuestion() {
  $("#" + radioGroupOpt + currentQuestion + " [id*='radioBtn']").prop('disabled', true);
  $("#" + radioGroupOpt + currentQuestion + " [id*='" + idOptionPrefix + "']").unbind("click");
}
//-------------------------------
// habilitar los radio Button
function enableRadios() {
  $("[id*='" + idOptionPrefix + "']").removeClass("disabled selected");
  $("[id*='radioBtn']").prop('disabled', false);
  $("[id*='" + idOptionPrefix + "'] input[type='radio']").prop('checked', false);
  if (activityContent.allowRandom) {
    for (var i = 1; i < activityContent.options.length; i++) {
      randomDiv("#" + radioGroupOpt + i, "#" + idOptionPrefix + i + '_', activityContent.options[i].labels.length);
    }
  }
}
//-------------------------------
// Reiniciar la actividad
function resetActivity() {
  jumpTop();
  activityTimeRemaining = activityContent.activityTime;
  setDefaultSettings();
  enableRadios();
}
//-------------------------------
