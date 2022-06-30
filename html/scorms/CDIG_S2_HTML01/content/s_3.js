var slideTitle = "";
var slideContent = `
<div class="col-12 mt-5">
    <div class="row h-100 main-content mt-5">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-12 col-md-10 col-lg-8">
                    <div class="row align-items-center my-3">
                        <div class="col-12 text-center position-relative">
                            <div class="bg-main rounded-enunciate p-3">
                                <p class="text-white mb-0">¿Qué elementos debe contener la estructura de un mensaje (sea escrito o por audio) cuyo propósito sea requerir algo a alguien a través de medios digitales?</p>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3 card-container mb-5 justify-content-center">
                        <div class="col-12 col-lg-10">
                            <nav class="row align-items-center mb-3">
                                <div class="col-2">
                                    <button type="button" class="btn btn-secondary float-end" onclick="prevCard()">&#10094;</button>
                                </div>
                                <div class="col-8">
                                    <div class="progress">
                                        <div class="progress-bar" id="card-progress-bar"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-secondary" onclick="nextCard()">&#10095;</button>
                                </div>
                            </nav>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="card-deck">
                                        <section class="card-item card0">
                                            <h3>Presentación de quien escribe el mensaje: </h3>
                                            <p>
                                                Presentate con tu nombre y brinda información importante que le permita al lector del mensaje comprender quién eres, de dónde te conoce o cuál es tu rol.
                                            </p>
                                            
                                        </section>
                                        <section class="card-item card1">
                                            <h3>Descripción de la situación: </h3>
                                            <p>
                                                Presenta un breve, pero claro y suficiente, contexto de la situación que te lleva a contactar a esta persona. ¿Qué pasó? ¿Qué ocurrió para que decidieras escribirle?
                                            </p>
                                        </section>
                                        <section class="card-item card2">
                                            <h3>Especificar la inquietud o necesidad que se busca resolver. Indicar cuál es la intención del mensaje:</h3>
                                            <p>
                                                Indícale a la persona qué necesitas resolver o para qué le escribes. 
                                            </p>
                                        </section>
                                        <section class="card-item card3">
                                            <h3>Cierre:</h3>
                                            <p>
                                                Termina el mensaje con una breve despedida. 
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <nav class="btns-nav-container mt-auto">
            <div class="col-12 py-3 d-flex justify-content-around">
                <button class="btn btns-nav prev" onclick="goToSlide([],2)" title="Atrás" data-toggle="tooltip">
                    Atrás
                </button>
                <button class="btn btns-nav next" onclick="goToSlide([],4)" title="Siguiente" data-toggle="tooltip">
                    Siguiente
                </button>
            </div>
        </nav>
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
    cardDistance: 5,
    //Saltar al final de la página para evitar el movimiento al top que tienen los dispositivos (true/false)
    jumpToEnd: true,
};

$(document).ready(function () {
    setTimeout(() => {
        var cheight = $(".card0").css("height");
        $(".card-deck").css({ height: cheight });
    }, 1500);
    scormData.lessonStatus = "completed";
});
