
$(document).ready(function () {
    //Initial array
    var shows = ["Rick and Morty", "Parks and Recreation", "Doctor Who", "Community", "30 Rock", "The Office", "Spaced"]
    //API key
    var giphyKey = "kXYENqTT14lojw7Hv5SK1sXRuSXP9T9y"
    //Gotta add the buttons for the TV shows. Also, we must empty the list so we aren't repeating everything.
    function renderButtons() {
        console.log("Hello world");
        $("#buttons-view").empty();
        for (var i = 0; i < shows.length; i +=1) {
            //console.log(shows[i]);
           var a = $("<button>");
            a.addClass("show");
            a.attr("data-name", shows[i]);
            a.text(shows[i]);
            $("buttons-view").append(a);
    
        };
    };
    renderButtons();
})
