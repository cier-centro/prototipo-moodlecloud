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
                            <p class="mb-0">Tatiana cuenta con dos herramientas para realizar las gráficas de los resultados obtenidos de las variables propuestas en su trabajo: hojas de cálculo y Scilab. Estas herramientas le permiten procesar los datos y expresarlos en gráficas. Teniendo en cuenta esto, selecciona de cada lista desplegable cuáles son acertadas o no al utilizar estas herramientas.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="row justify-content-between align-items-center activity-select">
                                <div class="col-12">
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="1">
                                                <li>Tatiana no necesita las gráficas, puesto que estas herramientas pueden ejecutar estos procedimientos con solo insertar los datos.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_1" onchange="setCurrentSelectValue(this, 1)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Acertada</option>
                                                <option value="2">Equivocada </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="2">
                                                <li>Decidió ajustar a un solo modelo de gráfica todos los resultados para presentarlos, pues esto hace que su texto se vea de manera uniforme y coherente.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_2" onchange="setCurrentSelectValue(this, 2)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Acertada</option>
                                                <option value="2">Equivocada </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="3">
                                                <li>Teniendo en cuenta que ella no tiene gran conocimiento de estas herramientas, ha decidido explorarlas para escoger la que se ajuste mejor a su capacidad de manejo.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_3" onchange="setCurrentSelectValue(this, 3)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Acertada</option>
                                                <option value="2">Equivocada </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="4">
                                                <li>Uno de los criterios que ha tenido en cuenta para escoger la herramienta que usará es que le permita, de manera sencilla, poder exportar las gráficas generadas a los distintos recursos que debe realizar.</li>
                                            </ol>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_4" onchange="setCurrentSelectValue(this, 4)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Acertada</option>
                                                <option value="2">Equivocada </option>
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
                            <button onclick="goToSlide([],1)" class="btn btn-nav rounded-pill shadow w-100 d-none next" data-toggle="tooltip" title="Siguiente">Siguiente</button>
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
            correctFeedback: [``],
            incorrectFeedback: [``],
        },
        {
            correctFeedback: [``],
            incorrectFeedback: [``],
        },
        {
            correctFeedback: [``],
            incorrectFeedback: [``],
        },
        {
            correctFeedback: [``],
            incorrectFeedback: [``],
        },
    ],


    finalFeedback: {
        correctFeedback: [
            `
                <div class="row align-items-center justify-content-center">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2><b>¡Muy bien!</b></h2>
                        <p class="mb-0">Hoy en día existen diversas herramientas que contribuyen a la construcción de distintos tipos de recursos digitales, explorar varias opciones y establecer parámetros de uso, que vayan desde la utilidad y el nivel de conocimiento o manejo de ellas son factores apropiados para decidir cuál es la herramienta más conveniente en los trabajos académicos que se realicen, y que estén mediados por el uso de estas herramientas.</p>
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
var answer = [0, 1, 1, 2, 2];
var currentAnswer = new Array(totalSelect);
var completed = new Array(totalSelect);

$(document).ready(function () {
    currentAnswer.fill(0, 0, totalSelect);
    completed.fill(0, 0, totalSelect);
    scormData.lessonStatus = "completed";
});