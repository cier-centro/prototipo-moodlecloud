//Establece la diapositiva inicial del cargador
var slideIndex2 = [
    [], 1
];
//Establece si ocultar la barra de control principal
var hideControlsStates = true;
//Establece en qué diapositivas se debe ocultar la barra de control principal (separar con coma)
var hiddenControlsStates = [1];
//Establece el texto y enlace de la primera miga de pan
var initialBreadcrumbLink = {
    title: "",
    link: []
};
var breadcrumNames = [];

var mainMenuContent = ``;

//Nombres de las carpetas internas (No se requiere modificar)
var structureNames = ["html", "CAP", "SCAP"];
// Nombres de los niveles internos de acuerdo a la jerarquia: ¨[[MOD, CAP, SCAP] , "Nombre"].
// para los recursos con un solo nivel, dejar el primer arreglo vacio (el nivel 0 es para el curso)
var names = [
];
//----
var coursename = "Competencias digitales del estudiante universitario";

var sessionName = '"HAZLO TÚ MISMO": CREAR CONTENIDO DIGITAL';
var caseName = 'Situación 2: Crear recursos ';