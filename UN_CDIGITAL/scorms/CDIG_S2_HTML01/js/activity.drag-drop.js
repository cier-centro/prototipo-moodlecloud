//-------------------------------
//----Actividad DRAG AND DROP----
//----------Version 1.0----------
//-------------------------------
// Actividad base drag & drop//
// Caso por defecto 0. Funcionamiento basico.
// Caso 1. Para drags repetidos que funcionan en diferentes drop -> (d1 || d2) && (d2 || d1)
// Caso 2: Clonar drags // clona un drag y lo pone en un drop - elimina el clon al sacarlo al exterior. Evalua el numero de clones en cada drop.
//------------TODO---------------
// Botonera jq -> div
// ? casos especiales de contenido
// ? migrar a un json o dejar solo en js: por el momento se mantiene en js//
// ? otros casos especiales que puedan surgir.//
// Revision
// Revisar interacion con videos.
//-------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content, slideId) {
  //establecer cual contenido carga la actividad se puede cambiar los datos creando mas objetos de drag
  activityContent = $.extend(true, {}, content);
  activityContent.activityFrame = slideId + " " + activityContent.activityFrame;
  setActivityButtonState("#btn-endQuestion", "enabled");
  setActivityButtonState("#btn-resetQuestion", "disabled");
  $(".btn-next").hide();
  appendContent(); //estructura
  setValues(); //establecer variables
  setDragsAsDraggeable();
  setDropsAsDroppable();
  setContainerAsDroppable();
  setDragsAndDropsAnimations();
}
//-append-Content
function appendContent() {
  $(".drop-container-col").addClass(activityContent.dropContainerClass); //Crear container para los drop
  $(".drag-container-col").addClass(activityContent.dragContainerClass); //Crear container para los drag
}

//inicializar valores
function setValues() {
  //crear las variables de acuerdo al caso o por defecto
  switch (activityContent.activeCase) {
    case 0:
      drags = activityContent.dragsCase0;
      drops = activityContent.dropsCase0;
      break;
    case 1:
      drags = activityContent.dragsCase0;
      drops = activityContent.dropsCase1;
      break;
    case 2:
      drags = activityContent.dragsCase2;
      drops = activityContent.dropsCase2;
      break;
  }

  //Número de Drags and Drops
  totalDrags = (drags.length - 1);
  totalDrops = (drops.length - 1);

  //Crear los drops
  $(".drop-col").addClass(activityContent.dropsClass);
  for (i = 1; i <= totalDrops; i++) {
    //llenar contenido drops
    var dropId = "#drop_" + i;
    $(dropId).addClass("droppable");
    $(dropId).attr("data-toggle", "tooltip");
    $(dropId).attr("title", activityContent.dropTooltipTitle);
    $(dropId + " .drop-content").append(drops[i].content);
  }

  //drop por defecto de cada Drag
  dragsActiveValues = [0];
  //drag por defecto para clones
  dragsDefault = drags.length;
  //dragsDefault=$.extend(true,{},dl);

  //Crear los drags
  for (i = 1; i <= totalDrags; i++) {
    var dragId = "#drag_" + i;
    $(dragId).addClass("draggable " + activityContent.dragsClass);
    $(dragId).attr("data-toggle", "tooltip");
    $(dragId).attr("title", activityContent.dragTooltipTitle);
    $(dragId + " .drag-content").append(drags[i].content);

    var dragActive = drags[i].activeDrop;
    if (dragActive !== 0) {
      var dropId = "#drop_" + dragActive;
      $(dragId).detach().appendTo(dropId);
    }
    dragsActiveValues.push(dragActive);
  }
  if (activityContent.randomDrag) {
    randomDrags();
  }
}

//Aleatorizar el orden los drag -> randomDrag = true;
function randomDrags() {
  var randomDrag = Array.apply(null, {
    length: totalDrags
  }).map(function(value, index) {
    return index + 1;
  });
  randomDrag.sort(function(a, b) {
    return 0.5 - Math.random()
  });
  for (i = 0; i < randomDrag.length; i++) {
    var dragID = "#drag_" + randomDrag[i];
    var dragActive = drags[randomDrag[i]].activeDrop;
    if (dragActive == 0) {
      $(".drag-container").append($(dragID));
    }
    else {
      var dropId = "#drop_" + dragActive;
      $(dropId).append($(dragID));
    }
  }
}
//--Drags
function setDragsAsDraggeable() {
  //Establecer los drag como draggeable
  for (i = 1; i <= totalDrags; i++) {
    var dragId = "#drag_" + i;
    $(dragId).draggable({
      containment: "#container",
      revert: "invalid",
      zIndex: 10,
      snapMode: "inner",
      scroll: true,
      helper: function setHelper() {
        var dragHelper = getDragHelper($(this).html(), $(this).find(".drag-content").innerHeight(), $(this).find(".drag-content").innerWidth());
        return $(dragHelper);
      },
      start: function() {
        $(this).css({
          "cursor": "grabbing",
          "opacity": "0.3"
        });
      },
      drag: function() {
        $(this).css({
          "cursor": "grabbing"
        });
      },
      stop: function() {
        $(this).css({
          "cursor": "grab",
          "opacity": "1.0"
        });
      }
    });
  }
}

function getDragHelper(content, helperHeight, helperWidth) {
  var dragHelper;
  var height = helperHeight * activityContent.zoom;
  var width = helperWidth * activityContent.zoom;
  switch (activityContent.dragHelperCase) {
    case 1:
      dragHelper = "<div style='height: " + height + "px; width: " + width + "px;' class='drag-helper'>" + activityContent.customDragHelper + "</div>";
      break;
    case 2:
      dragHelper = "<div style='height: " + height + "px; width: " + width + "px;' class='drag-helper'>" + content + "</div>";
      break;
    default:
      dragHelper = "<div style='height: " + height + "px; width: " + width + "px;' class='default-drag-helper' ></div>";
      break;
  }
  return dragHelper;
}
//--Drops
function setDropsAsDroppable() {
  for (i = 1; i <= totalDrops; i++) {
    var dropId = "#drop_" + i;
    // establecer drops como droppables
    $(dropId).droppable({
      greedy: "false", //da prioridad al drop sobre el #container
      tolerance: "touch", // toleracia de aceptacion de un drag > touch, pointer, fit, intersect

      //On drop actions
      drop: function(event, ui) {
        //mover el drag a este drop y marcar su "activeDrop" con el id de este drop
        if (activityContent.activeCase == 2) {
          refreshClone(ui.draggable, this);
        }
        else {
          refresh(ui.draggable, this);
        }
        //restablecer estado normal drop
        $(this).removeClass("over");
      },
      //On over actions
      over: function(event, ui) {
        $(this).addClass("over");
      },
      //On out actions
      out: function(event, ui) {
        $(this).removeClass("over");
      }
    });
  }
}

//Establecer container como droppable para posiciones de drag iniciales
function setContainerAsDroppable() {
  $("#container").droppable({
    tolerance: "fit",
    //Retornar a Po al saltar fuera del drop.
    drop: function(event, ui) {
      //mover el drag a este drop y marcar su "activeDrop" con el id de este drop
      if (activityContent.activeCase == 2) {
        refreshClone(ui.draggable, this);
      }
      else {
        refresh(ui.draggable, this);
      }
    },
  });
}

//Actualizar posición y activeDrop del drag actual
function refresh(drag, drop) {
    var dragIdName = $(drag).attr("id");
    var dragId = "#" + dragIdName;
    var dragIdValue = dragIdName.split("drag_")[1];
    var dropIdName = $(drop).attr("id");
    var dropId = "#" + dropIdName;



    //Establecer el #drop actual del drag, 0 para ninguno
    if (dropIdName == "container") {
        var newDropId = 0;
    }
    else {
        var newDropId = dropIdName.split("drop_")[1];
        //Si solo se recibe un drag explusa el drop anterior
        if (activityContent.onlyOneDrag) {
        for (l = 1; l <= totalDrags; l++) {
            if (drags[l].activeDrop == newDropId) {
            var oldDrag = "#drag_" + l;
            $(".drag-container").append($(oldDrag));
            drags[l].activeDrop = 0;
            }
        }
        }
    }
    drags[dragIdValue].activeDrop = newDropId;
    //mover el drag al drop correspondiente o al dragcontainer

    if (dropId == "#container") {
        dropId = ".drag-container";
    }
    $(dropId).append($(dragId));
};

//clonar drag y ponerlo en el drop
function refreshClone(drag, drop) {
  var dragIdName = $(drag).attr("id");
  var dragId = "#" + dragIdName;
  var dragIdValue = dragIdName.split("drag_")[1];
  var dropIdName = $(drop).attr("id");
  var dropId = "#" + dropIdName;
  var dropIdValue = dropIdName.split("drop_")[1];
  if (drags.length >= dragIdValue) {
    if (drags[dragIdValue].allowClone) {
      var dragClone = $(dragId).clone().prop('id', 'drag_' + drags.length);
      dragClone.draggable({
        containment: "#container",
        revert: "invalid",
        zIndex: 10,
        snapMode: "inner",
        scroll: true,
        helper: function setHelper() {
          var dragHelper = getDragHelper($(this).html(), $(this).find(".drag-content").innerHeight(), $(this).find(".drag-content").innerWidth());
          return $(dragHelper);
        },
        start: function() {
          $(this).css({
            "cursor": "grabbing",
            "opacity": "0.3"
          });
        },
        drag: function() {
          $(this).css({
            "cursor": "grabbing"
          });
        },
        stop: function() {
          $(this).css({
            "cursor": "grab",
            "opacity": "1.0"
          });
        }
      });

      drags.push({
        content: drags[dragIdValue].content,
        activeDrop: dropIdValue,
        allowClone: false
      });

      if (dropId != "#container" && dropId != ".drop-container" && dropId != ".drag-container") {
        $(dropId).append($(dragClone));
        $(dragClone).css({
          "cursor": "grab",
          "opacity": "1.0"
        });
      }
    }
    else {
      if (dropIdName.startsWith('drop_')) {
        drags[dragIdValue].activeDrop = dropIdValue;
        $(dropId).append($(drag));
        $(drag).css({
          "cursor": "grab",
          "opacity": "1.0"
        });
      } else {
        var defaultDrag = {
          content: "",
          activeDrop: 0,
          allowClone: false
        };
        drags[dragIdValue] = defaultDrag;
        drag.remove();
      }
    }
  }
  totalDrags = drags.length;
}

//Mostrar la actividad corregida // ? deberia ser mas bien una pista
function correct() {
  resetActivity();
  setActivityButtonState("#btn-endQuestion", "disabled");
  switch (activityContent.activeCase) {
    case 0:
      for (i = 1; i < drops.length; i++) {
        setDisabledDragsByArray(i, drops[i].accept);
      }
      break;
    case 1:
      for (i = 1; i < drops.length; i++) {

        //filtra los que aceptan combinaciones
        if (Object.keys(drops[i]).length > 2) {
          setDisabledDragsByArray(i, drops[i].accept1);
        }
        else {
          setDisabledDragsByArray(i, drops[i].accept);
        }
      }
      break;
    case 2:
      for (i = 1; i < drops.length; i++) {
        setDisabledDragsByArray(i, drops[i].accept);
      }
      break;
  }

  setDragsAsDisabled();
}


//reset drags and keepScore
function resetDrags() {
    for (i = 1; i < drags.length; i++) {
        var dragId = "#drag_" + i;
        setDragsAsEnabled(dragId);
    }
}

//reset current drag to keepScore
function resetDragbyId(i){
    var dragId = "#drag_" + i;
    $(".drag-container").append($(dragId));
    setDragsAsEnabled(dragId);
    drags[i].activeDrop = dragsActiveValues[i];
}

//reiniciar los componentes de la actividad
function resetActivity() {
    setActivityButtonState("#btn-endQuestion", "enabled");
    setActivityButtonState("#btn-resetQuestion", "disabled");
    for (i = 1; i < drops.length; i++) {
        $("#drop_" + i).removeClass('dropCorrect');
        $("#drop_" + i).removeClass('dropWrong');
    }
    console.log("Reset");
    switch (activityContent.activeCase) {
        case 0:
            if(activityContent.keepScore)
            {
                resetDrags();
            }
            else{
                resetActivityInCase0And1();
            }
        break;
        case 1:
            resetActivityInCase0And1();
        break;
        case 2:
            for (i = dragsDefault; i < drags.length; i++) {
                var dragId = "#drag_" + i;
                $(dragId).remove();
            }
            drags.length = dragsDefault;
            totalDrags = (drags.length - 1);

            for (i = 1; i < dragsDefault; i++) {
                dragId = "#drag_" + i;
                setDragsAsEnabled(dragId);
            }
            for (i = 1; i < drops.length; i++) {
                $("#drop_" + i).removeClass('dropCorrect');
                $("#drop_" + i).removeClass('dropWrong');
            }
        break;
    }

    if (activityContent.randomDrag) {
        randomDrags();
    }
};

function resetActivityInCase0And1() {
    for (i = 1; i < drags.length; i++) {
        $(".drag-container").append($(dragId));
        var dragId = "#drag_" + i;
        setDragsAsEnabled(dragId);
        drags[i].activeDrop = dragsActiveValues[i];
        var dragActive = drags[i].activeDrop;
        if (dragActive == 0) {
            $(".drag-container").append($(dragId));
        }
        else {
            var dropId = "#drop_" + dragActive;
            $(dropId).append($(dragId));
        }
    }
    for (i = 1; i < drops.length; i++) {
        $("#drop_" + i).removeClass('dropCorrect');
        $("#drop_" + i).removeClass('dropWrong');
    }
}

//Evaluacion
function checkAnswers() {
  finalScore = 0;
  switch (activityContent.activeCase) {
    case 0:
      checkCase0();
      break;
    case 1:
      checkCase1();
      break;
    case 2:
      checkCase2();
      break;
  }
  console.log("Score: " + finalScore + "/" + totalDrops);
  if (finalScore == totalDrops) {
    exitActivity(true);
  }
  else {
    exitActivity(false);
  }
};

//Para cada drop busca su drag correcto y pregunta la posicion actual de ese drag para saber si esta correcto.
function checkCase0() {
  for (i = 1; i < drops.length; i++) {
    checkByDrop(i);
  }
  setDragsAsDisabled();
};

function checkByDrop(i) {
  var dropScore = 0;
  if (drops[i].accept.length != 0) {
    for (j = 0; j < drops[i].accept.length; j++) {
      if (i == drags[drops[i].accept[j]].activeDrop) {
        dropScore++;
      }
      else{
        if(activityContent.keepScore){
            resetDragbyId(drops[i].accept[j]);
            $("#drop_" + i).removeClass('dropCorrect');
            $("#drop_" + i).removeClass('dropWrong');
        }
      }
    }
    var numberOfDragsInDrop = $("#drop_" + i + " [id^=drag]").length;
    if ((dropScore == drops[i].accept.length) && (numberOfDragsInDrop == dropScore)) {
        finalScore++;
        $("#drop_" + i).addClass('dropCorrect');
    }
    else{
        $("#drop_" + i).addClass('dropWrong');
    }
  }
}

//Por cada drop con mas de 1 correcto revisar las combinaciones de correctos y evaluar
function checkCase1() {
  console.log("caso 1");
  var dropScore = 0;
  for (i = 1; i < drops.length; i++) {
    //filtra los que aceptan combinaciones
    if (Object.keys(drops[i]).length > 2) {
      var totalAccepted = (Object.keys(drops[i]).length) - 1;
      //por cada combinacion evalua si es correcto si una lo es da positivo.
      for (k = 1; k <= totalAccepted; k++) {
        dropScore = 0;
        var dropFinalScore = drops[i]["accept" + k].length;
        if (dropFinalScore != 0) {
          for (j = 0; j < dropFinalScore; j++) {
            if (i == drags[drops[i]["accept" + k][j]].activeDrop) {
              dropScore++;
            }
          }
          var numberOfDragsInDrop = $("#drop_" + i + " [id^=drag]").length;
          if ((dropScore == dropFinalScore) && (numberOfDragsInDrop == dropScore)) {
            finalScore++;
          }
        }
      }
    }
    else {
      //Si no es combinacion evalua normalmente
      checkByDrop(i);
    }
  }
  setDragsAsDisabled();
};

//Para cada drop busca sus drag correctos recorre todos los drags para buscar los clones activos correctos.
function checkCase2() {
  var dropScore = 0;
  var totalClone = 0;
  //busca los clones creados
  for (i = 1; i < drags.length; i++) {
    if (drags[i].allowClone) {
      totalClone++;
    }
  }
  if (totalClone < drags.length) {
    for (i = 1; i < drops.length; i++) {
      dropScore = 0;
      if (drops[i].accept.length != 0) {
        //busca los clones activos en el drop
        var activeAcceptClones = [];
        for (k = totalClone + 1; k < drags.length; k++) {
          if (drags[k].activeDrop == i) {
            activeAcceptClones.push(k);
          }
        }
        //busca en los activos los correctos, elimina los ya revisados
        if (activeAcceptClones.length == drops[i].accept.length) {
          dropScore = 0;
          for (j = 0; j < drops[i].accept.length; j++) {
            for (k = 0; k < activeAcceptClones.length; k++) {
              if (drags[drops[i].accept[j]].content == drags[activeAcceptClones[k]].content) {
                dropScore++;
                activeAcceptClones.splice(k, 1);
              }
            }
          }
        }
        //resultado
        if (dropScore == drops[i].accept.length) {
          finalScore++;
        }
      }
    }
  }
  setDragsAsDisabled();
};

function setDragsAsDisabled() {
  var dragId;
  for (i = 1; i < drags.length; i++) {
    dragId = "#drag_" + i;
    $(dragId).draggable("disable");
    $(dragId).addClass("disabled");
    $(dragId).css({
      cursor: "no-drop"
    });
  }
}

function setDisabledDragsByArray(i, array) {
  for (var j = 0; j < array.length; j++) {
    var dropId = "#drop_" + i;
    var dragId = "#drag_" + array[j];
    $(dragId).draggable("disable");
    $(dragId).addClass("disabled");
    $(dragId).css({
      cursor: "no-drop"
    });
    if (activityContent.activeCase === 2) {
      refreshClone($(dragId), $(dropId));
    } else {
      $(dropId).append($(dragId));
    }
  }
}

function setDragsAsEnabled(dragId) {
  $(dragId).draggable("enable");
  $(dragId).removeClass("disabled");
  $(dragId).css({
    cursor: "grab"
  });
}
//-------------------------------
//--------- Animaciones ---------
//-------------------------------
//--Animaciones basicas--
//--Animaciones jquery: dependientes de la posicion.
//--Opciones: blind, bounce, clip, drop, explode, fade, fold, highlight, puff, pulsate, scale, shake, size, slide
function setDragsAndDropsAnimations() {
  for (i = 1; i <= totalDrops; i++) {
    var dropid = "#drop_" + i;
    $(dropid).hide();
    $(dropid).show("slide", 200 * i, jqcallback);
  }
  for (i = 1; i <= totalDrags; i++) {
    var dragid = "#drag_" + i;
    $(dragid).hide();
    $(dragid).show("fade", 200 * i, jqcallback);
  }
}
