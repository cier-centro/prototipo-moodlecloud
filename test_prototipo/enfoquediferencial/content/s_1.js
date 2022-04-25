var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-11 col-lg-10">
                    <div class="row align-items-center my-3">
                        <div class="col-12 text-center position-relative">
                            <div class="bg-sec-dark p-3">
                                <p class="mb-0">Haz clic en las siguientes cartas o deslízalas, para identificar algunos enfoques que son tenidos en cuenta en la creación de políticas públicas y diseños de proyectos:</p>
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
                                            <p class="mb-0"><b>Enfoque diferencial para las niñas, los niños y adolescentes víctimas</b> (que experimentaron daños como consecuencia de infracciones al Derecho Internacional Humanitario o violaciones graves a Derechos Humanos en marco del conflicto armado).</p>
                                        </section>
                                        <section class="card-item card1">
                                            <p class="mb-0"><b>Enfoque diferencial de género y Derechos Humanos de las Mujeres:</b> se refiere al análisis de las relaciones sociales que parte del reconocimiento de las necesidades específicas de las mujeres y que tiene por objeto permitir la igualdad real y efectiva entre hombres y mujeres.</p>
                                        </section>
                                        <section class="card-item card2">
                                            <p class="mb-0"><b>Enfoque diferencial de orientaciones sexuales e identidades de género no hegemónicas</b>, personas con discapacidad, envejecimiento y vejez, comunidades rrom o gitano, pueblos indígenas, comunidades negras, afrocolombianas, raizales y palenqueras. (Adaptado de <a href="https://www.unidadvictimas.gov.co/es/enfoque-diferencial-para-las-ni%C3%B1as-los-ni%C3%B1os-y-adolescentes-v%C3%ADctimas/358" target="_blank">https://www.unidadvictimas.gov.co/es/enfoque-diferencial-para-las-ni%C3%B1as-los-ni%C3%B1os-y-adolescentes-v%C3%ADctimas/358</a> )</p>
                                        </section>
                                        <section class="card-item card3">
                                            <p class="mb-0"><b>Reflexión.</b> Estos enfoques permiten comprender que la identidad de los seres humanos está constituida por múltiples variables, que se solapan entre sí, y así mismo, cualquier trabajo o intervención que se proyecte realizar con comunidades en territorios específicos, debe atender a este enfoque diferencial, a fin de reconocer y entender la diversidad, y la interseccionalidad que ya estudiamos con Kimberle Crenshaw.</p>
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
