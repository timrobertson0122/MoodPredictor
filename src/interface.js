moodpredictor = new MoodPredictor();
happyArray = moodpredictor.wordsToArray(moodpredictor.HAPPY_WORDS);
sadArray = moodpredictor.wordsToArray(moodpredictor.SAD_WORDS);

$(document).ready(function() {

    $('#input').on("click", function() {
        
        moodpredictor.getText();
        moodpredictor.inputToArray();
       

        moodpredictor.isHappy(countHappy, countSad);
        moodpredictor.isHappySadOrUnknown();

        $('#result').text(result);
        console.log("Happy words found:" + " " + countHappy)
        console.log("Sad words found:" + " " + countSad)
    });
});