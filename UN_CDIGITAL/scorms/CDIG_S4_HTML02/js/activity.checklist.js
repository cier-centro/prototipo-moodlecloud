//-------------------------------
//-----Actividad-Check-List------
//----------Version 1.0----------
//-------------------------------
// Actividad de Opción Múltiple con única o múltiple Respuesta usando <input type = "checkbox">
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
// al deshabilitar los btn restar total
// correct con []
// comparacion entre []
// llevar checks seleccionados
//
//-------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content) {
    activityContent = $.extend(true, {}, content);
    //funcion de activacion de la actividad
    setCheckList();
}
//-------------------------------
// Variables
//-------------------------------
//Etiqueta del marco contenedor del titulo del custionario
var CheckListTitle = "#checkListQuestions";
//Etiqueta del marco contenedor de las opciones del custionario
var CheckListOpt = "#checkListOptions";
//Etiqueta del id de los contenedores de (check-labels)
var idOptionPrefix = "#check_";
//Pregunta Actual. "1" por defecto.
var currentQuestion = 1;
//Respuestas guardadas
var currentAnswers = [];
// Flag completación de todas las preguntas
var allCompleted = false;
//-------------------------------
// Funciones
//-------------------------------
// Iniciar Actividad
function setCheckList() {
    setCurrentAnswersInitial();
    setActivityButtonState("#btn-endQuestion", "disabled");
    setActivityButtonState("#btn-resetQuestion", "disabled");
    setQuestion();
}
//-------------------------------
// Establecer Matriz de respuestas
function setCurrentAnswersInitial() {
    currentAnswers = new Array(activityContent.options.length);
    currentAnswers.fill(0, 0, activityContent.options.length);
    for (i = 0; i < activityContent.options.length; i++) {
        if (i != 0) {
            currentAnswers[i] = new Array((activityContent.options[i].labels.length));
            currentAnswers[i].fill(0, 0, activityContent.options[i].labels.length);
        }
    }
}
//-------------------------------
//Establecer pregunta actual
function setQuestion() {
    $(CheckListOpt).empty();
    createQuestion();
    setCurrentQuestionState();
    setNavigation();
    setCurrentCheckListener();
}
//-------------------------------
//Crear pregunta actual
function createQuestion() {
    $(CheckListTitle).html(activityContent.options[currentQuestion].title);
    for (i = 0; i < activityContent.options[currentQuestion].labels.length; i++) {
        $(CheckListOpt).append(
            '<div class="form-check" id="check_' + (i + 1) + '" data-toggle="tooltip" title="Opción">' +
            '<input type = "checkbox" id = "checkBtn_' + (i + 1) + '" name = "question_' + currentQuestion + '" value = "' + (i + 1) + '" class= "form-check-input" >' +
            '<label class="form-check-label" for="checkBtn_' + (i + 1) + '"></label>' +
            '</div > '
        );
    }
    for (i = 0; i < activityContent.options[currentQuestion].labels.length + 1; i++) {
        $(idOptionPrefix + i).find("label").html(activityContent.options[currentQuestion].labels[i - 1]);
    }
    if (activityContent.allowRandom) {
        randomDiv(CheckListOpt, idOptionPrefix, activityContent.options[currentQuestion].labels.length + 1);
    }
}
//-------------------------------
// Establecer estado de respuesta de la pregunta actual
function setCurrentQuestionState() {
    for (i = 0; i < currentAnswers[currentQuestion].length; i++) {
        if (currentAnswers[currentQuestion][i] == 1) {
            $('#checkBtn_' + (i + 1)).prop('checked', true);
        }
    }

    var currentAnswersRight = new Array(currentAnswers[currentQuestion].length);
    currentAnswersRight.fill(0, 0, currentAnswers[currentQuestion].length);
    for (i = 0; i < currentAnswers[currentQuestion].length; i++) {
        if (activityContent.options[currentQuestion].correct.includes(i + 1)) {
            currentAnswersRight[i] = 1;
        }
    }
    var currentAnswersAreRight = true;
    for (i = 0; i < currentAnswersRight.length; i++) {
        if (currentAnswers[currentQuestion][i] != currentAnswersRight[i]) {
            currentAnswersAreRight = false;
            break;
        }
    }
    //comparar pregunta
    if (currentAnswersAreRight && activityContent.allowActiveCheck) {
        disableChecks();
    }
    if (allCompleted) {
        console.log("allCompleted");
        disableChecks();
    }



}
//-------------------------------
// Establecer visibilidad de los botones de acuerdo a la pregunta actual
function setNavigation() {
    if (currentQuestion == activityContent.options.length - 1) {
        $("#btn-nextQuestion").addClass("disabled");
    } else {
        $("#btn-nextQuestion").removeClass("disabled");
    }

    if (currentQuestion == 1) {
        $("#btn-prevQuestion").addClass("disabled");
    }
    else {
        $("#btn-prevQuestion").removeClass("disabled");
    }
}
//-------------------------------
// Pregunta Siguiente
function nextQuestion() {
    currentQuestion++;
    setQuestion();
}
//-------------------------------
// Pregunta Anterior
function prevQuestion() {
    currentQuestion--;
    setQuestion();
}
//-------------------------------
// Establecer listener para la activacion de los check button
function setCurrentCheckListener() {
    $("input[type='checkbox']").click(function () {
        if (currentAnswers[currentQuestion][$(this).val() - 1] == 0) {
            currentAnswers[currentQuestion][$(this).val() - 1] = 1;
        } else {
            currentAnswers[currentQuestion][$(this).val() - 1] = 0;
        }
        check();
    });
}
//-------------------------------
// Verificar el check actual
function check() {
    if (activityContent.allowActiveCheck) {
        var currentAnswersRight = new Array(currentAnswers[currentQuestion].length);
        currentAnswersRight.fill(0, 0, currentAnswers[currentQuestion].length);
        for (i = 0; i < currentAnswers[currentQuestion].length; i++) {
            if (activityContent.options[currentQuestion].correct.includes(i + 1)) {
                currentAnswersRight[i] = 1;
            }
        }
        var currentAnswersAreRight = true;
        for (i = 0; i < currentAnswersRight.length; i++) {
            if (currentAnswers[currentQuestion][i] != currentAnswersRight[i]) {
                currentAnswersAreRight = false;
                break;
            }
        }
        if (currentAnswersAreRight) {
            disableChecks();
            completeQuestion(currentQuestion); //Retroalimentacion por pregunta -> se debe establecer su funcionalidad en el slide correspondiente
            checkQuestions();
            if (activityContent.allowActiveFinalCheck && allCompleted) {
                exitActivity(activityContent.options.length - 1); //Retroalimentacion final -> se debe establecer su funcionalidad en el slide correspondiente
            }
        }
    }
    else {
        checkQuestions();
    }
}
//-------------------------------
// Verificar las preguntas completadas y activar la salida al terminar
function checkQuestions() {
    var totalAnswers = 0;
    for (i = 1; i < activityContent.options.length; i++) {
        var currentAnswersTotal = currentAnswers[i].reduce((a, b) => a + b, 0);
        if (currentAnswersTotal > 0) {
            totalAnswers++;
        }
    }
    if (totalAnswers == (activityContent.options.length - 1)) {
        if (!activityContent.allowActiveCheck) {
            setActivityButtonState("#btn-endQuestion", "enabled");
        } else {
            checkAnswers();
            //disableChecks();
            //allCompleted = true;
        }
    }
}
//-------------------------------
// Verificar las preguntas correctas
function checkAnswers() {
    var totalCorrect = 0;
    setActivityButtonState("#btn-endQuestion", "disabled");
    for (i = 1; i < activityContent.options.length; i++) {
        var currentAnswersRight = new Array(currentAnswers[i].length);
        currentAnswersRight.fill(0, 0, currentAnswers[i].length);
        for (j = 0; j < currentAnswers[i].length; j++) {
            if (activityContent.options[i].correct.includes(j + 1)) {
                currentAnswersRight[j] = 1;
            }
        }
        var currentAnswersAreRight = true;
        for (j = 0; j < currentAnswersRight.length; j++) {
            if (currentAnswers[i][j] != currentAnswersRight[j]) {
                currentAnswersAreRight = false;
                break;
            }
        }
        if (currentAnswersAreRight) {
            totalCorrect++;
        }
    }
    if (!activityContent.allowActiveCheck) {
        exitActivity(totalCorrect);   //Retroalimentacion final -> se debe establecer su funcionalidad en el slide correspondiente
        disableChecks();
        allCompleted = true;
    } else {
        if (totalCorrect == activityContent.options.length - 1) {
            allCompleted = true;
        }
    }
}
//-------------------------------
// deshabilitar los Checkbox Button
function disableChecks() {
    for (i = 0; i < activityContent.options[currentQuestion].labels.length; i++) {
        $('#checkBtn_' + (i + 1)).prop('disabled', true);
    }
}
//-------------------------------
// Reiniciar la actividad
function resetActivity() {
    setCurrentAnswersInitial();
    currentQuestion = 1;
    allCompleted = false;
    setActivityButtonState("#btn-endQuestion", "disabled");
    setActivityButtonState("#btn-resetQuestion", "disabled");
    setQuestion();
}
//-------------------------------
