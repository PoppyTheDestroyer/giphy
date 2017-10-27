
$(document).ready(function () {
    //Initial array
    var shows = ["Rick and Morty", "Spaced", "Parks and Recreation", "Doctor Who", "Community", "30 Rock", "The Office"]
    //Make a function to search the Giphy website
    function displayShow() {
        //API key
        //var giphyKey = "kXYENqTT14lojw7Hv5SK1sXRuSXP9T9y";
        var show = $(this).attr("data-name");
        //Search query
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=kXYENqTT14lojw7Hv5SK1sXRuSXP9T9y&limit=10";
        //Ajax call
        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function (response) {
            var results = response.data;
            console.log("Jason, you are so smart");
            //
            for (var i = 0; i < results.length; i += 1) {

                var showDiv = $("<div class='newImage'>");

                var p = $("<p>").text("Rating: " + results[i].rating);

                var showImage = $("<img>");
                showImage.attr("src", results[i].images.fixed_height_still.url);
                showImage.attr("data-animate", results[i].images.fixed_height.url)
                showImage.attr("data-still", results[i].images.fixed_height_still.url)
                showImage.attr("data-state", "still");
                showDiv.append(showImage);
                showDiv.append(p);
                $("#showsGoHere").prepend(showDiv);
            }
        })
    };
    //Gotta add the buttons for the TV shows. Also, we must empty the list so we aren't repeating everything.
    function renderButtons() {
        console.log("The buttons work so far.");
        $("#buttons-view").empty();
        for (var i = 0; i < shows.length; i += 1) {
            //console.log(shows[i]);
            var a = $("<button>");
            a.addClass("imageShow");
            a.attr("data-name", shows[i]);
            a.text(shows[i]);
            $("#buttons-view").append(a);
        };
        $("#show-input[type='text']").val("");
    };
    $(document).on("click", "img", function () {
        console.log("Blarg");
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
console.log("farts");
    })
    //Need to add a show button from user submission
    $("#add-show").on("click", function (event) {
        event.preventDefault();
        var show = $("#show-input").val().trim();
        shows.push(show);
        renderButtons();
    })
    //Event listener for the button click
    $(document).on("click", ".imageShow", displayShow);
    //Call button function
    renderButtons();
})
