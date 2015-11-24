function MoodPredictor() {
    this.HAPPY_WORDS = "delight, delighted, delightful, happy, glad, joy, joyful, merry, pleasant";
    this.SAD_WORDS = "disappointed, miserable, sad, sorrow, unhappy";
    this.happyResult = "HAPPY - You seem happy!"
    this.sadResult = "SAD - Oh no, so sad - cheer up!"
    this.unknownResult = "UKNOWN - Hmm, our sophisticated word matching system can't figure that out, can you elaborate?!"
    this.noResult = "Please enter some text."
    this.textInput = '';
    this.inputArray = [];
    this.happyArray = [];
    this.sadArray = [];
    this.happyMatch = [];
    this.sadMatch = [];
    this.countHappy = 0;
    this.countSad = 0;   
};

MoodPredictor.prototype.wordsToArray = function(str) {
    this.arr = str.replace(/["',.]/g, '').split(' ');
    return this.arr;
};

MoodPredictor.prototype.matchingWords = function(arr, arr2) {
    this.res = [];
    arr.sort();
    arr2.sort();
    for (var i = 0; i < arr.length; i += 1) {
        if (arr2.indexOf(arr[i]) > -1) {
            this.res.push(arr[i]);
        }
    }
    return this.res;
};

MoodPredictor.prototype.noTextEntered = function() {
    if (this.textInput = '') {
        return true;
    }
};

MoodPredictor.prototype.isHappySadOrUnknown = function(count1, count2, text) {
    if (text != '') {
        if ((count1 > 0) && count1 >= (count2 * 2)) {
            return this.happyResult;
        } else if ((count2 > 0) && count2 >= (count1 * 2)) {
            return this.sadResult;
        } else {
            return this.unknownResult;
        }  
    } else {
        return this.noResult;
    };
};

MoodPredictor.prototype.calculateMood = function() {
    var happyArray = this.wordsToArray(this.HAPPY_WORDS);
    var sadArray = this.wordsToArray(this.SAD_WORDS);
    var inputArray = this.wordsToArray(textInput);
    var happyMatch = this.matchingWords(inputArray, happyArray);
    var sadMatch = this.matchingWords(inputArray, sadArray);
    var countHappy = happyMatch.length;
    var countSad = sadMatch.length;
    console.log("Happy words found:" + " " + countHappy)
    console.log("Sad words found:" + " " + countSad)
    var outcome = this.isHappySadOrUnknown(countHappy,countSad, textInput);
    console.log(textInput)
    return outcome;
};