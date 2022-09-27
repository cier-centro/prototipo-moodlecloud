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
                            <p class="mb-0">La señal de internet de Felipe es intermitente, lo que le impide trabajar simultáneamente de manera adecuada con su compañero y compañeras. Para evitar que esta situación se convierta en un obstáculo al trabajo en equipo, se proponen varias alternativas. Identifique cuál de ellas es la más apropiada y cuáles las menos apropiadas.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="row justify-content-between align-items-center activity-select">
                                <div class="col-12">
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="1">
                                                <li>Realizar una llamada telefónica, en la cual su compañero le puede ir comentando las decisiones que se toman, de esta manera Felipe puede hacer aportes simultáneos.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_1" onchange="setCurrentSelectValue(this, 1)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Más apropiada</option>
                                                <option value="2">Menos apropiada</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="2">
                                                <li>Se establecen parámetros de presentación a tener en cuenta, para que Felipe pueda realizar ajustes o comentarios posteriores.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_2" onchange="setCurrentSelectValue(this, 2)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Más apropiada</option>
                                                <option value="2">Menos apropiada</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="3">
                                                <li>Establecer los parámetros de realización del esquema, para compartirle la propuesta a Felipe y pueda hacer comentarios o ajustes posteriores.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_3" onchange="setCurrentSelectValue(this, 3)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Más apropiada</option>
                                                <option value="2">Menos apropiada</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="4">
                                                <li>Escuchar previamente los aportes propuestos por Felipe, para que el resto del equipo los tenga en cuenta al momento de realizar el esquema.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_4" onchange="setCurrentSelectValue(this, 4)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Más apropiada</option>
                                                <option value="2">Menos apropiada</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="row align-items-center justify-content-between mt-3">
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],4)" class="btn btn-nav rounded-pill shadow w-100 prev" data-toggle="tooltip" title="Anterior">Anterior</button>
                        </div>
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],1); parent.window.close()" class="btn btn-nav rounded-pill shadow w-100 next" data-toggle="tooltip" title="Finalizar">Finalizar</button>
                        </div>
                    </nav>
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

    activeRetro: false,
    passiveRetro: true,

    feedback: [0,
        {
            correctFeedback: [
                `

`
            ],
            incorrectFeedback: [
                `

`
            ],
        },
        {
            correctFeedback: [
                `

`
            ],
            incorrectFeedback: [
                `

`
            ],
        },
        {
            correctFeedback: [
                `

`
            ],
            incorrectFeedback: [
                `

`
            ],
        },
        {
            correctFeedback: [
                `

`
            ],
            incorrectFeedback: [
                `

`
            ],
        },
    ],


    finalFeedback: {
        correctFeedback: [
            `
                <div class="row align-items-center justify-content-evenly">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2><b>¡Muy bien!</b></h2>
                        <p class="mb-0">La opción más apropiada plantea una solución que, además de establecer los acuerdos de construcción del trabajo para realizarlo de manera coherente, permite que todos los integrantes del equipo puedan realizar sus aportes de manera coordinada y congruente con el propósito del trabajo, sin necesidad que todos trabajen al mismo tiempo sobre el archivo, sorteando la dificultad técnica surgida.</p>
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

var totalSelect = 4;
var totalCorrect = 0;
var currentSelection = 0;
var answer = [0, 2, 2, 1, 2];
var currentAnswer = new Array(totalSelect);
var completed = new Array(totalSelect);

$(document).ready(function () {
    currentAnswer.fill(0, 0, totalSelect);
    completed.fill(0, 0, totalSelect);
    scormData.lessonStatus = "completed";
});