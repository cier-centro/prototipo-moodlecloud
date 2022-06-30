var slideTitle = "Opción Múltiple múltiple respuesta";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12 mt-5">
            <main class="row justify-content-center content align-items-center h-100 pt-3 mt-5">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="row check-activity align-items-center">
                        <div class="col-12 col-md-12">
                          <div class="row">
                            <div class="col-sm-12" id="checkListQuestions"></div>
                          </div>
                          <div class="row">
                              <div class="col-sm-11 offset-sm-1" id="checkListOptions"></div>
                          </div>
                          <div id="checkActivityControls" class="row mt-5 activity-controls">
                            <div class="col-12 d-flex justify-content-center">
                              <button onclick="checkAnswers()" class="btn btn-secondary" id="btn-endQuestion" data-toggle="tooltip" title="Evaluar">Evaluar</button>
                              <button onclick="resetActivity()" class="btn btn-secondary" id="btn-resetQuestion" data-toggle="tooltip" title="Reiniciar">Reiniciar</button>
                              <button onclick="openHelp()" id="btn-help" class="btn btn-secondary" data-toggle="tooltip" title="Ayuda">Ayuda</button>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 p-5 text-center mt-5 rounded">
                        <div class="row justify-content-center align-items-center">
                            <div class="text-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <nav class="btns-nav-container mt-auto">
            <div class="col-12 py-3 d-flex justify-content-around">
                <button class="btn btns-nav prev" onclick="goToSlide([],1)" title="Atrás" data-toggle="tooltip">
                    Atrás
                </button>
                <button class="btn btns-nav next" onclick="goToSlide([],3)" title="Siguiente" data-toggle="tooltip">
                    Siguiente
                </button>
            </div>
        </nav>
    </div>
</div>
`;
var slideActivityContent = {};

var messages = [
    {
        titleImg: "img_text_audio_big",
        body:
        `
        `
    },
    {
        titleImg: "img_text_audio_big",
        body:
        `
        `
    },
];

var lastModalId = 100;
isAudioPlayed = false;


var slideActivityContent = {
    //- Actividad Checklist -
    controller: "js/activity.checklist.js",
    //---Parámetros
    //Oculta los botones de control de la actividad que esten bloqueados
    hideDisabledControlButtons: false,
    //Aleatorizar el orden de las opciones
    allowRandom: false,
    //Mostrar retroalimentación al momento de clickear la opcion (true/false)
    //En false evaluará con el btn de Verificar
    allowActiveCheck: false,
    //Validación activa/pasiva:
    //Mostrar una retroalimentación final al terminar en el modo activo
    allowActiveFinalCheck: true,
    //Retroalimentaciones que se muestran al terminar la actividad
    //No se muestra si allowActiveFinalCheck está en false estando allowActiveCheck en true
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad
    finalFeedback: {
        correctFeedback: ["",""],
        incorrectFeedback: ["¡Muy bien!", "Porque ambos son medios formales para dirigirse de manera asertiva al docente. Tatiana puede ingresar con su usuario de la universidad y escribir a la cuenta institucional del docente."],
    },
    //contenido del Checklist:
    //title: pregunta o titulo de cada check. Ubicacion: "#checkListQuestions".Recibe <HTML>
    //labels: contenido de las etiquetas de los combo. Ubicacion: "#checkListOptions". Recibe <HTML>
    //correct: valor esperado de cada combobox empieza en 1
    //correctActiveMessage: mensajes que aparecen por pregunta en modo activo y act/pas
    options: [0,
      { title: "<div class='bg-main rounded-enunciate p-3 mb-3'><p class='text-white mb-0'>Marque las dos opciones que considere correctas.</p></div><p class='lead'>¿Qué aplicaciones, plataformas y/o medios digitales serían pertinentes para que Tatiana contacte a su profesor?</p>",
        labels: ["Chat de Moodle",
                "WhatsApp",
                "Facebook",
                "Correo electrónico institucional",
                "Google Calendar",
                "Microsoft Cloud"],
        correct: [1, 4],
        correctActiveMessage: ["¡Muy bien!", "Porque ambos son medios formales para dirigirse de manera asertiva al docente. Tatiana puede ingresar con su usuario de la universidad y escribir a la cuenta institucional del docente."],
      },
    ],
  };
  // -------------------------------
  // funcion de completacion para cada opción de pregunta
  function completeQuestion(id) {
    var feedbackModalMessages = {};
    feedbackModalMessages.correctFeedback = activityContent.options[id].correctActiveMessage;
    feedbackModalMessages.incorrectFeedback = ["",""];
    setAndOpenModal("success", feedbackModalMessages);
  }
  // -------------------------------
  // funcion de completacion de la actividad
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
      if (result == activityContent.options.length - 1) {
        setAndOpenModal("success", activityContent.finalFeedback);
        showNextButton();
      }
      else {
        setAndOpenModal("error", activityContent.finalFeedback);
        setActivityButtonState("#btn-resetQuestion","enabled");
      }
    }
}