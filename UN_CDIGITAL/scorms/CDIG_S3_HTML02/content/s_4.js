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
                            <p class="mb-0">Teniendo en cuenta la información anterior, ¿cuál sería la mejor manera de explicarle a Nicolás cómo usar la herramienta? Escoge el escenario que consideres más adecuado, teniendo en cuenta los aspectos importantes para explicarle a alguien cómo hacer uso de herramientas y tecnologías digitales.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="row card-container justify-content-center">
                                <div class="col-12 col-lg-10">

                                    <div class="row justify-content-center">
                                        <div class="col-12">
                                            <div class="card-deck">
                                                <section class="card-item card0">
                                                    <div class="d-block">
                                                        <h2>¿Cuál es el contexto de la situación?</h2>
                                                        <p class="mb-0">Es importante que primero indagues con la persona acerca de cuál es la situación en la que tiene que compartir dicha información y qué propósito tiene al compartirla.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card1">
                                                    <div class="d-block">
                                                        <h2>¿Cuál es el mejor medio para compartir esta información?</h2>
                                                        <p class="mb-0">Teniendo en cuenta el contexto de la situación, evalúa con esta persona si podría compartir esta información a través de internet, de manera presencial pero haciendo uso de tecnologías digitales.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card2">
                                                    <div class="d-block">
                                                        <h2>¿Qué herramientas conoces tú?</h2>
                                                        <p class="mb-0">Identifica qué tecnologías o herramientas digitales conoces que podrían ser útiles para que esta persona pueda compartir la información a través del medio más adecuado.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card3">
                                                    <div class="d-block">
                                                        <h2>¿Qué otras herramientas podrían ser de utilidad?</h2>
                                                        <p class="mb-0">Investiguen juntos qué otras herramientas podrían ser útiles para esta persona. Esto les permitirá conocer nuevas herramientas, en caso que las que conozcan no sean las más adecuadas para la situación.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card4">
                                                    <div class="d-block">
                                                        <h2>¿Cuál es la herramienta más adecuada?</h2>
                                                        <p class="mb-0">Teniendo en cuenta el contexto de la situación, el medio y las herramientas digitales que podrían ser de utilidad, seleccionen la que consideren que podría ser más útil.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card5">
                                                    <div class="d-block">
                                                        <h2>¿Cómo puede usar esta persona la herramienta seleccionada?</h2>
                                                        <p class="mb-0">En este punto es importante que, si ya sabes cómo utilizar la herramienta digital que han seleccionado, explícale a la persona cómo usarla, teniendo en cuenta los aspectos importantes a la hora de explicar a otros cómo hacer uso de herramientas digitales, abordados en la actividad 1.</p>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <nav class="row align-items-center justify-content-center">
                                        <div class="col-2 col-md-1">
                                            <button type="button" class="btn btn-primary btn-progress w-100 " onclick="prevCard()">&#10094;</button>
                                        </div>
                                        <div class="col-8">
                                            <div class="progress">
                                                <div class="progress-bar" id="card-progress-bar"></div>
                                            </div>
                                        </div>
                                        <div class="col-2 col-md-1">
                                            <button type="button" class="btn btn-primary btn-progress w-100" onclick="nextCard()">&#10095;</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="row align-items-center justify-content-between mt-3">
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],3)" class="btn btn-nav rounded-pill shadow w-100 prev" data-toggle="tooltip" title="Anterior">Anterior</button>
                        </div>
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],5)" class="btn btn-nav rounded-pill shadow w-100 next" data-toggle="tooltip" title="Siguiente">Siguiente</button>
                        </div>
                    </nav>
                </div>
            </main>
        </div>
    </div>
</div>
`;

var slideActivityContent = {
    //---Actividad CARD-DECK ---
    controller: "js/activity.card-deck.js",
    //---Parámetros:
    //Total Parejas
    totalCards: 6,
    //Permitir que se oculte la ultima carta (true/false)
    hideLastCard: false,
    //Definir la distancia en pixeles que distancia cada carta del mazo.
    cardDistance: 3,
    //Saltar al final de la página para evitar el movimiento al top que tienen los dispositivos (true/false)
    jumpToEnd: true,
};
$(document).ready(function () {
    setTimeout(() => {
        var cheight = $(".card0").css("height");
        $(".card-deck").css({ height: cheight });
    }, 1500);
});