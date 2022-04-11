//-------------------------------
//-----Actividad ###########-----
//----------Version 1.0----------
//-------------------------------
// Mazo de cartas para presentar contenido, arrastrar las cartas para quitarlas o utilizar la navegacion.
// Permite tener una barra de progreso de la navegación.
// Permite quitar todas las cartas o quedarse en la ultima.
//
//------------TODO---------------
// ...
//-------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content) {
    activityContent = $.extend(true, {}, content);
    //funcion de activacion de la actividad
    setCardDeck();
}
//-------------------------------
// Variables

//Carta Actual
var currentCard = 0;
// Valor del movimento
var movement = 0;
//-------------------------------
// Funciones

//Establecer las cartas iniciales
function setCardDeck() {
    $("#card-progress-bar").css({ width: "0%" });
    for (i = 0; i < activityContent.totalCards; i++) {
        //establecer posiciones inicio
        resetCard(i);
        setCardIndex(i);
        //Si se oculta la ultima carta
        if (activityContent.hideLastCard) {
            setCardDrag(i);
        }
        //Si se muestra la ultima carta
        else {
            if (i != activityContent.totalCards - 1) {
                setCardDrag(i);
            }
        }
        var cheight = $(".card0").css("height");
        $(".card-deck").css({ height: cheight });

    }
    $(".card0").css({ "pointer-events": "auto" });
    $(".card-deck").css({ height: cheight });
}
//-------------------------------
//Recalcular images Height on device rotation
$(window).on("orientationchange", function (event) {
    setCardDeck();
});
//Recalcular images Height on device rotation
$(window).resize(function () {
    setCardDeck();
});

//Establecer zIndex para las cartas
function setCardIndex(cardId) {
    var index = activityContent.totalCards - cardId;
    $(".card-deck").find(".card" + cardId).css({ zIndex: index });
}
//Establecer Draggable para las cartas
function setCardDrag(i) {
    $(".card" + i).draggable({
        containment: ".main-content",
        scroll: false,
        distance: 10,
        start: function () {
            $(this).css({ "cursor": "grabbing" })
            $(this).css({ position: 'relative' });
        },
        drag: function () {
            $(this).css({ "cursor": "grabbing" })
            $(this).find("c-img-top").css({ width: '100%' })
            movement = parseInt($(this).css('left'));
            console.log("movement" + movement);
        },
        stop: function () {
            $(this).css({ "cursor": "grab" })
            nextCard();
            // saltar al final de la página para evitar el movimiento al top que tienen los dispositivos
            if (activityContent.jumpToEnd) { window.scrollTo(0, document.body.scrollHeight); }
        }
    });
}

//Mostrar carta siguiente
function nextCard() {
    if (currentCard < activityContent.totalCards - 1) {
        $(".card" + currentCard).hide();
        currentCard++;
        $(".card" + currentCard).css({ "pointer-events": "auto" });
    }
    else {
        if (activityContent.hideLastCard) {
            $(".card" + currentCard).hide();
            currentCard++;
            $(".card" + currentCard).css({ "pointer-events": "auto" });
        }
    }
    progressBar();
}

//Mostrar carta anterior
function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        resetCard(currentCard);
        $(".card" + currentCard).css({ "pointer-events": "auto" });
    }
    progressBar();
}

//Reiniciar posicion de la carta actual
function resetCard(id) {
    $(".card" + id).css({ left: '0', top: '0', position: 'absolute' });
    $(".card" + id).css({ left: id * activityContent.cardDistance, top: id * activityContent.cardDistance });
    $(".card" + id).css({ "pointer-events": "none" });
    $(".card0").css({ "pointer-events": "auto" });
    $(".card" + id).show();
    var cheight = $(".card0").css("height");
    $(".card-deck").css({ height: cheight });

}

//Barra de progreso
function progressBar() {
    if (activityContent.hideLastCard) {
        var progress = Math.round((currentCard / (activityContent.totalCards)) * 100);
    }
    else {
        var progress = Math.round((currentCard / (activityContent.totalCards - 1)) * 100);
    }
    var cardProgress = progress + "%";
    $("#card-progress-bar").css({ width: cardProgress });
    if(progress===100){
        $("#nextControlButton").removeClass('hidden');
    }
}
//-------------------------------
