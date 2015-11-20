function MoodPredictor() {
    this.HAPPY_WORDS = "delight, delighted, delightful, happy, glad, joy, joyful, merry, pleasant";
    this.SAD_WORDS = "disappointed, miserable, sad, sorrow, unhappy";
    this.textInput = '';
    this.inputArray = [];
    this.happyArray = [];
    this.sadArray = [];
    this.happyMatch = [];
    this.sadMatch = [];
};

MoodPredictor.prototype.wordsToArray = function(str) {
    this.arr = str.replace(/["',.]/g, '').split(' ');
    return this.arr;
};

MoodPredictor.prototype.matchingWords = function(arr, arr2) {
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

MoodPredictor.prototype.getText = function() {
    this.textInput = $('textarea#message').val().toLowerCase();
};

MoodPredictor.prototype.inputToArray = function() {
    var inputArray = moodpredictor.wordsToArray(this.textInput);
    return inputArray;
};

       // function matchHappyWords() {
       //  var happyMatch = moodpredictor.matchingWords(inputArray, happyArray);
       //  return happyMatch;
       // };

       // function matchSadWords() {
       //  var sadMatch = moodpredictor.matchingWords(inputArray, sadArray);
       //  return sadMatch;
       // };

       // function countHappyWords() {
       //  var countHappy = happyMatch.length;
       //  return countHappy;
       // };

       // function countSadWords() { 
       //  var countSad = sadMatch.length;
       //  return countSad;
       // };

       // function returnResult() {
       //  $('#result').attr('class', moodpredictor.isHappySadOrUnknown());
       // };

MoodPredictor.prototype.isHappySadOrUnknown = function() {
    if (this.isHappy()) {
        console.log('happy');
        return 'happy';
    } 
    if (this.isSad()) {
        console.log('sad');
        return 'sad';
    } 
    console.log('unknown');
    return 'unknown';
};

MoodPredictor.prototype.isHappy = function(count1, count2) {
    if ((count1 > 0) && count1 >= (count2 * 2)) {
        return true;
    }
};

MoodPredictor.prototype.isSad = function(count1, count2) {
    if ((count2 > 0) && count2 >= (count1 * 2)) {
    }
};

// MoodPredictor.prototype.returnResult = function() {
//     // $('#result').text(result);
//     console.log(isHappySadOrUnknown);
    
// }

// MoodPredictor.prototype.isHappySadOrUnknown = function(count1, count2) {
//     if ((count1 > 0) && count1 >= (count2 * 2)) {
//         result = "You seem Happy!"
//         var image = document.getElementById('resultImage')
//         image.src = 'img/happy.png'
//     } else if ((count2 > 0) && count2 >= (count1 * 2)) {
//         result = "Feeling Sad huh?";
//         var image = document.getElementById('resultImage')
//         image.src = 'img/sad.png'
//     } else {
//         result = "hmmm, we're going to call this 'Unknown'";
//         var image = document.getElementById('resultImage')
//         image.src = 'img/unknown.png'
//     }
// };