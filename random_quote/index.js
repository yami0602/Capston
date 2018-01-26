function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (response) {
            $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p> ")
        }
    });
}

$("button").click(function () {
    var myColors = ['#ca4a4a', '#ca4aa3', '#8d4aca', '#4c4aca', '#4a9bca', '#4acabe', '#4aca5a', '#b0ca4a', '#ca7f4a', ];
    var randomize = Math.floor(Math.random() * myColors.length);
    $('#random_quote').hide().fadeIn(400).delay(400);
    $('#img').hide().fadeIn(400).delay(400);
    $('body').css("background-color", myColors[randomize]);
    document.getElementById('quote').remove();
    document.getElementById("head").remove();
    randomQuote();
});

function clickToTweet() {
    var twitterDe = "https://twitter.com/intent/tweet?text=";
    var text = $("#random_quote").text();
    var tweet = twitterDe + text;
    $("#twitter").attr("href", tweet);
}