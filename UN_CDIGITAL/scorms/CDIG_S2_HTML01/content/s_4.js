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
                            <p class="mb-0">Tatiana decide escribir tres borradores para preguntarle al profesor qué ocurrió con su nota del parcial. Consulta los borradores y toma nota del que consideres más adecuado a la situación.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center tabs bg-white rounded-bottom py-3">
                        <div class="col-11">
                            <div class="tab-container row justify-content-between align-items-start">
                                <div class="col-md-4 nav nav-pills g-0" role="tablist" aria-orientation="vertical">
                                    <button id="tab-link-1" class="nav-link active" data-bs-toggle="pill" data-bs-target="#tab-1" type="button" role="tab" aria-controls="" aria-selected="true">Borrador 1</button>
                                    <button id="tab-link-2" class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-2" type="button" role="tab" aria-controls="" aria-selected="false">Borrador 2</button>
                                    <button id="tab-link-3" class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-3" type="button" role="tab" aria-controls="" aria-selected="false">Borrador 3</button>
                                </div>
                                <div class="col-md-8 tab-content px-md-4 align-self-center py-3 py-md-0">
                                    <div id="tab-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-link-1">
                                        <p class="mb-0">Hola profe, quisiera saber qué ocurrió con mi nota del parcial. Me aparece que fue cero, pero no entiendo.</p>
                                    </div>
                                    <div id="tab-2" class="tab-pane fade py-3" role="tabpanel" aria-labelledby="tab-link-2">
                                        <p>Buenas tardes/días, profesor.</p>
                                        <p>Mi nombre es Tatiana, soy estudiante de tercer semestre de ingeniería mecatrónica y estoy cursando la asignatura “Cálculo integral”. Hace dos semanas presenté el parcial, pero al consultar mi nota en el Moodle encuentro que esta es de 0. </p>
                                        <p>Por lo anterior, quisiera preguntarle si efectivamente esa es mi nota del parcial o si ocurrió algún error con la calificación en la plataforma.</p>
                                        <p class="mb-0">Quedo atenta, muchas gracias.</p>
                                    </div>
                                    <div id="tab-3" class="tab-pane fade" role="tabpanel" aria-labelledby="tab-link-3">
                                        <p class="mb-0">Buenas tardes/días profesor. Quisiera saber si mi nota del parcial es correcta, ¡gracias!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="row align-items-center justify-content-between mt-3">
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],3)" class="btn btn-nav rounded-pill shadow w-100 prev" data-toggle="tooltip" title="Anterior">Anterior</button>
                        </div>
                        <div class="col-5 col-md-3 col-lg-2">
                            <button onclick="goToSlide([],5)" class="btn btn-nav rounded-pill shadow w-100 next" data-toggle="tooltip" title="Siguiente">Siguiente</button>
                        </div>
                    </nav>
                </div>
            </main>
        </div>
    </div>
</div>
`;

var slideActivityContent = {

};
$(document).ready(function () {

});