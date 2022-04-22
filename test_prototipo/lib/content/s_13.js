var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-11 col-lg-10">
                    <div class="row align-items-center">
                        <div class="col-12 text-center">
                            <div class="bg-main rounded-pill p-3 mb-3">
                                <p class="text-white mb-0">Identifica el tipo de color</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between align-items-center activity-select">
                        <div class="col-12">
                            <div class="row align-items-center mb-3 justify-content-evenly">
                                <div class="col-12 col-md-7 text-center">
                                    <div class="rounded bg-green-light p-3">
                                        Amarillo
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <select name="value_1" class="custom-select select-word shadow rounded p-3" id="select_1" onchange="setCurrentSelectValue(this, 1)">
                                        <option value="0">Seleccione:</option>
                                        <option value="1">Primario</option>
                                        <option value="2">Secundario</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row align-items-center mb-3 justify-content-evenly">
                                <div class="col-12 col-md-7 text-center">
                                    <div class="rounded bg-green-light p-3">
                                        Verde
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <select name="value_2" class="custom-select select-word shadow rounded p-3" id="select_2" onchange="setCurrentSelectValue(this, 2)">
                                        <option value="0">Seleccione:</option>
                                        <option value="1">Primario</option>
                                        <option value="2">Secundario</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row align-items-center mb-3 justify-content-evenly">
                                <div class="col-12 col-md-7 text-center">
                                    <div class="rounded bg-green-light p-3">
                                        Azul
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <select name="value_3" class="custom-select select-word shadow rounded p-3" id="select_3" onchange="setCurrentSelectValue(this, 3)">
                                        <option value="0">Seleccione:</option>
                                        <option value="1">Primario</option>
                                        <option value="2">Secundario</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row activity-controls justify-content-center mt-3 d-none">
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
    //- Actividad Select -
    controller: "js/activity.select.js",
    //Retroalimentaciones que se muestran al terminar la actividad
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad

    passiveRetro:true,

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
};

isAudioPlayed = false;

var totalSelect = 3;
var totalCorrect = 0;
var currentSelection = 0;
var answer = [0, 1, 2, 1];
var currentAnswer = new Array(totalSelect);
var completed = new Array(totalSelect);

$(document).ready(function () {
   currentAnswer.fill(0, 0, totalSelect);
   completed.fill(0, 0, totalSelect);
   scormData.lessonStatus = "completed";
});

