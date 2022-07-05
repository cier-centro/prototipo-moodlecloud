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
                            <p class="mb-0">Nicolás le pide a Jhon que le enseñe cómo proyectar una presentación en diapositivas en una reunión virtual. A continuación encontrarás tres pestañas con posibles escenarios en los que Jhon le explica a Nicolás cómo hacerlo.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center tabs bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="tab-container row justify-content-between align-items-start">
                                <div class="col-md-4 nav nav-pills g-0" role="tablist" aria-orientation="vertical">
                                    <button id="tab-link-1" class="nav-link active" data-bs-toggle="pill" data-bs-target="#tab-1" type="button" role="tab" aria-controls="" aria-selected="true">Escenario a</button>
                                    <button id="tab-link-2" class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-2" type="button" role="tab" aria-controls="" aria-selected="false">Escenario b</button>
                                    <button id="tab-link-3" class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-3" type="button" role="tab" aria-controls="" aria-selected="false">Escenario c</button>
                                </div>
                                <div class="col-md-8 tab-content px-md-4 align-self-center py-3 py-md-0">
                                    <div id="tab-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-link-1">
                                        <ol type="a" class="mb-0">
                                            <li class="mb-0">Nico, simplemente cuando tengas abierta la videollamada dale click en la flecha hacia arriba y listo.</li>
                                        </ol>
                                    </div>
                                    <div id="tab-2" class="tab-pane fade py-2" role="tabpanel" aria-labelledby="tab-link-2">
                                        <ol type="a" start="2" class="mb-0">
                                            <li class="mb-0">
                                                <p class="mb-0">- Nico, ¿lo has intentado antes? ¿Qué tanto sabes sobre el tema?</p>
                                                <p class="mb-0">- ¡No tengo ni idea!</p>
                                                <p>- Ok, entonces voy a mostrarte cómo puedes hacerlo. Voy a generar el enlace de la videollamada para que puedas ver cómo se hace.</p>
                                                <p>Mira, ya estando conectado en la videollamada, en la parte inferior haz click en esta opción que dice “Compartir ahora”, y tiene este ícono: (Una flecha hacia arriba dentro de un cuadrado).</p>
                                                <p>Luego, de dar click allí, se van a desplegar estas opciones:</p>
                                                <p class="mb-0">- Compartir pantalla completa</p>
                                                <p class="mb-0">- Compartir una ventana</p>
                                                <p>- Compartir una pestaña</p>
                                                <p class="mb-0">Escoge la que consideres adecuada, dando click sobre ella, y luego da click en la opción “compartir ahora”, que la encuentras en la parte inferior derecha.</p>
                                            </li>
                                        </ol>
                                    </div>
                                    <div id="tab-3" class="tab-pane fade py-2" role="tabpanel" aria-labelledby="tab-link-3">
                                        <ol type="a" start="3" class="mb-0">
                                            <li class="mb-0">
                                                <p>Nico, déjame mostrarte cómo puedes hacerlo (Entran a una videollamada para que Juan pueda mostrarle a Pablo cómo hacerlo).</p>
                                                <p class="mb-0">Mira, luego de entrar a la videollamada, vas a encontrar una opción que dice “compartir ahora” en la parte inferior izquierda. Dale click allí y selecciona qué quieres compartir: Pantalla completa, una pestaña o una ventana. Luego da click en “compartir ahora” y ¡listo!</p>
                                            </li>
                                        </ol>
                                    </div>
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
}


$(document).ready(function () {
});