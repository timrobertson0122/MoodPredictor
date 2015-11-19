moodpredictor = new MoodPredictor();

$(document).ready(function() {

    happyArray = moodpredictor.wordsToArray(moodpredictor.happyWords);
    sadArray = moodpredictor.wordsToArray(moodpredictor.sadWords);

    $('#input').on("click", function(evnt) {
        textInput = $('textarea#message').val().toLowerCase();
        inputArray = moodpredictor.wordsToArray(textInput);
        happyMatch = moodpredictor.matchingWords(inputArray, happyArray);
        countHappy = happyMatch.length;
        sadMatch = moodpredictor.matchingWords(inputArray, sadArray);
        countSad = sadMatch.length;
        moodpredictor.happySadOrUnknown(countHappy, countSad);
        $('#result').text(result);
        console.log("Happy words found:" + " " + countHappy)
        console.log("Sad words found:" + " " + countSad)
        evnt.preventDefault();
    });
});