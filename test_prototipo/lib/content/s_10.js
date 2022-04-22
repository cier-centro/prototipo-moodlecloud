var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-11 col-lg-10">
                    <div class="row align-items-center my-3">
                        <div class="col-12 text-center position-relative">
                            <div class="bg-main rounded-pill text-dialog-gray p-4 px-md-5 ml-5">
                                <p class="text-white mb-0">Arrastrar elementos</p>
                            </div>
                        </div>
                    </div>
                    <div id="container" class="row justify-content-around align-items-center drag-drop-activity my-3 ">
                        <div class="col-12 col-lg-3">
                            <div class="row drag-container justify-content-around align-items-center mt-3">
                                <div id="drag_1" class='col-12 p-3 rounded-pill'>
                                    <div class="drag-content">
                                    </div>
                                </div>
                                <div id="drag_3" class='col-12 p-3 rounded-pill'>
                                    <div class="drag-content">
                                    </div>
                                </div>
                                <div id="drag_2" class='col-12 p-3 rounded-pill'>
                                    <div class="drag-content">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-11 col-lg-8 top-left-separator-lg mt-3">
                            <div class="row drop-container justify-content-center">
                                <div class="col-12 col-md-4 mt-3 mt-md-0">
                                    <p class="text-center text-dark-inv mb-0">Amarillo</p>
                                    <div id="drop_1" class="rounded-pill mb-3">
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 mt-3 mt-md-0">
                                    <p class="text-center text-dark-inv mb-0">Azul</p>
                                    <div id="drop_2" class="rounded-pill mb-3">
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 mt-3 mt-md-0">
                                    <p class="text-center text-dark-inv mb-0">Rojo</p>
                                    <div id="drop_3" class="rounded-pill mb-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dragDropControls" class="row activity-controls justify-content-center">
                        <div class="col-5 col-lg-2">
                            <button onclick="checkAnswers()" class="btn btn-primary rounded-pill shadow w-100" id="btn-endQuestion" data-toggle="tooltip" title="Evaluar">Evaluar</button>
                        </div>
                        <div class="col-5 col-lg-2">
                            <button onclick="resetActivity()" class="btn btn-primary rounded-pill shadow w-100" id="btn-resetQuestion" data-toggle="tooltip" title="Reiniciar">Reiniciar</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
`;

var slideActivityContent = {

    //- Actividad Drag & Drop -
    controller : "js/activity.drag-drop.js",
    //---Parámetros
    //Oculta los botones de control de la actividad que esten bloqueados
    hideDisabledControlButtons: false,
    //Retroalimentaciones que se muestran al terminar la actividad
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad
    finalFeedback: {
        correctFeedback: [
            `
                <div class="row align-items-center justify-content-evenly">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_success.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2 class=""><b>¡Muy bien!</b></h2>
                        <p></p>
                    </div>
                </div>
            `
        ],
        incorrectFeedback: [
            `
                <div class="row align-items-center justify-content-evenly">
                    <div class="col-6 col-md-4">
                        <img class="img-fluid mx-auto d-flex" src="${slideImagesPath}img_act_error.png">
                    </div>
                    <div class="col-12 col-md-7">
                        <h2 class="text-purple-medium"><b>¡Vuelve a intentarlo!</b></h2>
                        <p></p>
                    </div>
                </div>
            `
        ],
    },
    //Titulo del tooltip para el drop
    dropTooltipTitle: "Casilla de almacenaje",
    //Titulo del tooltip para el drag
    dragTooltipTitle: "Elemento móvil",
    //Nombre del marco que contiene la actividad por defecto el body del html->Ej: #actividad
    activityFrame : ".drag-drop-activity",
    //zoom de drag para el helper // Para acomodar el tamaño de las imagenes dentro del drop.
    zoom : 0.8,
    //aleateorizar los drag ->true/false
    randomDrag : true,
    //recibe solo un drag en cada drop // devuelve los otros drag al exterior ->true/false
    onlyOneDrag : true,
    //conservar drag correctos //
    keepScore: true,
    //------------------------------//
    //Caso por defecto 0. Funcionamiento basico.
    //Caso 1. Para drags repetidos que funcionan en diferentes drop -> (d1 || d2) && (d2 || d1)
    //Caso 2: Clonar drags // clona un drag y lo pone en un drop - elimina el clon al sacarlo al exterior. Evalua el numero de clones en cada drop.
    activeCase : 0,
    //-------------------------------//
    //------Parametros gráficos------//
    //-------------------------------//
    //Clase para el contenedor de todos los drops
    dropContainerClass: "",
    //Clase para el contenedor de drags
    dragContainerClass: "",
    //Clase para el contendor del drop
    dropsClass: "",
    //Clase para el drag
    dragsClass: "",
    //Helper: Contenido que se muestra cuando un objeto es arrastrado
    //--1 Custom: Es necesario configurar la variable customDragHelper
    //--2 Duplicado: Duplica el contenido arrastrado (Modificar apariencia en la clase ".drag-helper")
    //--3 Vacio: Muestra un cuadro punteado y vacio (Modificar apariencia en la clase ".default-drag-helper")
    dragHelperCase: 2,
    //Contenido del helper para el caso 1
    customDragHelper: "Arrastrando...",
    //------------------------------//
    //-------------Drags------------//
    //------------------------------//
    //Drags //--> crear llenado de los drags
    //se deja drags[0] vacio por necesidad
    //content: contenido del drag recibe <html> Ej: <p>Drag<p>, <img class='img-fluid' src='resources/images/img01.gif'>,
    //activeDrop: drop actual de cada drag. por defecto el dragcontainer: 0
    //------------------------------//
    //Para caso 0 y 1:
    dragsCase0 : [0,
        {content:"Amarillo",activeDrop:0},
        {content:"Azul",activeDrop:0},
        {content:"Rojo",activeDrop:0}
    ],
    //------------------------------//
    //-------------Drops------------//
    //------------------------------//
    //Drops //--> crear llenado de los drops del caso default: caso=0;
    //se deja drops[0] vacio por necesidad
    //content:contenido del drop recibe <html>
    //Caso 1: Para drags repetidos que funcionan en diferentes drop -> (d1 || d2) && (d2 || d1)
    //Crear  un accept# por cada drag repetido y llenar con cada combinacion de id_drag correcto
    dropsCase0 : [0,
        {content:"", accept:[1]},
        {content:"", accept:[2]},
        {content:"", accept:[3]},
    ],
};

// funcion de completacion de la actividad
function exitActivity(success) {
    if (success) {
        setAndOpenModal("success", activityContent.finalFeedback);
        setActivityButtonState("#btn-endQuestion","disabled");
        setActivityButtonState("#btn-resetQuestion","disabled");

    }
    else {
        setAndOpenModal("error", activityContent.finalFeedback);
        setActivityButtonState("#btn-endQuestion","disabled");
        setActivityButtonState("#btn-resetQuestion","enabled");
    }
}

$(document).ready(function () {
    scormData.lessonStatus = "completed";
});
