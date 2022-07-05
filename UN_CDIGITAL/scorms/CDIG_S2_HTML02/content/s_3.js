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
                            <p class="mb-0">A continuación encontrarás tres afirmaciones relacionadas con aplicaciones de Google que podrían emplear Sandra, Carolina, Julián y Sergio a la hora de interactuar para organizar y coordinar las actividades de su trabajo en grupo. Puedes acceder a estas aplicaciones con la cuenta de tu correo institucional. Responde “Falso” o “Verdadero” a estas afirmaciones según corresponda. </p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11 true-false-activity">
                            <div class="row">
                                <div id="sentencesContainer">
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
    allowActiveCheck: true,
    //Mostrar el estado de las respuestas (correctas - incorrectas) al finalizar la actividad (Sólo en modo pasivo -> allowActiveCheck: false)
    allowShowAnswersState: false,
    //Mostrar una retroalimentación final al terminar en el modo activo
    allowActiveFinalCheck: false,
    //Retroalimentaciones que se muestran al terminar la actividad
    //No se muestra si allowActiveFinalCheck está en false estando allowActiveCheck en true
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad
    finalFeedback: {
        correctFeedback: [``],
        incorrectFeedback: [``],
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
            label: "Google Calendar te permite programar reuniones y recibir recordatorios acerca de eventos importantes que hayas programado, o a los que hayas sido invitado, a través de una cuenta de correo de Gmail.",
            answer: "V",
            correctFeedback: [
                `
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6 col-md-4">
                    <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                </div>
                <div class="col-12 col-md-7">
                    <h2 class=""><b>¡Muy bien!</b></h2>
                    <p>Google Calendar te permite programar reuniones y recibir recordatorios acerca de eventos importantes que hayas programado, o a los que hayas sido invitado, a través de una cuenta de correo de Gmail. Tu cuenta institucional de correo electrónico tiene un acceso directo a esta aplicación.</p>
                </div>
            </div>
        `
            ],
            incorrectFeedback: [`
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6 col-md-4">
                    <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_error.png">
                </div>
                <div class="col-12 col-md-7">
                    <h2 class="mb-0"><b>¡Vuelve a intentarlo!</b></h2>
                </div>
            </div>
        `],
        },
        {
            label: "Google Meet es la plataforma de Gmail que permite almacenar, compartir y editar contenido en la nube. En esta plataforma podrás guardar diversos tipos de archivos (PDF, documentos de texto, hojas de cálculo, diapositivas, fotos, vídeos, audios, entre otros) sin preocuparte de tener memoria en el disco duro del computador o en tu celular. Tu cuenta institucional de correo electrónico de la universidad tiene acceso directo a esta plataforma.",
            answer: "F",
            correctFeedback: [
                `
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6 col-md-4">
                    <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                </div>
                <div class="col-12 col-md-7">
                    <h2><b>¡Muy bien!</b></h2>
                    <p class="mb-0">La plataforma de Gmail que permite almacenar, compartir y editar contenido en la nube es Google Drive.</p>
                </div>
            </div>
        `
            ],
            incorrectFeedback: [`
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6 col-md-4">
                    <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_error.png">
                </div>
                <div class="col-12 col-md-7">
                    <h2 class="mb-0"><b>¡Vuelve a intentarlo!</b></h2>
                </div>
            </div>
        `],
        },
        {
            label: "Google Drive es la plataforma de videoconferencias administrada por Gmail. Tu cuenta institucional de correo electrónico tiene un acceso directo a esta plataforma. Esta plataforma ofrece funcionalidades como la de compartir pantalla o añadir fondos virtuales y puedes comunicarte en tiempo real con otras personas sin importar en dónde estén.",
            answer: "F",
            correctFeedback: [
                `
                <div class="row align-items-center justify-content-evenly">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2><b>¡Muy bien!</b></h2>
                        <p class="mb-0">La plataforma de videoconferencias administrada por Gmail es Google Meet.</p>
                    </div>
                </div>
            `
            ],
            incorrectFeedback: [`
            <div class="row align-items-center justify-content-evenly">
                <div class="col-6 col-md-4">
                    <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_error.png">
                </div>
                <div class="col-12 col-md-7">
                    <h2 class="mb-0"><b>¡Vuelve a intentarlo!</b></h2>
                </div>
            </div>
        `],
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