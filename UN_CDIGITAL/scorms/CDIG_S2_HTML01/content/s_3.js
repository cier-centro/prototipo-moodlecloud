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
                            <p class="mb-0">¿Qué elementos debe contener la estructura de un mensaje (sea escrito o por audio) cuyo propósito sea requerir algo a alguien a través de medios digitales?</p>
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
                                                        <h2>1. Presentación de quien escribe el mensaje:</h2>
                                                        <p class="mb-0">Presentate con tu nombre y brinda información importante que le permita al lector del mensaje comprender quién eres, de dónde te conoce o cuál es tu rol.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card1">
                                                    <div class="d-block">
                                                        <h2>2. Descripción de la situación:</h2>
                                                        <p class="mb-0">Presenta un breve, pero claro y suficiente, contexto de la situación que te lleva a contactar a esta persona. ¿Qué pasó? ¿Qué ocurrió para que decidieras escribirle?</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card2">
                                                    <div class="d-block">
                                                        <h2>3. Especificar la inquietud o necesidad que se busca resolver. Indicar cuál es la intención del mensaje:</h2>
                                                        <p class="mb-0">Indícale a la persona qué necesitas resolver o para qué le escribes.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card3">
                                                    <div class="d-block">
                                                        <h2>4. Cierre:</h2>
                                                        <p class="mb-0">Termina el mensaje con una breve despedida.</p>
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
                            <button onclick="goToSlide([],2)" class="btn btn-nav rounded-pill shadow w-100 prev" data-toggle="tooltip" title="Anterior">Anterior</button>
                        </div>
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],4)" class="btn btn-nav rounded-pill shadow w-100 next" data-toggle="tooltip" title="Siguiente">Siguiente</button>
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
    totalCards: 4,
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