$("#quiz").submit(function(event) 
{
    event.preventDefault();

    var answers = $(this).serializeArray();

    var scores = {
        shrek: 0,
        crow: 0,
        cat: 0,
        swan: 0
    };

    for(var answer of answers){ 
        scores[answer.value] +=1;
    }

    var maxAnimal = "shrek";

    for(var animal in scores){
        if(scores[animal] > scores[maxAnimal]){
            maxAnimal = animal;
        }
    }
    
    $("#quiz").css('display', 'none');
    $(".result#"+maxAnimal).css('display', 'block');
}); 