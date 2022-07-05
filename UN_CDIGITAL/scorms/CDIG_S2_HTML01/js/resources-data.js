//-------------------------------
var currentAdvance = 0;
var currentResource = 0;
var currentAdvancePercentile = "0%";
var cAdvancePerc = "0%";
var chtml;
var packageName = ''
//-------------------------------
var resourcesData = [

];

var totalResources = resourcesData.length;
var currentSessionAdvance = new Array(totalResources);
//-------------------------------
//set advance in resources
function setAdvanceData(id) {
    currentSessionAdvance[id] = 1;
    var idC = "#btnRes" + (id + 1);
    $(idC).addClass('done');
    scormData.suspendData = currentSessionAdvance.toString();
    setAdvance();
    if (currentAdvance == totalResources) {
        scormData.lessonStatus = "completed";
        console.log("lessonStatus:" + scormData.lessonStatus);
    }
}
//-------------------------------
function setAdvance() {
    currentAdvance = currentSessionAdvance.reduce((a, b) => a + b, 0);
    if (currentAdvance > 0) {
        var cPercentile = (currentAdvance * 100) / totalResources;
        currentAdvancePercentile = cPercentile + "%";
        cAdvancePerc = currentAdvance + " / " + totalResources;
    }
}
//-------------------------------
function showResource(id) {

    var currentUrl = 'resources/' + resourcesData[id - 1].type + '/' + resourcesData[id - 1].url;
    switch (resourcesData[id - 1].type) {
        case "video":
            setAdvanceData(id - 1);
            var modalContent =
                '<div class="embed-responsive embed-responsive-16by9 ">' +
                '<video controls>' +
                '<source src="' + currentUrl + '" type="video/mp4">' +
                'Su Navegador no es compatible para Video.' +
                '</video>'
            '</div>';

            $('#contentModal').find('.modal-body').html(modalContent);
            $('#contentModal').modal();
            $('#contentModal').on('hidden.bs.modal', function (e) {
                $('#contentModal').find('.modal-body').html("");
            });
            break;
        case "audio":
            setAdvanceData(id - 1);
            var modalContent =
                '<div class="embed-responsive bg-blue-ultralight-3">' +
                '<p class="col-11 col-md-7 instruction-p mx-auto my-4 text-center" data-readable="true">Haz clic en reproducir para escuchar la información.</p>' +
                '<div class="row p-2 m-3 mx-md-5 align-items-center audioPlayer-container no-gutters">' +
                '<div class="col-2 col-lg-1 audio-icon text-center">' +
                ' <img class="img-fluid img-audioPlayer" src="resources/images/img_ac_reader.png">' +
                '</div>' +
                '<div class="col-10 col-lg-11 audio-Player text-center">' +
                '<audio src="' + currentUrl + '" controls="" preload="auto">' +
                '<p>Tu navegador no implementa el elemento audio.</p>' +
                '</audio>'
            '</div>' +
            '</div>' +
            '</div>';

            $('#contentModal').find('.modal-body').html(modalContent);
            $('#contentModal').modal();
            $('#contentModal').on('hidden.bs.modal', function (e) {
                $('#contentModal').find('.modal-body').html("");
            });
            break;
        case "docs":
            setAdvanceData(id - 1);

            var modalContent =

                '<div class="embed-responsive embed-responsive-16by9 d-none d-lg-block">' +
                '<object type="application/pdf" data="' + currentUrl + '" width="100%" height="100%" class="embed-responsive-item"></object>' +
                '</div>' +
                '<div class="d-lg-none p-5">' +
                '<p class="instruction-p mx-auto mb-3" data-readable="true">Haz clic en el botón para descargar la información</p>' +
                '<a href="' + currentUrl + '" class="btn btn-pack-content align-items-center d-flex"' +
                'data-toggle="tooltip" title="Descargar PDF" aria-description="Descargar PDF" target="_blank" download>' +
                '<span class="number-item"></span>' +
                '<h2 class="mb-0">Descargar PDF</h2>' +
                '</a>'
            '</div>';

            $('#contentModal').find('.modal-body').html(modalContent);
            $('#contentModal').modal();

            //window.open(currentUrl, '_blank');

            break;

        case "images":
            setAdvanceData(id - 1);
            var modalContent =
                '<a href="' + currentUrl + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                '<img class="img-fluid d-block mx-auto" src="' + currentUrl + '" alt="">'
            '</a>';
            $('#contentModal').find('.modal-body').html(modalContent);
            $('#contentModal').modal();
            //window.open(currentUrl, "_blank");
            break;


        case "slider":
            setAdvanceData(id - 1);

            if (resourcesData[id - 1].url.length == 2) {

                currentUrl = [
                    'resources/images/' + resourcesData[id - 1].url[0],
                    'resources/images/' + resourcesData[id - 1].url[1],
                ];

                var modalContent =
                    '<div id="carouselContentControls" class="carousel slide" data-ride="carousel">' +
                    '<div class="carousel-inner">' +
                    '<div class="carousel-item active">' +
                    '<a href="' + currentUrl[0] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[0] + '" alt="Página 1">' +
                    '</a>' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '<a href="' + currentUrl[1] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[1] + '" alt="Página 2">' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '<a class="carousel-control-prev" href="#carouselContentControls" role="button" data-slide="prev" data-toggle="tooltip" title="Anterior infografía">' +
                    '❮' +
                    '<span class="sr-only">Previous</span>' +
                    '</a>' +
                    '<a class="carousel-control-next" href="#carouselContentControls" role="button" data-slide="next" data-toggle="tooltip" title="Siguiente infografía">' +
                    '❯' +
                    '<span class="sr-only">Next</span>' +
                    '</a>' +
                    '</div>';
            }

            if (resourcesData[id - 1].url.length == 7) {

                currentUrl = [
                    'resources/images/' + resourcesData[id - 1].url[0],
                    'resources/images/' + resourcesData[id - 1].url[1],
                    'resources/images/' + resourcesData[id - 1].url[2],
                    'resources/images/' + resourcesData[id - 1].url[3],
                    'resources/images/' + resourcesData[id - 1].url[4],
                    'resources/images/' + resourcesData[id - 1].url[5],
                    'resources/images/' + resourcesData[id - 1].url[6],
                    'resources/images/' + resourcesData[id - 1].url[7]
                ]

                var modalContent =
                    '<div id="carouselContentControls" class="carousel slide" data-ride="carousel">' +
                    '<div class="carousel-inner">' +
                    '<div class="carousel-item active">' +
                    '<a href="' + currentUrl[0] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[0] + '" alt="Página 1">' +
                    '</a>' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '<a href="' + currentUrl[1] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[1] + '" alt="Página 2">' +
                    '</a>' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '<a href="' + currentUrl[2] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[2] + '" alt="Página 3">' +
                    '</a>' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '<a href="' + currentUrl[3] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[3] + '" alt="Página 4">' +
                    '</a>' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '<a href="' + currentUrl[4] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[4] + '" alt="Página 5">' +
                    '</a>' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '<a href="' + currentUrl[5] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[5] + '" alt="Página 6">' +
                    '</a>' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '<a href="' + currentUrl[6] + '" target="_blank" data-toggle="tooltip" title="Ver infografía">' +
                    '<img class="d-block w-100" src="' + currentUrl[6] + '" alt="Página 7">' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '<a class="carousel-control-prev" href="#carouselContentControls" role="button" data-slide="prev" data-toggle="tooltip" title="Anterior infografía">' +
                    '❮' +
                    '<span class="sr-only">Previous</span>' +
                    '</a>' +
                    '<a class="carousel-control-next" href="#carouselContentControls" role="button" data-slide="next" data-toggle="tooltip" title="Siguiente infografía">' +
                    '❯' +
                    '<span class="sr-only">Next</span>' +
                    '</a>' +
                    '</div>';
            }

            $('#contentModal').find('.modal-body').html(modalContent);
            $('#contentModal').modal();
            break;

        case "scorm":
            currentResource = id - 1;
            if (resourcesData[id - 1].url[0] == undefined) return setAdvanceData(currentResource);
            goToSlide(resourcesData[id - 1].url[0], resourcesData[id - 1].url[1]);
            break;
    }
}
//-------------------------------
function isDone(item, index) {
    var idBtn = "#btnRes" + (index + 1);
    if (item == 1) {
        $(idBtn).addClass('done');
    }
}

// Bloque que permite mostrar boton para ver los recursos ---------------------------
var btnList = ['video', 'info', 'audio', 'html', 'pdf']

function loadResourceButton(resourceId, resourceText) {
    let nameImage = ''
    let buttonText = ''
    let resourceItem = resourceId == 0 ? resourcesData[0] : resourcesData[resourceId - 1]

    switch (resourceItem.type) {
        case 'slider':
            nameImage = btnList[1]
            break;
        case 'images':
            nameImage = btnList[1]
            break;
        case 'scorm':
            nameImage = btnList[3]
            break;
        case 'docs':
            nameImage = btnList[4]
            break;
        default:
            nameImage = resourceItem.type
            break;
    }

    buttonText = resourceText != undefined ? resourceText : resourceItem.type == 'scorm' ? `${packageName}html0${resourceItem.url[0][0]}`.toUpperCase() : getNameResource(resourceItem.url)

    $('#resourceList').append(
        `<div class="col-12">
        <div id="btnRes${resourceId}" class="single-card-image btn-card bg-blue-semilight-2" onclick="showResource(${resourceId})">
            <div class="card-title-image">
                <img src="${slideImagesPath}icon_${nameImage}_resource.png" class="img-fluid">
            </div>
            <div class="card-description">
                <p data-readable="true" class="text-white">${buttonText}</p>
            </div>
        </div>
    </div>`
    )
}

function getNameResource(word) {
    if (typeof word == 'object') return word[0].replace(/(\w+)\.(mp4|mp3|jpg|png|pdf)/gi, (char, t1, t2) => t1.toUpperCase())

    return word.replace(/(\w+)\.(mp4|mp3|jpg|png|pdf)/gi, (char, t1, t2) => {
        return t1.toUpperCase()
    })
}

function resourcesWereSeen() {
    if (currentSessionAdvance.every(item => item == 1)) {
        $("#prevControlButton").css("transition", "all 1s ease-in");
        $('#btnFinish').focus()
        $('#btnFinish').removeClass('hidden')
    }
}
