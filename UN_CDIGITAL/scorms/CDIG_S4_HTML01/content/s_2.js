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
                            <p class="mb-0">El equipo debe decidir cuál es la mejor manera para recopilar la información necesaria para su trabajo. De las siguientes propuestas y justificaciones selecciona la que mejor responde a las necesidades del equipo.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11 true-false-activity">
                            <div class="row radio-activity align-items-center justify-content-center">
                                <div class="col-12">
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-12 radio-group-question" id="radioGroupQuestions1">
                                        </div>
                                    </div>
                                    <div id="radioGroupOptions1" class="row radio-group-options justify-content-center">
                                        <div id="radioOption1_1" class="col-12 mb-0 form-check">
                                            <input class="form-check-input" type="radio" name="radioOption1_1" id="radioBtn1_1">
                                            <label class="form-check-label w-100" for="radioBtn1_1"></label>
                                        </div>
                                        <div id="radioOption1_2" class="col-12 mb-0 form-check">
                                            <input class="form-check-input" type="radio" name="radioOption1_2" id="radioBtn1_2">
                                            <label class="form-check-label w-100" for="radioBtn1_2"></label>
                                        </div>
                                        <div id="radioOption1_3" class="col-12 mb-0 form-check">
                                            <input class="form-check-input" type="radio" name="radioOption1_3" id="radioBtn1_3">
                                            <label class="form-check-label w-100" for="radioBtn1_3"></label>
                                        </div>
                                        <div id="radioOption1_4" class="col-12 mb-0 form-check">
                                            <input class="form-check-input" type="radio" name="radioOption1_4" id="radioBtn1_4">
                                            <label class="form-check-label w-100" for="radioBtn1_4"></label>
                                        </div>
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
                            <button onclick="goToSlide([],1)" class="btn btn-nav rounded-pill shadow w-100 prev" data-toggle="tooltip" title="Anterior">Anterior</button>
                        </div>
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],3)" class="btn btn-nav rounded-pill shadow w-100 next" data-toggle="tooltip" title="Siguiente">Siguiente</button>
                        </div>
                    </nav>
                </div>
            </main>
        </div>
    </div>
</div>
`;

var slideActivityContent = {
    //- Actividad Radio Group -
    controller: "js/activity.radio-group.js",
    //---Parámetros
    //Oculta los botones de control de la actividad que esten bloqueados
    hideDisabledControlButtons: false,
    //Aleatorizar el orden de las opciones
    allowRandom: false,
    //Mostrar una pregunta en la pantalla y cambiarla con los botones de anterior/siguiente
    //En false muestra todas las preguntas, funciona con más de una pregunta
    showOnlyOneQuestion: true,
    //Mostrar retroalimentación al momento de clickear la opcion (true/false)
    //En false evaluará con el btn de Verificar
    allowActiveCheck: false,
    //Validación activa/pasiva:
    //Mostrar una retroalimentación final al terminar en el modo activo
    allowActiveFinalCheck: false,
    //Retroalimentaciones que se muestran al terminar la actividad
    //No se muestra si allowActiveFinalCheck está en false estando allowActiveCheck en true
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad
    finalFeedback: {
        correctFeedback: [
            `
                <div class="row justify-content-evenly px-5">
                    <div class="col-6 col-md-3 bg-inv-main d-flex align-items-center">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-11 col-md-9 p-3">
                        <h2 class=""><b>¡Muy bien!</b></h2>
                        <div class="text-start">
                            <p class="mb-0">Daniela, además de manifestar un conocimiento y dominio de la herramienta propuesta, plantea dos aspectos fundamentales en esta fase del trabajo, puesto que se requiere que todos los integrantes del equipo tengan acceso a los archivos generados y puedan ajustarlos, a la vez que permite un mejor desempeño para el propósito de la recopilación de la información, es decir, el procesamiento de la misma.</p>
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
    //Titulo del tooltip para la pregunta
    questionTooltipTitle: "Pregunta",
    //Titulo del tooltip para las opciones
    optionTooltipTitle: "Opción",
    //contenido del Radio Group:
    //title: pregunta o titulo de cada Radio Group. Ubicacion: "#radioGroupQuestions".Recibe <HTML>
    //labels: contenido de las etiquetas de los combo. Ubicacion: "#radioGroupOptions". Recibe <HTML>
    //correct: valor esperado de cada combobox empieza en 1
    //feedbackMessages: Los mensajes que aparecen en la retroalimentación activa y act/pas
    //--Solo llenar en caso de que la actividad sea activa o act/pas
    //--Organizarlos con las mismas posiciones de los labels
    //--Si la opción correcta es la primera, el mensaje correcto debe estar en la primera posición
    //--Si el contenido de los mensajes de retroalimentación es el mismo, debe duplicarse en cada arreglo que corresponda
    options: [0,
        {
            title: `
`,
            labels: [
                '<ol type ="a" class="mb-0" start="1"><li>Jhon propone usar un Excel de google académico que les permita subir información, que después puede modificar otro integrante del equipo.</li></ol>',
                '<ol type ="a" class="mb-0" start="2"><li>Daniela opina que lo mejor es generar formularios con las herramientas de google, puesto que les permite procesar la información y brinda un acceso compartido.</li ></ol>',
                '<ol type ="a" class="mb-0" start="3"><li>Fernanda opina que es suficiente con un Excel de trabajo individual, porque esto permite que la información recopilada se mantenga reservada.</li></ol>',
                '<ol type ="a" class="mb-0" start="4"><li>Nicolás piensa que la mejor alternativa es que cada quien use la herramienta que mejor maneje, porque esto ayuda a avanzar más rápido.</li></ol>',
            ],
            correct: 2,
        },
    ],
};
// -------------------------------
// funcion de completacion de la actividad
function exitActivity(result, id, answer) {
    // Para Retroalimentación Activa
    if (activityContent.allowActiveCheck) {
        //Para Retroalimentación Act/Pas
        if (activityContent.allowActiveFinalCheck) {
            $("#activityModal").on('hidden.bs.modal', function () {
                $("#activityModal").unbind('hidden.bs.modal');
                setAndOpenModal("success", activityContent.finalFeedback);
            });
        } else {

        }
    } else {
        console.log(result + "-" + id + "-" + answer);
        // Para Retroalimentación Pasiva

        if (result == activityContent.options.length - 1) {
            setAndOpenModal("success", activityContent.finalFeedback);
        } else {
            setAndOpenModal("error", activityContent.finalFeedback);
            setActivityButtonState("#btn-resetQuestion", "enabled");
            $("#btn-resetQuestion").addClass("animate__animated");
        }
    }
}
//-------------------------------
$(document).ready(function () {

});