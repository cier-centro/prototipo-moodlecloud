//-------------------------------
//------ Javascript Common ------
//----------Version 1.0----------
//-------------------------------
// Biblioteca de funciones comunes de javascript
//-------------------------------
//--------------------
//Funcion base para hacer animacion de intro
function jqcallback() {
  setTimeout(function () {
    $("#effect:visible").removeAttr("style").fadeOut();
  }, 1000);
};
//--------------------
//Funcion base para reproducior audio
//#ID-audio: id del audio que se va reproducir
//#ID-audio-btn: id del contenedor que tiene las imágenes del reproductor
//playAndPauseAudio("#ID-audio","#ID-audio-btn")
function playAndPauseAudio(audioId, audioContainer) {
  isAudioPlayed = !isAudioPlayed;
  if (isAudioPlayed) {
		$("#" + audioId)[0].play();
    $("#" + audioContainer).css('background-image','url("resources/images/img_pause.png")');
    $("#" + audioContainer).css('background-size','70%');
	} else {
		$("#" + audioId)[0].pause();
    $("#" + audioContainer).css('background-image','url("resources/images/btn_sound.png")');
    $("#" + audioContainer).css('background-size','100%');
	}
}
//--------------------
//Reproducir audio play/pause
function toggleAudio(audioId) {
  $('audio').each(function () {
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $("#" + audioId)[0].play();
}
//--------------------
//Reproducir audio de correcto/incorrecto
function playAudio(audioId) {
  $("#" + audioId)[0].play();
}

// Pausa y reinicia el audio
function pauseAudio(audioId) {
  $("#" + audioId)[0].pause();
  $("#" + audioId)[0].currentTime = 0
}
//--------------------
//Comprobacion de si esta en mobile
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
//--------------------
//Crear un comboBox usando checkBox -> onReady()
//label: prefijo del id usado para los checkbox
// -> ej: id="check_1" -> label: "check_"
//totalChecks: numero total de Checks que contine el combo
function checkboxGroup(label, totalChecks) {
  $('input[type=checkbox]').on('click', function () {
    for (i = 1; i <= totalChecks; i++) {
      var idCheck = "#" + label + i;
      $(idCheck).prop('checked', false);
    }
    $(this).prop('checked', true);
  });
}
//--------------------
//Aleatorizar el orden de divs
//requiere un div parent y prefijo de id para sus miembros
//parentDiv: id del parent que contiene los divs ej: "#divParent", ".divParent"
//prefijo del id usado para los div
// -> ej: id="div_1" -> label: "#div_"
//total divs a randomizar
function randomDiv(parentDiv, idDivPrefix, totalDivs) {
  var randomDiv = Array.apply(null, {
    length: totalDivs
  }).map(function (value, index) {
    return index + 1;
  });
  randomDiv.sort(function (a, b) {
    return 0.5 - Math.random()
  });
  for (i = 0; i < randomDiv.length; i++) {
    var divID = idDivPrefix + randomDiv[i];
    $(parentDiv).append($(divID));
  }
}
//-------------------------------
//Bloquea o desbloquea los botones de control de la Actividad
//Dependiendo de hideDisabledControlButtons muestra/oculta el botón bloqueado
function setActivityButtonState(buttonId, state) {
  if (state === "disabled") {
    $(buttonId).addClass("disabled");
    if (activityContent.hideDisabledControlButtons)
      $(buttonId).hide();
  }
  if (state === "enabled") {
    $(buttonId).removeClass("disabled");
    if (activityContent.hideDisabledControlButtons)
      $(buttonId).show();
  }
}
//-------------------------------
// Jump to Top
function jumpTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//-------------------------------
// Jump to Bottom
function jumpBottom() {
  var scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
//-------------------------------
// Unblock buttons according advance
var advanceButtonsArray = [1, 1, 0, 0, 0, 0, 0];

function loadBlockedState() {
  for (let index = 1; index < advanceButtonsArray.length; index++) {
    if (advanceButtonsArray[index] === 0){
      $(".section-" + index).addClass("disabled");
      $(".section-" + index).attr('disabled','disabled');
    }
    else{
      $(".section-" + index).removeClass("disabled");
      $(".section-" + index).removeAttr('disabled');

    }
  }
}

var advanceButtons = [];
var totalAdvance = 0;
function loadAdvanceButtons() {
  for (let index = 0; index < advanceButtons.length; index++) {
    if (advanceButtons[index] > 0)
    $(`.section-${advanceButtons[index]}`).addClass('btn-check');
    totalAdvance = totalAdvance + advanceButtons[index];
  }

  if(advanceButtons.length == 6){
    jumpBottom();
    $("#btnFinish").removeClass("hidden");
    $("#btnFinish").focus();
    $("#btnFinish").css("transition", "all 1s ease-in");
  }
}
var advancePagination = [];
var totalPagination = 0;
function loadAdvancePagination() {
  for (let index = 0; index < advancePagination.length; index++) {
    if (advancePagination[index] > 0)
    $(`#numberPagination`).html(advancePagination[index] + " / 18");
    totalPagination = totalPagination + advancePagination[index];
  }
}

function openModal(i) {
  const { name, pages } = subCategories[i]
  subCategoriesConfig = { ...subCategoriesConfig, categoryIndex: i, index: 0, size: pages.length }

  $('#sectionTitle').html(name)
  $('#sectionPages').html(pages[0])
  $('#sectionImage')[0].src = `${slideImagesPath}img_section_${subCategoriesConfig.categotyId + 1}_${subCategoriesConfig.categoryIndex + 1}_${subCategoriesConfig.index + 1}.png`
  $('#currentPagination').html(`${subCategoriesConfig.index + 1} de ${subCategoriesConfig.size}`)
  $('.prev-pagination').attr('disabled', true)
  $('.next-pagination').attr('disabled', false)

  if (pages.length === 1) {
    $('#currentPagination').addClass('d-none')
    $('.prev-pagination').addClass('d-none')
    $('.next-pagination').addClass('d-none')
  } else {
    $('#currentPagination').removeClass('d-none')
    $('.prev-pagination').removeClass('d-none')
    $('.next-pagination').removeClass('d-none')
  }

  if (subCategoriesConfig.index === subCategoriesConfig.size - 1) {
    sectionsCompleted[subCategoriesConfig.categotyId][subCategoriesConfig.categoryIndex] = true
  }

  $('#sectionModal').modal()
}

function changePagination(type) {

  if (type === 'next') {
    if (subCategoriesConfig.index < subCategoriesConfig.size - 1) subCategoriesConfig.index += 1
  } else {
    if (subCategoriesConfig.index > 0) subCategoriesConfig.index -= 1
  }

  $('#currentPagination').html(`${subCategoriesConfig.index + 1} de ${subCategoriesConfig.size}`)
  $('#sectionPages').html(subCategories[subCategoriesConfig.categoryIndex].pages[subCategoriesConfig.index])
  $('#sectionImage')[0].src = `${slideImagesPath}img_section_${subCategoriesConfig.categotyId + 1}_${subCategoriesConfig.categoryIndex + 1}_${subCategoriesConfig.index + 1}.png`

  if (subCategoriesConfig.index === subCategoriesConfig.size - 1) {
    sectionsCompleted[subCategoriesConfig.categotyId][subCategoriesConfig.categoryIndex] = true
  }

  if (subCategoriesConfig.index === subCategoriesConfig.size - 1) {
    $('.next-pagination').attr('disabled', true)
    $('.prev-pagination').attr('disabled', false)
  } else if (subCategoriesConfig.index === 0) {
    $('.prev-pagination').attr('disabled', true)
    $('.next-pagination').attr('disabled', false)
  } else {
    $('.next-pagination').attr('disabled', false)
    $('.prev-pagination').attr('disabled', false)
  }
}

function checkCompletedSections() {
  for (let i = 0; i < sectionsCompleted[subCategoriesConfig.categotyId].length; i++) {
    if (sectionsCompleted[subCategoriesConfig.categotyId][i]) {
      $(`#section${i + 1}`).addClass('checked')
    }
  }

  $('#sectionModal').on('hidden.bs.modal', () => {
    for (let i = 0; i < sectionsCompleted[subCategoriesConfig.categotyId].length; i++) {
      if (sectionsCompleted[subCategoriesConfig.categotyId][i]) {
        $(`#section${i + 1}`).addClass('checked')
      }
    }
  })
}