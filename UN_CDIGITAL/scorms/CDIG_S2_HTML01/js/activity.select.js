//-------------------------------
//----Actividad Select-----------
//----------Version 1.0----------
//-------------------------------
//-------------------------------

function loadActivityFunction(content) {
    activityContent = $.extend(true, {}, content);
    //funcion de activacion de la actividad
}

function setCurrentSelectValue(element, id) {
    currentSelection = id;
    completed[currentSelection - 1] = 1;
    if (element.value > 0) {
        checkSelect(element.value);
    }else{

        $("#select_" + currentSelection).removeClass("wrong");
        $("#select_" + currentSelection).removeClass("correct");
    }
}

function checkSelect(id) {
    console.log("check "+currentSelection+":"+id);

    if(activityContent.passiveRetro){
        if (answer[currentSelection] == id) {
            currentAnswer[currentSelection] = 1;
            $("#select_" + currentSelection).removeClass("wrong");
            $("#select_" + currentSelection).addClass("correct");
            $("#select_" + currentSelection).addClass("disabled");
            toggleAudio('success');

        } else {
            currentAnswer[currentSelection] = 0;
            $("#select_" + currentSelection).removeClass("correct");
            $("#select_" + currentSelection).addClass("wrong");
            toggleAudio('error');
        }
        checkAnswers()
    }
    else{
        if (answer[currentSelection] == id) {
            currentAnswer[currentSelection] = 1;

        } else {
            currentAnswer[currentSelection] = 0;
        }
    }

}

function checkAnswers() {
    var result = currentAnswer.reduce((a, b) => a + b, 0);
    var complete = completed.reduce((a, b) => a + b, 0);
    if (complete == totalSelect) {
        if (result == totalSelect) {
            //showModal Correcto
            setAndOpenModal("success", activityContent.finalFeedback);
        } else {
            if(!activityContent.passiveRetro){
                setAndOpenModal("error", activityContent.finalFeedback);
                $('#btn-resetQuestion').removeClass('disabled');
                $('#btn-endQuestion').addClass('disabled');
                $(".custom-select").addClass("disabled");
            }
        }
    } else {
        if(!activityContent.passiveRetro){
            setAndOpenModal("error", activityContent.finalFeedback);
            $('#btn-resetQuestion').removeClass('disabled');
            $('#btn-endQuestion').addClass('disabled');
            $(".custom-select").addClass("disabled");
        }
    }
}

function resetActivity() {
    $(".custom-select").removeClass("disabled");
    totalCorrect = 0;
    currentSelection = 0;
    currentAnswer.fill(0, 0, totalSelect);
    completed.fill(0, 0, totalSelect);

    for (k = 1; k <= totalSelect; k++) {
        $("#select_" + k).prop('disabled', false);
        $("#select_" + k + " option[value='0']").prop('selected', true);

        for(j = 0; j< $("#select_" + k)[0].options.length; j++)
        {
            $("#select_" + k)[0].options[j].selected = false;
        }
    }

    $('#btn-resetQuestion').addClass('disabled');
    $('#btn-endQuestion').removeClass('disabled');
}

function exitSlide() {
    for (k = 1; k <= totalSelect; k++) {
        $("#select_" + k).prop('disabled', true);
    }
}

function correct(){
    for(i=1;i<=totalSelect;i++){
        $("#select_"+i).val(answer[i]);
        $("#select_"+i).addClass("disabled");
    }
    $('#btn-endQuestion').addClass('disabled');
    $('#btn-resetQuestion').removeClass('disabled');
    $("#nextControlButton").removeClass("hidden");
}