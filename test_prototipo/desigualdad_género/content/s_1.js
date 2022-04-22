
var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-11 col-lg-10">
                    <div class="row align-items-center justify-content-between bg-sec-light p-3 ">
                        <div class="col-3 col-lg-2">
                            <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act.png">
                        </div>
                        <div class="col-9 col-lg-10">
                            <p>Ingresa al siguiente enlace, consulta cuáles son los GII por países y a nivel global, identifica el GII de Colombia y responde la pregunta:</p>
                            <p><a href="https://www.arcgis.com/apps/Cascade/index.html?appid=a06bb4f423df453baf11ab7bbcae51f2" target="_blank">https://www.arcgis.com/apps/Cascade/index.html?appid=a06bb4f423df453baf11ab7bbcae51f2</a></p>
                        </div>
                    </div>
                    <div class="row radio-activity align-items-center justify-content-center">
                        <div class="col-12 ">
                            <div class="row align-items-center justify-content-center bg-sec-dark p-3 mb-3">
                                <div class="col-12 col-md-8 radio-group-question" id="radioGroupQuestions1">
                                </div>
                            </div>
                            <div id="radioGroupOptions1" class="row radio-group-options justify-content-center">
                                <div id="radioOption1_1" class="col-12 col-md-8 mb-0 form-check">
                                    <input class="form-check-input" type="radio" name="radioOption1_1" id="radioBtn1_1">
                                    <label class="form-check-label w-100" for="radioBtn1_1"></label>
                                </div>
                                <div id="radioOption1_2" class="col-12 col-md-8 mb-0 form-check">
                                    <input class="form-check-input" type="radio" name="radioOption1_2" id="radioBtn1_2">
                                    <label class="form-check-label w-100" for="radioBtn1_2"></label>
                                </div>
                                <div id="radioOption1_3" class="col-12 col-md-8 mb-0 form-check">
                                    <input class="form-check-input" type="radio" name="radioOption1_3" id="radioBtn1_3">
                                    <label class="form-check-label w-100" for="radioBtn1_3"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row activity-controls justify-content-center my-3">
                        <div class="col-3 col-lg-2">
                            <button onclick="checkAnswers()" class="btn btn-primary rounded-pill shadow w-100" id="btn-endQuestion" data-toggle="tooltip" title="Evaluar">Evaluar</button>
                        </div>
                        <div class="col-3 col-lg-2">
                            <button onclick="resetActivity()" class="btn btn-primary rounded-pill shadow w-100 disabled" id="btn-resetQuestion" data-toggle="tooltip" title="Reiniciar">Reiniciar</button>
                        </div>
                    </div>
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
                <div class="row align-items-center justify-content-evenly">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2 class=""><b>¡Muy bien!</b></h2>
                        <p>Ya puedes continuar con la exploración del siguiente tema.</p>
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
                <p>¿Cuál es el Índice de Desigualdad de Género de Colombia y qué implica?</p>
            `,
            labels: [
                "<p><span class='letter'>a. </span>El índice es de 0.38, lo que implica que aún existen muchas barreras para alcanzar la igualdad de género.</p>",
                "<p><span class='letter'>b. </span>El índice es de 0.50, lo que implica que estamos alcanzando la igualdad de género muy rápido.</p>",
                "<p><span class='letter'>c. </span>El índice es de 0.04, lo que implica que la desigualdad es muy alta y se debe trabajar para superarla.</p>",
            ],
            correct: 1,
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
    scormData.lessonStatus = "completed";
});
