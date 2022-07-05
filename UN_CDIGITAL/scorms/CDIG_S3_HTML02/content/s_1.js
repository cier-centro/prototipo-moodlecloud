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
                            <p class="mb-0">Si alguien te pregunta cómo usar una app, un software o cualquier otra herramienta digital que ya conoces, es importante que puedas explicarle con claridad las maneras de usarla . A continuación encontrarás tres aspectos importantes a la hora de explicar a otros cómo hacer uso de herramientas digitales.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center tabs bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="tab-container row justify-content-between align-items-start">
                                <div class="col-md-4 nav nav-pills g-0" role="tablist" aria-orientation="vertical">
                                    <button id="tab-link-1" class="nav-link active" data-bs-toggle="pill" data-bs-target="#tab-1" type="button" role="tab" aria-controls="" aria-selected="true">1. Saber desde dónde empezar.</button>
                                    <button id="tab-link-2" class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-2" type="button" role="tab" aria-controls="" aria-selected="false">2. Explicar en términos que la persona conozca.</button>
                                    <button id="tab-link-3" class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-3" type="button" role="tab" aria-controls="" aria-selected="false">3. Brindar un ejemplo.</button>
                                </div>
                                <div class="col-md-8 tab-content px-md-4 align-self-center py-3 py-md-0">
                                    <div id="tab-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-link-1">
                                        <p class="mb-0">Es importante que sepas qué tanto conocimiento tiene la persona sobre el uso de esta herramienta o de otras herramientas digitales. Esto te brindará un punto de partida.</p>
                                    </div>
                                    <div id="tab-2" class="tab-pane fade" role="tabpanel" aria-labelledby="tab-link-2">
                                        <p class="mb-0">Procura no emplear términos o palabras demasiado técnicas si la persona no domina el tema. Explícale en términos sencillos y claros.</p>
                                    </div>
                                    <div id="tab-3" class="tab-pane fade" role="tabpanel" aria-labelledby="tab-link-3">
                                        <p class="mb-0">En la medida que sea posible, procura darle a la persona un ejemplo sobre cómo puede hacerlo. Por ejemplo, si alguien te pregunta cómo puede hacer para subir un archivo al Drive, podrías darle un ejemplo práctico sobre cómo hacerlo, mostrándole el paso a paso para subir un archivo.</p>
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