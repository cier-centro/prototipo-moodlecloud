var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-start h-100">
                <div class="col-12">
                    <header class="row">
                        <div class="col-12 col-md-4 logo-container d-flex align-items-center">
                            <img src="resources/images/img_logos.svg" alt="Competencias digitales del estudiante universitario" class="img-fluid d-flex mx-auto">
                        </div>
                        <div class="col-12 col-md-8 title-container d-flex align-items-center">
                            <div class="d-block text-center w-100 text-md-start p-3">
                                <h1>${sessionName}</h1>
                                <h2 class="mb-0">${caseName}</h2>
                            </div>
                        </div>
                    </header>
                </div>
                <div class="col-11 col-lg-10 py-3">
                    <div class="row align-items-center bg-main rounded-top p-3">
                        <div class="col-12 text-center text-white">
                            <p class="mb-0">Selecciona de las siguientes opciones cuáles son falsas y cuales son verdaderas. </p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11 true-false-activity">
                            <div class="row">
                                <div id="sentencesContainer">
                                </div>
                            </div>
                            <div class="row activity-controls justify-content-center my-3">
                                <div class="col-5 col-md-3 col-lg-2">
                                    <button onclick="checkAnswers()" class="btn btn-primary rounded-pill shadow w-100" id="btn-endQuestion" data-toggle="tooltip" title="Evaluar">Evaluar</button>
                                </div>
                                <div class="col-5 col-md-3 col-lg-2">
                                    <button onclick="resetActivity()" class="btn btn-primary rounded-pill shadow w-100 disabled" id="btn-resetQuestion" data-toggle="tooltip" title="Reiniciar">Reiniciar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="row align-items-center justify-content-between mt-3">
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],2)" class="btn btn-nav rounded-pill shadow w-100 prev" data-toggle="tooltip" title="Anterior">Anterior</button>
                        </div>
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],4)" class="btn btn-nav rounded-pill shadow w-100 next" data-toggle="tooltip" title="Siguiente">Siguiente</button>
                        </div>
                    </nav>
                </div>
            </main>
        </div>
    </div>
</div>
`;

var slideActivityContent = {
    //- Actividad True or false
    controller: "js/activity.true-false.js",
    //---Parámetros
    //Oculta los botones de control de la actividad que esten bloqueados
    hideDisabledControlButtons: false,
    //Define la distribución y clase de las afirmaciones
    sentenceClass: "col-md-8 sentence",
    //Define la distribución y clase de los botones V/F
    sentenceButtonsClass: "col-md-3 signs-container",
    //Aleatorizar el orden de las opciones
    allowRandom: false,
    //Mostrar retroalimentación al momento de clickear la opcion (true/false)
    //En false evaluará con el btn de Verificar
    allowActiveCheck: false,
    //Mostrar el estado de las respuestas (correctas - incorrectas) al finalizar la actividad (Sólo en modo pasivo -> allowActiveCheck: false)
    allowShowAnswersState: false,
    //Mostrar una retroalimentación final al terminar en el modo activo
    allowActiveFinalCheck: true,
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
                    <div class="col-11 col-md-7 pt-3 pt-md-0">
                        <h2 class=""><b>¡Muy bien!</b></h2>
                        <div class="text-start">
                            <p class="mb-0">Aunque Sebastián no cuenta con amplios conocimientos sobre el manejo de herramientas de este tipo, hoy en día existen diversas alternativas que aportan al conocimiento de ellas, su función y la forma cómo se usan, incluso estas herramientas contienen guías que describen sus características y especificaciones.</p>
                        </div>
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
                    <div class="col-11 col-md-7 pt-3 pt-md-0">
                        <h2 class="text-purple-medium mb-0"><b>¡Vuelve a intentarlo!</b></h2>
                    </div>
                </div>
            `
        ],
    },
    //OPTIONS: Es necesario para la construcción de los elementos
    //--Label: Contenido de las afirmaciones. Recibe <HTML>
    //--Answer: La respuesta de la afirmación, ingresar para verdadero -> "V" / para falso -> "F"
    //--CorrectFeedback: Retroalimentación correcta para la opción (Se muestra solo si allowActiveCheck: true)
    //--Esta variable solo se llena en la retroalimentación activa y act/pas
    //--IncorrectFeedback: Retroalimentación incorrecta para la opción (Se muestra solo si allowActiveCheck: true)
    //--Esta variable solo se llena en la retroalimentación activa y act/pas
    options: [
        {
            label: "Sebastián tiene algunos vídeos que no debería integrar a la presentación, puesto que estos pueden llegar a reemplazar su exposición.",
            answer: "F",
            correctFeedback: [``],
            incorrectFeedback: [``],
        },
        {
            label: "Aunque Natalia le ha dado a Sebastián una idea de las herramientas que le pueden servir, él también cuenta con alternativas, como tutoriales, para entender cómo manejarlas.",
            answer: "V",
            correctFeedback: [``],
            incorrectFeedback: [``],
        },
        {
            label: "Sebastián debe crear todas las gráficas que use en su presentación, no es conveniente que integre gráficas que pertenezcan a otros textos, pues los datos los debe generar él.",
            answer: "F",
            correctFeedback: [``],
            incorrectFeedback: [``],
        },
        {
            label: "Al finalizar su exposición, Sebastián no debe compartir su presentación, puesto que las herramientas que se usan para generarlas, al ser de acceso libre, no garantizan la privacidad de los archivos.",
            answer: "F",
            correctFeedback: [``],
            incorrectFeedback: [``],
        }

    ],
};

// -------------------------------
// funcion de completacion de la actividad
function exitActivity(isCorrect, id) {
    //Para Retroalimentación Activa
    if (activityContent.allowActiveCheck) {
        if (isCorrect) {
            setAndOpenModal("success", activityContent.options[id - 1]);
            $(".tf-activity #" + sentenceId + id + " .answer-sign").addClass("disabled");
        } else {
            setAndOpenModal("error", activityContent.options[id - 1]);
        }
        if (equalArrays(currentAnswers, correctAnswers)) {
            //Para Retroalimentación Activa/Pasiva
            if (activityContent.allowActiveFinalCheck) {
                $("#activityModal").on('hidden.bs.modal', function () {
                    $("#activityModal").unbind('hidden.bs.modal');
                    setAndOpenModal("success", activityContent.finalFeedback);
                    //showNextButton();

                });
            } else {
                //showNextButton();
            }
        }
    } else {
        // Para Retroalimentación Pasiva
        if (isCorrect) {
            $('#activityModal').find('.modal-dialog').removeClass('modal-lg');
            $('#activityModal').find('.modal-dialog').addClass('modal-xl');
            $("#activityModal").on('hidden.bs.modal', function () {
                $('#activityModal').find('.modal-dialog').removeClass('modal-xl');
                $('#activityModal').find('.modal-dialog').addClass('modal-lg');
            });
            advanceButtonsArray[2] = 1;
            setAndOpenModal("success", activityContent.finalFeedback);
        } else {
            setAndOpenModal("error", activityContent.finalFeedback);
            setActivityButtonState("#btn-resetQuestion", "enabled");
        }
    }
}

$(document).ready(function () {
});