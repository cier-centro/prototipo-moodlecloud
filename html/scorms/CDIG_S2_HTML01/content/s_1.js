
var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12 mt-5">
            <main class="row justify-content-center content align-items-center h-100 pt-3 mt-5">
                <div class="col-12 col-md-10 col-lg-8">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-md-12">
                            <div class="bg-main rounded-enunciate p-3 mb-3">
                                <p class="text-white mb-0">
                                    Cuando necesites enviar un mensaje, o comunicarte por escrito a través de un medio digital, es importante que tengas en cuenta los siguientes aspectos:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion mt-4" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Tener claro qué quieres comunicar
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            Identifica cuál es el contexto o la situación que genera la necesidad de escribir el mensaje. Por ejemplo: si necesitas solicitar información, realizar un trámite, saludar a alguien, realizar un acuerdo con alguien, etc.
                                        </li>
                                        <li>
                                            Piensa en qué necesitas que la persona entienda cuando lea tu mensaje.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Tener en cuenta a quién te diriges
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Esto te ayudará a decidir de qué manera necesitas o quieres dirigirte a esta persona con el mensaje. Por ejemplo, si vas a escribirle a un profesor, o vas a enviar un mensaje a un correo oficial de alguna dependencia para realizar un trámite, el trato debería ser cordial y más formal; si vas a dirigirte a tus compañeros, puedes dirigirte a ellos de manera más cercana, dependiendo de la confianza que tengas con ellos. </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Identificar la herramienta o medio digital más adecuado para enviar el mensaje
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Para esto es importante que tengas claro cuál es el uso que usualmente se le da a cada una de estas herramientas y en qué tipo de situaciones suelen emplearse.</p> 
                                    <p>Por ejemplo, para dirigirte a un profesor puedes elegir un canal o plataforma institucional, pues si le envías un mensaje a su correo personal, o a través de una red social, el profesor podría confundirse acerca de quién envía el mensaje “podría perderse” entre los correos o mensajes personales del docente. </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Redacción del mensaje
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <h3>Para redactar tu mensaje ten en cuenta los siguientes aspectos:</h3>
                                    <ul>
                                        <li>El mensaje debe estar escrito con buena ortografía y con una puntuación adecuada. </li>
                                        <li>El mensaje debe ser claro. Evita oraciones o frases continuas y procura no repetir información.</li>
                                        <li>Lee el mensaje antes de enviarlo para asegurarte que está bien escrito y sea claro. </li>
                                        <li>Asegúrate que el mensaje le permita al lector comprender cuál es tu intención al contactarlo. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <nav class="btns-nav-container mt-auto">
            <div class="col-12 py-3 d-flex justify-content-around">
                <button class="btn btns-nav prev hidden" onclick="goToSlide([],1)" title="Atrás" data-toggle="tooltip">
                    Atrás
                </button>
                <button class="btn btns-nav next" onclick="goToSlide([],2)" title="Siguiente" data-toggle="tooltip">
                    Siguiente
                </button>
            </div>
        </nav>
    </div>
</div>
`;
$(document).ready(function () {
    scormData.lessonStatus = "completed";
});
