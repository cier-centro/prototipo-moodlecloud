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
                            <p class="mb-0">Una buena manera de categorizar la información es el uso de uno o varios mapas mentales. ¿El uso de pizarras virtuales puede ser una buena alternativa para la creación y presentación de mapas mentales? Seleccione dos opciones.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="row check-activity align-items-center">
                                <div class="col-12 col-md-12">
                                    <div class="row mt-3">
                                        <div class="col-12" id="checkListOptions"></div>
                                    </div>
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
                            <button onclick="goToSlide([],1)" class="btn btn-nav rounded-pill shadow w-100 prev d-none" data-toggle="tooltip" title="Anterior">Anterior</button>
                        </div>
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],2)" class="btn btn-nav rounded-pill shadow w-100 next" data-toggle="tooltip" title="Siguiente">Siguiente</button>
                        </div>
                    </nav>
                </div>
            </main>
        </div>
    </div>
</div>
`;
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
        correctFeedback: [
            `
                <div class="row justify-content-center px-3">
                    <div class="col-6 col-md-4 bg-inv-main align-items-center d-flex">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-11 col-md-7 pt-3">
                        <p class="text-center"><b>¡Muy bien!</b></p>
                        <div class="text-start pb-3">
                            <p class="mb-0">El que se puedan hacer cambios o ajustes en una fase de ideación y planificación posibilita que se puedan explorar diversas formas de organizar, presentar o exponer la información. Este es un atributo central de este tipo de herramientas, pues, además de la facilidad de manejo, brinda una gran versatilidad de trabajo al esquematizar mapas mentales, en los cuales se puede ubicar cualquier tipo de contenido, ya sea gráfica o textual. También, el poder guardar los borradores realizados facilita tener una perspectiva amplía sobre los cambios o ajustes realizados e integrarlos para la generación de una estructura definitiva.</p>
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
                        <p class="mb-0"><b>¡Vuelve a intentarlo!</b></p>
                    </div>
                </div>
            `
        ],
    },
    //contenido del Checklist:
    //title: pregunta o titulo de cada check. Ubicacion: "#checkListQuestions".Recibe <HTML>
    //labels: contenido de las etiquetas de los combo. Ubicacion: "#checkListOptions". Recibe <HTML>
    //correct: valor esperado de cada combobox empieza en 1
    //correctActiveMessage: mensajes que aparecen por pregunta en modo activo y act/pas
    options: [0,
        {
            title:
                ``
            ,
            labels: [
                '<ol type ="a" class="mb-0" start="1"><li>No, pues este tipo de herramientas facilitan el trabajo colaborativo entre varios usuarios, y en este caso solo hay una persona realizando el trabajo.</li></ol>',
                '<ol type ="a" class="mb-0" start="2"><li>Sí, puesto que este tipo de herramientas logran almacenar gran cantidad de información para luego distribuirla de forma organizada.</li ></ol>',
                '<ol type ="a" class="mb-0" start="3"><li>Sí, puesto que este tipo de herramientas permiten organizar la información, reestructurarla cuantas veces sea necesaria.</li></ol>',
                '<ol type ="a" class="mb-0" start="4"><li>Sí, puesto que en este tipo de herramientas se pueden guardar los borradores generados como archivos hasta definir el esquema final.</li></ol>',
            ],
            correct: [3, 4],
            correctActiveMessage: ["", ""],
        },
    ],
};

// -------------------------------
// funcion de completacion de la actividad
function exitActivity(result) {
    // Para Retroalimentación Activa
    if (activityContent.allowActiveCheck) {
        //Para Retroalimentación Act/Pas
        if (activityContent.allowActiveFinalCheck) {
            $("#activityModal").on('hidden.bs.modal', function () {
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
            setActivityButtonState("#btn-resetQuestion", "enabled");
        }
    }
}

$(document).ready(function () {

});