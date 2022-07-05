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
                            <p><b>Almacenamiento en la nube. </b></p>
                            <p class="mb-0">Tomado de: AWS. Almacenamiento en la nube. <a href="https://go.aws/3sMcn71" target="_blank">https://go.aws/3sMcn71</a></p>
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
                                                        <h2>1. ¿Qué es?</h2>
                                                        <p class="mb-0">El almacenamiento en la nube es un sistema de informática que permite guardar o almacenar información en internet. De esta manera no necesitas un disco duro para guardar estos datos.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card1">
                                                    <div class="d-block">
                                                        <h2>2. ¿Cómo funciona?</h2>
                                                        <p class="mb-0">Las empresas que prestan servicio de almacenamiento en la nube habilitan unos servidores (un equipo informático que transmite información a otros computadores conectados a él) con capacidad de almacenamiento para que podamos alojar o guardar información allí. Estas empresas administran la capacidad de almacenamiento, seguridad de la información y su disponibilidad.</p>
                                                    </div>
                                                </section>
                                                <section class="card-item card2">
                                                    <div class="d-block">
                                                        <h2>3. ¿Cuáles son sus ventajas?</h2>
                                                        <ul class="text-start mb-0">
                                                            <li>No necesitas un hardware (ej: disco duro, usb, etc) para almacenar la información.</li>
                                                            <li>Ubicuidad: puedes acceder desde donde estés a los archivos que tengas almacenados en la nube, estés donde estés.</li>
                                                            <li>Puedes compartir archivos de manera más rápida y segura, incluso aunque estos sean de gran tamaño.</li>
                                                            <li class="mb-0">Seguridad: en la nube puedes hacer una copia de seguridad para tus archivos.</li>
                                                        </ul>
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
    //---Actividad CARD-DECK ---
    controller: "js/activity.card-deck.js",
    //---Parámetros:
    //Total Parejas
    totalCards: 3,
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