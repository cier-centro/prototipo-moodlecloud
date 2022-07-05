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
                            <p class="mb-0">Cuando necesites enviar un mensaje, o comunicarte por escrito a través de un medio digital, es importante que tengas en cuenta los siguientes aspectos:</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="accordion mt-4" id="accordionContainer">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <p>Tener claro qué quieres comunicar</p>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionContainer">
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
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionContainer">
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
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionContainer">
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
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionContainer">
                                        <div class="accordion-body">
                                            <p>Para redactar tu mensaje ten en cuenta los siguientes aspectos:</p>
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
}


$(document).ready(function () {
});