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
                            <p class="mb-0">Al momento de realizar la consolidación de la información recopilada, el equipo de trabajo programa una reunión virtual. Lee los siguientes aspectos y selecciona de cada lista desplegable cuáles son los parámetros más apropiados y menos apropiados para optimizar esta reunión.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="row justify-content-between align-items-center activity-select">
                                <div class="col-12">
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <ol type="a" class="mb-0" start="1">
                                                <li>En esta reunión los integrantes del equipo deberían ponerse de acuerdo en cómo estructurar el trabajo para que cada uno suba la parte que le corresponda. </li>
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
                                                <li>En esta reunión los integrantes del equipo deberían ponerse de acuerdo en la estructura del texto e integrar de manera simultánea la información correspondiente.</li>
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
                                                <li>En esta reunión los integrantes del equipo deberían acordar la estructura del texto, los aspectos que deben tener en cuenta al momento de cargar la información y la forma de hacerlo.</li>
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
                                                <li>En esta reunión los integrantes del equipo deberían acordar la forma en que la información debe ser integrada y cómo cargar las evidencias en el documento.</li>
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
                            <button onclick="goToSlide([],3)" class="btn btn-nav rounded-pill shadow w-100 prev" data-toggle="tooltip" title="Anterior">Anterior</button>
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
correctFeedback: [
`
<div class="row align-items-center justify-content-evenly">
    <div class="col-6 col-md-4">
        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
    </div>
    <div class="col-12 col-md-7">
        <h2 class=""><b>¡Muy bien!</b></h2>
        <p>Si bien cada una de las opciones plantea acciones que pueden llegar a ser resueltas en la reunión, es importante recordar que en estos casos el uso de las herramientas digitales debe estar orientado a la optimización de las actividades y tiempos de los integrantes del equipo, por lo tanto, las opciones más apropiadas plantean acciones convenientes para el desarrollo de los dos aspectos mencionados. </p>
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
{
correctFeedback: [
`
<div class="row align-items-center justify-content-evenly">
    <div class="col-6 col-md-4">
        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
    </div>
    <div class="col-12 col-md-7">
        <h2 class=""><b>¡Muy bien!</b></h2>
        <p><b>Es pertinente</b>. Esta herramienta también te permite adjuntar distintos tipos de archivos y tiene algunas otras funciones generales, como la posibilidad de organizar los mensajes a través de carpetas, etiquetas, etc; chat, el acceso a otras aplicaciones, entre otros.</p>
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
{
correctFeedback: [
`
<div class="row align-items-center justify-content-evenly">
    <div class="col-6 col-md-4">
        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
    </div>
    <div class="col-12 col-md-7">
        <h2 class=""><b>¡Muy bien!</b></h2>
        <p><b>Es pertinente</b>. Esta plataforma también tiene funciones como la de poder compartir el contenido de tu pantalla con otros usuarios, chatear con ellos, entre otras. </p>
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
{
correctFeedback: [
`
<div class="row align-items-center justify-content-evenly">
    <div class="col-6 col-md-4">
        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
    </div>
    <div class="col-12 col-md-7">
        <h2 class=""><b>¡Muy bien!</b></h2>
        <p><b>Es pertinente</b>. Esta aplicación te permite realizar llamadas y videoconferencias, además de enviar distintos tipos de archivos. No necesitas tener un número de teléfono asociado a la aplicación para poder usarla.</p>
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
],


finalFeedback: {
correctFeedback: [
`
<div class="row align-items-center justify-content-evenly">
    <div class="col-6 col-md-4">
        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
    </div>
    <div class="col-12 col-md-7">
        <h2 class=""><b>¡Muy bien!</b></h2>
        <p>Si bien cada una de las opciones plantea acciones que pueden llegar a ser resueltas en la reunión, es importante recordar que en estos casos el uso de las herramientas digitales debe estar orientado a la optimización de las actividades y tiempos de los integrantes del equipo, por lo tanto, las opciones más apropiadas plantean acciones convenientes para el desarrollo de los dos aspectos mencionados.</p>
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
var answer = [0, 1, 2, 1, 2];
var currentAnswer = new Array(totalSelect);
var completed = new Array(totalSelect);

$(document).ready(function () {
currentAnswer.fill(0, 0, totalSelect);
completed.fill(0, 0, totalSelect);
scormData.lessonStatus = "completed";
});