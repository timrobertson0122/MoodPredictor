
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

  // describe('functionality', function() {
  //   it('converts a string to an array', function() {
  //     moodpredictor.wordsToArray(string);
  //     expect(moodpredictor.arr).toEqual(jasmine.any(Array));
  //   });
  // });
  
});