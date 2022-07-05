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
                            <p class="mb-0">A continuación encontrarás la descripción de dos plataformas que te permiten guardar información en la nube.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center bg-white rounded-bottom py-3">
                        <div class="col-11 flipping-cards">
                            <div class="row justify-content-center align-items-center card-deck ">
                                <button class="btn flip-card-active col-md-6 mb-2" id="card_1">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front shadow rounded">
                                            <div>
                                                <h2 class="text-white mx-auto align-self-center">Google Drive</h2>
                                                <img class="img-fluid img-flip" src="${slideImagesPath}img_card_flip.png">
                                            </div>
                                        </div>
                                        <div class="flip-card-back shadow rounded row m-0 justify-content-center align-items-center">
                                            <div class="col-12">
                                                <p class="mb-0">
                                                    Es la plataforma de almacenamiento en la nube de <em>Google</em>. En esta puedes almacenar, compartir y editar documentos. En su versión gratuita tiene una capacidad de almacenamiento de hasta 15 GB. Sin embargo, en tu cuenta institucional de Gmail, que proporciona la universidad, tienes una capacidad ilimitada de almacenamiento. Además, esta plataforma tiene una aplicación de escritorio que puedes descargar.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button class="btn flip-card-active col-md-6" id="card_2">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front rounded shadow">
                                            <div>
                                                <h2 class="text-white mx-auto align-self-center">One Drive</h2>
                                                <img class="img-fluid img-flip" src="${slideImagesPath}img_card_flip.png">
                                            </div>
                                        </div>
                                        <div class="flip-card-back shadow rounded row m-0 justify-content-center align-items-center">
                                            <div class="col-12">
                                                <p class="mb-0">
                                                    <em>One Drive</em> es la plataforma de almacenamiento en la nube de Microsoft. Esta aplicación no sólo te permite almacenar  y compartir contenido, sino que también la puedes sincronizar con tu computador; de esta forma tendrás la opción de guardar tus archivos de Word, Excel, PowerPoint almacenados en el computador también en la nube. Esta plataforma está vinculada con tu cuenta de correo electrónico de Hotmail u Outlook.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </button>

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
    //---Actividad FLIP-CARD---
    controller: "js/activity.flip-card.js",
    //---Parámetros:
    //Total Cartas
    totalCards: 2,
    //Permitir que se activen las cartas al hacer clic (true/false)
    allowClick: true
};


$(document).ready(function () {
    setTimeout(() => {
        fix_height()
    }, 1500);
    window.addEventListener('resize', fix_height);
});
//fix height
function fix_height() {
    console.log("hfix");
    for (let i = 1; i <= 3; i++) {
        let box = document.querySelector('#card_' + i + ' .flip-card-back');
        $("#card_" + i + " .flip-card-back").attr('style', "height: auto! important");
        console.log(box);
        $("#card_" + i + " .flip-card-back").attr('style', "height:" + (box.clientHeight + 20) + "px !important")
        $("#card_" + i).attr('style', "height:" + (box.clientHeight + 20) + "px !important")
    }
}