$(document).ready(function() {

    $('#input').on("click", function(event) {
        
        textInput = $('textarea#message').val().toLowerCase();
        var result = new MoodPredictor(textInput).calculateMood();
        $('#result').text(result);            
        $('#result').attr('class', result);
        event.preventDefault();
    });
});