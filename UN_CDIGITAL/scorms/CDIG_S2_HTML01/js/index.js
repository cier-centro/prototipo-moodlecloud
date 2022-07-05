var slidesPaths = [],
  slideContents = [],
  generalPaths = [],
  startSlidesIndexes = [],
  finalSlidesIndexes = [];
var slideContentIndex = 0;
var previousSlideIndex;

// Rutas de los recursos
var slideImagesPath = "resources/images/"; // ruta imagenes
var slideAudioPath = "resources/audio/"; // ruta audios
var slideVideoPath = "resources/video/"; // ruta videos
var slideDocumentsPath = "resources/docs/"; // ruta documentos

// Actualiza la ruta de los recursos
function changePath(levelId) {
  if (levelId) {
    slideImagesPath = `resources/images/html${levelId}/`
    slideAudioPath = `resources/audio/html${levelId}/`
    slideVideoPath = `resources/video/html${levelId}/`
    slideDocumentsPath = `resources/docs/html${levelId}/`
    return
  }

  slideImagesPath = 'resources/images/'
  slideAudioPath = 'resources/audio/'
  slideVideoPath = 'resources/video/'
  slideDocumentsPath = 'resources/docs/'
}

//Not linear Nav
nextSlideID = 2;
prevSlideID = 1;
upSlideID = 1;

//variables for new Nav
var flagPrevNextInUse = false;
//be carefull with these variables below, because it should be use from 1 no from 0
var currentPossitionInLevel = 1;
var elementsInCurrentLevel = 1;
var currentPath = "/";
var preventProgress = false;

var currentActivityController = "";
//---

var sectionsCompleted = [[false, false], [false, false], [false, false], [false, false, false, false], [false, false, false, false]]

$(document).ready(function () {
  $.holdReady(true);
  initSCORMCommunication();
  $.holdReady(false);
  //is necessary to check this
  elementsInCurrentLevel = slidesContentArray["CONTENT"];
  //----- call firstSlide() for dev
});


//----
//----
//initial configuration section
//----
//----
function loadContent() {
  overrideNamesJSON();
  getSlidePath(slidesContentArray, "content");
  createSlidesContainers();
  loadScript(slidesPaths[slideIndex - 1], recursiveCallback);
  getGeneralPaths();
  loadMainMenuLinks();
  //logSlidesPaths();
}

function loadContent2() {
  setInitialHTML();
  overrideNamesJSON();
  //CREATE SLIDE CONTAINER
  goToSlide(slideIndex2[0], slideIndex2[1]);
  //loadScript2("content/"+currentPath+"s_"+currentPossitionInLevel+".js", "");
  loadMainMenuLinks();
  updateElementsInLevel("");
  checkHidePrevNext();
  hideControls();
}

function hideControls() {
  if (hideControlsStates) {
    $('#controls').hide();
  }
}

function setInitialHTML() {
  document.title = coursename;
}

function overrideNamesJSON() {
  for (var i = 0; i < names.length; i++) {
    switch (names[i][0].length) {
      case 0:
        slidesContentArray["NAME"] = names[i][1];
        break;
      case 1:
        slidesContentArray[structureNames[0] + "" + names[i][0][0]]["NAME"] = names[i][1];
        break;
      case 2:
        slidesContentArray[structureNames[0] + "" + names[i][0][0]][structureNames[1] + "" + names[i][0][1]]["NAME"] = names[i][1];
        break;
      case 3:
        slidesContentArray[structureNames[0] + "" + names[i][0][0]][structureNames[1] + "" + names[i][0][1]][structureNames[2] + "" + names[i][0][2]]["NAME"] = names[i][1];
    }
  }
}

//----
//----
//End of initial configuration section
//----
//----


//----
///
//// New Nav :)
///
//----


//Function to navigate to prev-next
function prevNext(buttonControl) {
  //check if it's in use
  if (flagPrevNextInUse) {
    return;
  }
  checkHidePrevNext();
  flagPrevNextInUse = true;
  var previousPath = "content/" + currentPath + "s_" + currentPossitionInLevel + ".js";
  var buttonId = $(buttonControl).attr("id");
  //AQUIYAYA
  var temp = currentPossitionInLevel + (((buttonId.indexOf("next") !== -1) && (currentPossitionInLevel + 1) <= elementsInCurrentLevel) ? 1 : buttonId.indexOf("prev") != -1 ? -1 : 0);
  if (temp != currentPossitionInLevel) {
    if (temp < 1) {
      //TODO: the next validation should be executed to check if back button is visible or not, so I suggest to check in the future how adapt it in its code section, not here
      // if you keep this code section must be some kind of prevention code not be used as core function
      var slidesInUpperLevels = findSlideUpperLevel();
      if (slidesInUpperLevels != -1) {
        currentPossitionInLevel = 1;
        currentPath = slidesInUpperLevels;
      } else {
        flagPrevNextInUse = false;
        return;
      }
    } else {
      //temp +0 to clone without $.extend
      currentPossitionInLevel = temp + 0;
    }
    unLoadSlide();
    loadScript2("content/" + currentPath + "s_" + currentPossitionInLevel + ".js", previousPath);
    prevNextStorePossition(currentPossitionInLevel);
  }
  flagPrevNextInUse = false;
  checkHidePrevNext();

}

//this two functions are used to search the nearest slide in the upper levels in the tree
function findSlideUpperLevel() {
  var temp = currentPath.split("/");
  temp.pop();
  if (temp == "" || temp == undefined || temp == null) {
    return -1;
  }
  var returnedString = recursiveSearch(temp, slidesContentArray);
  if (returnedString != "") {
    return returnedString;
  } else {
    if (slidesContentArray["CONTENT"] > 0) {
      return "";
    }
    return -1;
  }
}

function recursiveSearch(array, jsonPoss) {
  if (array.length < 1) {
    return -1;
  }
  if (array.length == 1) {
    if (jsonPoss[array[0]]["CONTENT"] > 0) {
      return array[0];
    }
    return -1;
  }
  var elementShiffed = array.shift();
  var contentCountLowerLevel = recursiveSearch(array, jsonPoss[elementShiffed]);
  if (contentCountLowerLevel != -1) {
    return elementShiffed + "/" + contentCountLowerLevel;
  } else {
    if (jsonPoss[elementShiffed]["CONTENT"] > 0) {
      return elementShiffed;
    }
    return -1;
  }
}

function updateElementsInLevel(array) {
  elementsInCurrentLevel = getContentInLevel(array.split("/"), slidesContentArray)

}

function getContentInLevel(array, jsonPoss) {

  //console.log(array);
  if (array.length < 1 || array == undefined) {
    return jsonPoss["CONTENT"];
  }
  //console.log(jsonPoss[0]);
  if (array.length == 1) {
    if (array[0] == "" || array[0] == null || array[0] == undefined) {
      return jsonPoss["CONTENT"];
    } else {
      return jsonPoss[array[0]]["CONTENT"];
    }
  }
  var elementShiffed = array.shift();
  var contentCountLowerLevel = getContentInLevel(array, jsonPoss[elementShiffed]);
  if (contentCountLowerLevel >= 0) {
    return contentCountLowerLevel;
  } else {
    return 0;
  }
}

function updateContent(filename) {
  removeJS(filename);
  //console.log("---------------"+filename);
  if (currentActivityController != "") {
    removeJS(currentActivityController);
  }
  $("#slides-container").empty();
  $("#slides-container").append(slideContent);
  //checkHidePrevNext();
  loadController(slideActivityContent.controller);
  $("#controlBreadcrumb").html(getBreadcrumbSlide2());

};

//divided to loadScript2 to avoid redundant calls and overcalling
function loadController(newControllerPath) {
  currentActivityController = newControllerPath;
  if (newControllerPath == undefined || newControllerPath == "" || newControllerPath == null) {
    return;
  }
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) { //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        loadActivityFunction(slideActivityContent, "");
        $("#controls").removeClass("disabled");
      }
    };
  } else { //Others browsers
    script.onload = function () {
      loadActivityFunction(slideActivityContent, "");
      $("#controls").removeClass("disabled");
    };
  }


  script.src = newControllerPath
  //console.log(newControllerPath);
  document.getElementsByTagName("head")[0].appendChild(script);
}


function loadScript2(url, latestFile) {
  //checkHidePrevNext();
  preventProgress = false;
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) { //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        updateContent(latestFile);
        specialNavigationControll();
      }
    };
  } else { //Others browsers
    script.onload = function () {
      //console.log(latestFile);
      updateContent(latestFile);
      specialNavigationControll();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}


function goToSlide(arrayPathNumbers, slidePositionInLevel) {

  //this allows overload goToSlide method using just arraypath
  if (slidePositionInLevel == undefined || slidePositionInLevel == null) {
    slidePositionInLevel = 1;
  }


  var temporalPath = "";
  var previousPath = "content/" + currentPath + "s_" + currentPossitionInLevel + ".js";

  if (arrayPathNumbers.length == 0) changePath()

  for (var i = 0; i < arrayPathNumbers.length; i++) {

    //error just in case structureNames are no updated or arraypathnumbers hasn't the right length
    if (i >= structureNames.length) {
      console.error("La ruta " + arrayPathNumbers + " es inaccesible pues su largo supera a los valores declarados " + structureNames);
      return;
    }
    temporalPath = temporalPath + "" + structureNames[i] + "" + arrayPathNumbers[i] + "/";
    chtml = arrayPathNumbers[i];

    changePath(arrayPathNumbers[i])
  }
  try {
    //console.log("chtml: "+chtml);
    loadScript2("content/" + temporalPath + "s_" + slidePositionInLevel + ".js", previousPath);
    updateElementsInLevel(temporalPath);
    //update the navigation reference values after everything is loaded
    currentPath = temporalPath + "";
    currentPossitionInLevel = slidePositionInLevel + 0;
    storePossitionString(arrayPathNumbers, slidePositionInLevel);
  } catch (e) {
    console.error("El elemento " + arrayPathNumbers + " no ha sido encontrado");
  }
  checkHidePrevNext();
  $("#prevControlButton").removeClass("hidden");
  $("#nextControlButton").removeClass("hidden");
}

//Not linear nav in #controls
function navToSlide(dest) {
  //reset custom transition
  $("#nextControlButton").css("transition", "none");
  $("#nextControlButton").css("transition", "none");
  //
  if (dest == "prev") {
    goToSlide([], prevSlideID);
  }
  if (dest == "next") {
    goToSlide([], nextSlideID);
  }
}

function storePossitionString(arrayPath, slidePoss) {
  var temporalJson = {
    "array": arrayPath,
    "possitionInLevel": slidePoss
  };
  scormData.lessonLocation = JSON.stringify(temporalJson);
}

function prevNextStorePossition(currentPoss) {
  var temporalJson = JSON.parse(scormData.lessonLocation);
  storePossitionString(temporalJson["array"], currentPoss);
}

function checkHidePrevNext() {
  //check if next button should be visible

  if (currentPossitionInLevel < elementsInCurrentLevel) {
    $('#nextControlButton').removeClass("hidden");
    $('#nextControlButton').addClass("item-visible");
  } else {
    $('#nextControlButton').addClass("hidden");
    $('#nextControlButton').removeClass("item-visible");
  }
  //check if previous button should be visible
  //if(currentPossitionInLevel>1||findSlideUpperLevel()!=-1){
  if (currentPossitionInLevel > 1) {
    $('#previousControlButton').removeClass("hidden");
    $('#previousControlButton').addClass("item-visible");
  } else {
    $('#previousControlButton').addClass("hidden");
    $('#previousControlButton').removeClass("item-visible");
  }
}

function specialNavigationControll() {
  try {
    if (preventProgress) {
      $('#nextControlButton').addClass("hidden");
      $('#nextControlButton').removeClass("item-visible");
    }
  } catch (e) {}
}

function allowProgress() {
  preventProgress = false;
  specialNavigationControll();
}

function getBreadcrumbSlide2() {
  var breadcrumbsLinks = [];
  breadcrumbsLinks.push(initialBreadcrumbLink);
  var currentUrlArray = currentPath.split("/");
  currentUrlArray.pop();
  var currentTraceJson = [];
  var breadcrumbAnchors = "";

  //because with the manipulation i had been modifying both jsons
  var temporalJson = JSON.parse(JSON.stringify(slidesContentArray));

  //console.log(currentUrlArray.length+"    "+currentUrlArray);
  for (var i = 0; i < currentUrlArray.length; i++) {

    if (currentUrlArray[i] != undefined && currentUrlArray[i] != "" && currentUrlArray[i] != null) {

      temporalJson = temporalJson[currentUrlArray[i]];
      currentTraceJson.push(currentUrlArray[i].replace(structureNames[i], ''));
      //console.log(currentTraceJson);
      //console.log("--------------"+currentUrlArray[i]);
      breadcrumbAnchors += "<li class='breadcrumb-item'><a href='#' onclick='goToSlide([" + currentTraceJson + "])' >" + temporalJson["NAME"] + "</a></li>";
      //breadcrumbsLinks.push({title: temporalJson["NAME"], link: currentTraceJson});
    }
  }
  /*
  breadcrumbsLinks.forEach(function(value, index) {
    breadcrumbAnchors +=  "<a class='breadcrumb-item' href='#' onclick='goToSlide([" + value.link + "])' >" + value.title + "</a>";
  });*/
  //console.log(breadcrumbAnchors);
  breadcrumbAnchors = "<li class='breadcrumb-item'><a href='#' onclick='goToSlide([])' > " + initialBreadcrumbLink.title + " </a></li>" + breadcrumbAnchors;
  if (slideTitle !== "") {
    breadcrumbAnchors += "<li class='breadcrumb-item' aria-current='page'>" + slideTitle + "</li>";
  }
  return breadcrumbAnchors;
}

//----
///
//// End of new Nav
///
//----

//TODO: readapt this
function loadMainMenuLinks() {
  $("#mainMenu .list-group").append(mainMenuContent);
}



function unLoadSlide() {
  if (typeof onExitCurrentSlide == 'function') {
    onExitCurrentSlide();
  }
}



function reloadSlide(n) {
  previousSlideIndex = slideIndex;
  slideIndex = n;
  loadScript(slidesPaths[slideIndex - 1], recursiveCallback);
  $("#mainMenu").modal("hide");
}

//keep me
function removeJS(filename) {
  var tags = document.getElementsByTagName('script');
  for (var i = tags.length; i >= 0; i--) {
    if (tags[i] && tags[i].getAttribute('src') != null && tags[i].getAttribute('src').indexOf(filename) != -1) {
      tags[i].parentNode.removeChild(tags[i]);
    }
  }
}


function onExit() {
  exitSCORM();
}