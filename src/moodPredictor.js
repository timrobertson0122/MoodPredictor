var happyWords = "delight, delighted, delightful, happy, glad, joy, joyful, merry, pleasant";
var sadWords = "disappointed, miserable, sad, sorrow, unhappy";
var textInput = '';
var inputArray = [];
var happyArray = [];
var sadArray = [];
var happyMatch = [];
var sadMatch = [];

var wordsToArray = function(str) {
    str = str.replace(/["',.]/g, '').split(' ');
    return str;
};

var matchingWords = function(arr, arr2) {
    var ret = [];
    arr.sort();
    arr2.sort();
    for (var i = 0; i < arr.length; i += 1) {
        if (arr2.indexOf(arr[i]) > -1) {
            ret.push(arr[i]);
        }
    }
    return ret;
};

var happySadOrUnknown = function(count1, count2) {
    if ((count1 > 0) && count1 >= (count2 * 2)) {
        result = "You seem Happy!"
        var image = document.getElementById('resultImage')
        image.src = 'img/happy.png'
    } else if ((count2 > 0) && count2 >= (count1 * 2)) {
        result = "Feeling Sad huh?";
        var image = document.getElementById('resultImage')
        image.src = 'img/sad.png'
    } else {
        result = "hmmm, we're going to call this 'Unknown'";
        var image = document.getElementById('resultImage')
        image.src = 'img/unknown.png'
    }
};

$(document).ready(function() {

    happyArray = wordsToArray(happyWords);
    sadArray = wordsToArray(sadWords);

    $('#input').on("click", function(evnt) {
        textInput = $('textarea#message').val().toLowerCase();
        inputArray = wordsToArray(textInput);
        happyMatch = matchingWords(inputArray, happyArray);
        countHappy = happyMatch.length;
        sadMatch = matchingWords(inputArray, sadArray);
        countSad = sadMatch.length;
        happySadOrUnknown(countHappy, countSad);
        $('#result').text(result);
        console.log("Happy words found:" + " " + countHappy)
        console.log("Sad words found:" + " " + countSad)
        evnt.preventDefault();
    });
});
