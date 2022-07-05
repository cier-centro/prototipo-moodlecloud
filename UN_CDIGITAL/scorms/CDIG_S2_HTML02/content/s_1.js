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
                            <p class="mb-0">A continuación encontrarás cuatro aplicaciones con sus distintas funcionalidades. Evalúa qué tan pertinente consideras que sería que Sandra, Carolina, Julián y Sergio las empleen para comunicarse con respecto a cómo organizar sus funciones para su trabajo en equipo.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="row justify-content-between align-items-center activity-select">
                                <div class="col-12">
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <p class="mb-0"><b>WhatsApp</b></p>
                                            <p class="mb-0">Es una aplicación de mensajería instantánea que permite enviar mensajes de texto y voz, además de llamadas y videoconferencias.</p>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_1" onchange="setCurrentSelectValue(this, 1)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Pertinente</option>
                                                <option value="2">No es pertinente</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <p class="mb-0"><b>Correo electrónico</b></p>
                                            <p class="mb-0">Es un medio de comunicación digital de fácil acceso, que permite a los usuarios enviar y recibir mensajes escritos de manera electrónica.</p>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_2" onchange="setCurrentSelectValue(this, 2)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Pertinente</option>
                                                <option value="2">No es pertinente</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <p class="mb-0"><b>Plataforma de videoconferencia</b></p>
                                            <p class="mb-0">Es un sistema digital interactivo que permite a los usuarios comunicarse en tiempo real a través de vídeo, voz y texto.</p>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_3" onchange="setCurrentSelectValue(this, 3)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Pertinente</option>
                                                <option value="2">No es pertinente</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3 justify-content-evenly rounded selectOption p-2">
                                        <div class="col-12 col-md-8">
                                            <p class="mb-0"><b>Telegram</b></p>
                                            <p class="mb-0">Es una aplicación de mensajería instantánea que se enfoca en la seguridad y velocidad del intercambio de información.</p>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <select name="value_1" class="custom-select select-word rounded p-2" id="select_4" onchange="setCurrentSelectValue(this, 4)">
                                                <option value="0">Seleccione:</option>
                                                <option value="1">Pertinente</option>
                                                <option value="2">No es pertinente</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="row align-items-center justify-content-between mt-3">
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],1)" class="btn btn-nav rounded-pill shadow w-100 d-none prev" data-toggle="tooltip" title="Anterior">Anterior</button>
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
    //- Actividad Select -
    controller: "js/activity.select.js",
    //Retroalimentaciones que se muestran al terminar la actividad
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad

    activeRetro: true,
    passiveRetro: false,

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
                            <p><b>Es pertinente</b>. Esta aplicación puedes utilizarla también como aplicación de escritorio. Además, te permite compartir diferentes tipos de archivos e información (fotos, documentos, audios, vídeos, ubicación, contactos, etc). </p>
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

var totalSelect = 4;
var totalCorrect = 0;
var currentSelection = 0;
var answer = [0, 1, 1, 1, 1];
var currentAnswer = new Array(totalSelect);
var completed = new Array(totalSelect);

$(document).ready(function () {
    currentAnswer.fill(0, 0, totalSelect);
    completed.fill(0, 0, totalSelect);
});