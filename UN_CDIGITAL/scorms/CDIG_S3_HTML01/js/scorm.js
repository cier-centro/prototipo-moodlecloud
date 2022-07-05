//-------------------------------
//-------------SCORM-------------
//----------Version 1.0----------
//-------------------------------
// Funcionalidad para procesar el avance, resultados y otros datos obtenibles de los contenidos del paquete SCORM.
// Comunicación implementada a través del SCORM wrapper v1.1.6 por Philip Hutchison, Mayo 2008 (http://pipwerks.com)
//------------TO DO--------------
//
//
//-------------------------------
// Variables
// Definir si se permite la comunicación con el lms para el paquete
var allowScorm = true;
// TODO Establecer dentro del config debug
var allowScormLog = true;
// Valor personalizable que podemos enviar entre el scorm y el lms
var scorm_custom_data = "";
//-------------------------------
//SCORM Comunication
// Vincular con el sistema de datos del SCORM_API_wrapper
var scorm = pipwerks.SCORM;
// Bool de conexión con el lms
var lmsConnected = false;
var continueSCORMLesson = false;
var lastLessonLocation = 0;
var firstScormLocation = false;
//-------------------------------
// Funciones
//Establece Comunicación con el lms
function initSCORMCommunication() {
    showLog("-------------------------------", "log");
    showLog("---SCORM---Log---", "log");
    showLog("-------------------------------", "log");
    //Verifica la conexion con el lms
    if (allowScorm) {
        showLog("SCORM");
        lmsConnected = scorm.init();
        //Si se conecta exitosamente
        if (lmsConnected) {
            showLog("SCORM: Conected", "log");
            //-------------------------------
            //Obtener estado completado
            scormData.lessonStatus = scorm.get("cmi.core.lesson_status");
            setSCORMInitialStatus();
            //-------------------------------
            //Obtener nombre estudiante
            scormData.studentName = scorm.get("cmi.core.student_name");
            //Si se ha identificado
            if (scormData.studentName) {
                showLog("User Name: " + scormData.studentName, "log");
                // Definir si es necesario
            }
            else {
                showLog("Student's name Not available", "warn")
                // Definir si es necesario
            }
            //-------------------------------
            //Obtener datos únicos
            scormData.suspendData = scorm.get("cmi.suspend_data");
            //Si se han obtenido datos
            if (!scormData.suspend_data) {
                currentSessionAdvance = scormData.suspendData.split(',').map(x => +x);
                showLog("Load last save data: " + currentSessionAdvance, "log");
                setAdvance();
            }
            else {
                showLog("First Log: previous save data not found", "log");
                setInitialadvanceData();
            }
            //-------------------------------
            //Obtener avance
            scormData.lessonLocation = scorm.get("cmi.core.lesson_location");
            if (scormData.lessonLocation == '{"array":[],"possitionInLevel":1}') {
                firstScormLocation = true;
            };
            //Si se ha obtenido datos de avance
            if (scormData.lessonLocation) {
                showLog("Current lesson location: " + scormData.lessonLocation, "log");
                lastLessonLocation = JSON.parse(scormData.lessonLocation);
                loadContent2();
                if (!firstScormLocation) {
                    continueSCORMLesson = true;
                }
            }
            else {
                //Cargar desde el primer slide
                showLog("First Log: previous lesson location not found", "log");
                loadContent2();

            }
        }
        else {
            showLog("Error: Course could not connect with the LMS");
            loadContent2();
            setInitialadvanceData();
        }
    }
    //-------------------------------
    else {
        showLog("SCORM disabled", "log");
        loadContent2();
        setInitialadvanceData();
    }
}
//-------------------------------
//Ejecutar al salir
function exitSCORM() {
    showLog("-------------------------------", "log");
    showLog("Exit SCORM", "log");
    if (lmsConnected) {
        setSCORMlessonStatus();
        setSCORMSuspendData();
        setSCORMLessonLocation();
        scorm.quit();
    } else {
        showLog("Course is not connected to the LMS", "error");
    }
}
//-------------------------------
//Establecer estado inicial
function setSCORMInitialStatus() {
    //Si ya se ha completado
    if (scormData.lessonStatus === "completed" || scormData.lessonStatus === "passed") {
        showLog("Status: " + scormData.lessonStatus, "log");
    } else {
        scormData.lessonStatus = "incomplete";
        showLog("Status: " + scormData.lessonStatus, "log");
    }
}
//-------------------------------
//Retomar la sesión anterior
function setSCORMCurrentLessonLocation() {
    $('#initSCORMModal').on('hidden.bs.modal', function (e) {
        slideIndex2[0] = lastLessonLocation["array"];
        slideIndex2[1] = lastLessonLocation["possitionInLevel"];
        showLog("Continue: ([" + slideIndex2[0] + "]," + slideIndex2[1] + ")", "log");
        goToSlide(slideIndex2[0], slideIndex2[1]);
    });
}
//-------------------------------
//Establecer estado Completado
function setSCORMlessonStatus() {
    // Guardar estado avance
    var lesson_status_value = scorm.set("cmi.core.lesson_status", scormData.lessonStatus);
    // Forzar guardado en el lms
    scorm.save();
    if (lesson_status_value) {
        showLog("Status " + scorm.get("cmi.core.lesson_status"), "log");
    } else {
        showLog("Course status could not be set", "error");
    }
}
//-------------------------------
//Establecer datos únicos
function setSCORMSuspendData() {
    // Guardar datos únicos
    var suspend_data_value = scorm.set("cmi.suspend_data", scormData.suspendData);
    // Forzar guardado en el lms
    scorm.save();
    if (suspend_data_value) {
        showLog("Saved Suspend Data: " + scorm.get("cmi.suspend_data"), "log");
    } else {
        showLog("Suspend Data could not be set", "error");
    }
}
//-------------------------------
//Establecer avance
function setSCORMLessonLocation() {
    //Guardar slide actual
    var lessonLocation_value = scorm.set("cmi.core.lesson_location", scormData.lessonLocation);
    // Forzar guardado en el lms
    scorm.save();
    if (lessonLocation_value) {
        showLog("Current lesson location: " + scorm.get("cmi.core.lesson_location"), "log");
    } else {
        showLog("Error: Lesson Location could not be set!", "error");
    }
}
//-------------------------------
//ConsoleLog
function showLog(msg, type) {
    if (allowScormLog) {
        switch (type) {
            case "error":
                console.error(msg);
                break;
            case "warn":
                console.warn(msg);
                break;
            case "log":
                console.log(msg);
                break;
        }
    }
}
//-------------------------------
function setInitialadvanceData() {
    currentSessionAdvance.fill(0, 0, totalResources);
}
//-------------------------------
