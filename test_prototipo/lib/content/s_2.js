var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-11 col-lg-10">
                    <div class="row align-items-center my-3">
                        <div class="col-12 text-center position-relative">
                            <div class="bg-main rounded-pill p-3">
                                <p class="text-white mb-0">Explorar el contenido</p>
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
                                            <img class="img-fluid d-flex mx-auto" src="${slideImagesPath}img_deck_1.png">
                                        </section>
                                        <section class="card-item card1">
                                            <img class="img-fluid d-flex mx-auto" src="${slideImagesPath}img_deck_2.png">
                                        </section>
                                        <section class="card-item card2">
                                            <img class="img-fluid d-flex mx-auto" src="${slideImagesPath}img_deck_3.png">
                                        </section>
                                        <section class="card-item card3">
                                            <img class="img-fluid d-flex mx-auto" src="${slideImagesPath}img_deck_4.png">
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
