function MoodPredictor() {
    this.happyWords = "delight, delighted, delightful, happy, glad, joy, joyful, merry, pleasant";
    this.sadWords = "disappointed, miserable, sad, sorrow, unhappy";
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

MoodPredictor.prototype.happySadOrUnknown = function(count1, count2) {
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