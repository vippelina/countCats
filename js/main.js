$(document ).ready(function() {
	console.log("hej jqeury laddat");
    var nrOfCats = 0;

    function incrementNrOfCats(){
    	nrOfCats ++;
    	updateView();
    }

    function decrementNrOfCats(){
    	nrOfCats --;
    	updateView();
    }

    function updateView(){
    	$(".number p").text(nrOfCats);
    	$(".cats").html("");
    	for (var i = 0; i < nrOfCats; i++) {
    		$(".cats").append("<img class='cat' src='./img/cat.png'/>");
    	}
    }

    $("button.increment").click(function(){
    	incrementNrOfCats();
    })

    $("button.decrement").click(function(){
    	decrementNrOfCats();
    })
});