var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-11 col-lg-10">
                    <div class="row align-items-center my-3">
                        <div class="col-12 text-center position-relative">
                            <div class="bg-main rounded-pill text-dialog-gray p-3">
                                <p class="text-white mb-0">Completa el enunciado con las palabras adecuadas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row complete-text-activity align-items-center">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12" id="incompleteText"></div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div id="textButtonOptions" class="row text-center">
                                    </div>
                                </div>
                            </div>
                            <div id="completeTextActivityControls" class="row activity-controls justify-content-center mt-3">
                                <div class="col-5 col-lg-2">
                                    <button onclick="checkAnswers()" class="btn btn-primary rounded-pill shadow w-100" id="btn-endQuestion" data-toggle="tooltip" title="Evaluar">Evaluar</button>
                                </div>
                                <div class="col-5 col-lg-2">
                                    <button onclick="resetActivity()" class="btn btn-primary rounded-pill shadow w-100" id="btn-resetQuestion" data-toggle="tooltip" title="Reiniciar">Reiniciar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
`;
var slideActivityContent = {
    //- Actividad Complete Text -
    controller: "js/activity.complete-text.js",
    //---Parámetros
    //Oculta los botones de control de la actividad que esten bloqueados
    hideDisabledControlButtons: false,
    //Seleccionar tipo de Actividad
    //1 - De botón a campo
    //2 - De campo a botón
    //3 - Mixto
    type: 3,
    //Aleatorizar el orden de las opciones
    allowRandom: true,
    //Mostrar retroalimentación al momento de emparejar campo con texto
    //En false evaluará con el btn de Finalizar (Validación pasiva)
    allowActiveCheck: false,
    //Validación activa/pasiva:
    //Mostrar una retroalimentación final al terminar en el modo activo, disponible si allowActiveCheck está activo (true)
    allowActiveFinalCheck: false,
    //Retroalimentaciones que se muestran al terminar la actividad
    //No se muestra si allowActiveFinalCheck está en false estando allowActiveCheck en true
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad
    finalFeedback: {
        correctFeedback: [
            `
                <div class="row align-items-center justify-content-evenly">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2 class=""><b>¡Muy bien!</b></h2>
                        <p></p>
                    </div>
                </div>
            `
        ],
        incorrectFeedback: [
            `
                <div class="row align-items-center justify-content-evenly">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_error.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2 class="text-purple-medium"><b>¡Vuelve a intentarlo!</b></h2>
                        <p></p>
                    </div>
                </div>
            `
        ],
    },
    //Muestra los popups dependiendo el valor de la respuesta
    //Disponible si allowActiveCheck está activo (true)
    //1 - Solo popups correctos por respuesta
    //2 - Solo popups incorrectos por respuesta
    //3 - Popups correctos e incorrectos
    answerModal: 3,
    //Clase (distribución) de los contenedores de los botones de texto
    buttonContainerClass: "col-6 col-lg-3 mb-1 mb-lg-3",
    //Arreglo de frases para construir el texto:
    //firstPhrase: Frase inicial antes de la palabra oculta (opcional).
    //hiddenWord: Palabra que se va a ocultar en la actividad y que aparecerá como botón de texto.
    //lastPhrase: Frase final después de la palabra oculta (opcional).
    //feedbackMessages: Arreglo de mensajes (correctos/incorrectos) que se muestran por palabra si allowActiveCheck está en true
    options: [
    {
        firstPhrase: "Los ",
        hiddenWord: "colores ",
        lastPhrase: "primarios ",
        feedbackMessages: [
        ["", ""],
        ["", ""],
        ],
    },
    {
        firstPhrase: "son: ",
        hiddenWord: "amarillo ",
        lastPhrase: ", azul ",
        feedbackMessages: [
        ["", ""],
        ["", ""],
        ],
    },
    {
        firstPhrase: "y ",
        hiddenWord: "rojo",
        lastPhrase: ".",
        feedbackMessages: [
        ["", ""],
        ["", ""],
        ],
    }

    ],
    //Permite poner palabras falsas dentro de las opciones
    allowFakeWorks: true,
    //Listado de palabras falsas
    fakewords: ["verde", "naranja"],
};

function exitActivity(result) {
    // Para Retroalimentación Activa
    if (activityContent.allowActiveCheck){
      //Para Retroalimentación Act/Pas
      if (activityContent.allowActiveFinalCheck) {
        $("#activityModal").on('hidden.bs.modal', function() {
          $("#activityModal").unbind('hidden.bs.modal');
          setAndOpenModal("success", activityContent.finalFeedback);
          showNextButton();
        });
      } else {
        showNextButton();
      }
    } else {
    // Para Retroalimentación Pasiva
      if (result == activityContent.options.length) {
        setAndOpenModal("success", activityContent.finalFeedback);
        $("#nextControlButton").removeClass("hidden");
      }
      else {
        setAndOpenModal("error", activityContent.finalFeedback);
        setActivityButtonState("#btn-resetQuestion","enabled");
        //$("#nextControlButton").removeClass("hidden");
      }
    }
}


$(document).ready(function () {
    scormData.lessonStatus = "completed";
});