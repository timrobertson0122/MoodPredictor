
describe('MoodPredictor', function(){

  var moodpredictor;

  beforeEach(function() {
    moodpredictor = new MoodPredictor();
  });

  describe('on initialisation it contains', function() {

    it('a string of happy words and a string of sad words', function() {
      expect(moodpredictor.HAPPY_WORDS).toContain('happy');
      expect(moodpredictor.SAD_WORDS).toContain('sad');
    });
  });

  describe('logic', function() {

    it('converts a string to an array', function() {
      str = "this is a test string";
      moodpredictor.wordsToArray(str);
      expect(moodpredictor.arr).toEqual(jasmine.any(Array));
      expect(moodpredictor.arr).toContain("this");
    });

    it('compares two arrays for exact matches', function() {
      arr = ["this", "is", "a", "test", "array"];
      arr2 = ["and", "so", "is", "this"];
      moodpredictor.matchingWords(arr, arr2);
      expect(moodpredictor.res).toContain("is");
      expect(moodpredictor.res).not.toContain("test");
    });

    it('can return a happy result when there are at least 50% more happy words than sad words', function() {
      happy = 4;
      sad = 1;
      moodpredictor.isHappySadOrUnknown(happy,sad);
      expect(moodpredictor.isHappySadOrUnknown(4,1)).toEqual(moodpredictor.happyResult);
    });

    it('will return a sad result when there are at least 50% more sad words than happy words', function() {
      happy = 2;
      sad = 5;
      moodpredictor.isHappySadOrUnknown(happy,sad);
      expect(moodpredictor.isHappySadOrUnknown(2,5)).toEqual(moodpredictor.sadResult);
    });

    xit('knows when no text has been entered', function() {
      happy = 0;
      sad = 0;
      moodpredictor.isHappySadOrUnknown(happy,sad);
      expect(moodpredictor.isHappySadOrUnknown(0,0)).toEqual(moodpredictor.noResult);
    });

    it('will return an unknown result for all other combinations of happy and sad words', function() {
      happy = 3;
      sad = 2;
      moodpredictor.isHappySadOrUnknown(happy,sad);
      expect(moodpredictor.isHappySadOrUnknown(3,2)).toEqual(moodpredictor.unknownResult);
    });

  });
  
});