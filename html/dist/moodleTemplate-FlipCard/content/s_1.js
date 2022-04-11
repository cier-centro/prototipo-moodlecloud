var slideTitle = "";
var slideContent = `
<div class="col-12 ">
    <div class="row h-100 main-content">
        <div class="col-12">
            <main class="row justify-content-center content align-items-center h-100 pt-3">
                <div class="col-11 col-lg-10 flipping-cards">
                    <div class="row justify-content-center align-items-center card-deck ">
                        <button class="btn flip-card-active col-md-4 col-xl-3 mb-2 mb-2" id="card_1" >
                            <div class="flip-card-inner">
                                <div class="flip-card-front shadow rounded">
                                    <h2 class="text-white mx-auto align-self-center">Ver contenido</h2>
                                    <img class="img-fluid img-flip" src="${slideImagesPath}img_card_flip.png">
                                </div>
                                <div class="flip-card-back shadow rounded row m-0 justify-content-center align-items-center">
                                    <div class="col-12">
                                        <p class="mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita quasi magnam sed incidunt in ratione consequatur excepturi voluptatem odit dolore deserunt reiciendis eligendi, veniam, fuga repudiandae eaque enim non.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button class="btn flip-card-active col-md-4 col-xl-3 mb-2" id="card_2" >
                            <div class="flip-card-inner">
                                <div class="flip-card-front rounded shadow">
                                    <h2 class="text-white mx-auto align-self-center">Ver contenido</h2>
                                    <img class="img-fluid img-flip" src="${slideImagesPath}img_card_flip.png">
                                </div>
                                <div class="flip-card-back shadow rounded row m-0 justify-content-center align-items-center">
                                    <div class="col-12">
                                        <p class="mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita quasi magnam sed incidunt in ratione consequatur excepturi voluptatem odit dolore deserunt reiciendis eligendi, veniam, fuga repudiandae eaque enim non.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button class="btn flip-card-active col-md-4 col-xl-3 mb-2" id="card_3" >
                            <div class="flip-card-inner">
                                <div class="flip-card-front shadow rounded">
                                    <h2 class="text-white mx-auto align-self-center">Ver contenido</h2>
                                    <img class="img-fluid img-flip" src="${slideImagesPath}img_card_flip.png">
                                </div>
                                <div class="flip-card-back shadow rounded row m-0 justify-content-center align-items-center">
                                    <div class="col-12">
                                        <p class="mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita quasi magnam sed incidunt in ratione consequatur excepturi voluptatem odit dolore deserunt reiciendis eligendi, veniam, fuga repudiandae eaque enim non.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    totalCards: 3,
    //Permitir que se activen las cartas al hacer clic (true/false)
    allowClick: true
};


$(document).ready(function () {
    scormData.lessonStatus = "completed";
    setTimeout(() => {
    fix_height()
    }, 1500);
    window.addEventListener('resize', fix_height);
});
//fix height
function fix_height(){
    console.log("hfix");
    for(let i=1;i<=3;i++){
        let box = document.querySelector('#card_'+i+' .flip-card-back');
        $("#card_"+i+" .flip-card-back").attr('style',"height: auto! important");
        console.log(box);
        $("#card_"+i+" .flip-card-back").attr('style',"height:"+(box.clientHeight+20)+"px !important")
        $("#card_"+i).attr('style',"height:"+(box.clientHeight+20)+"px !important")
    }
}
