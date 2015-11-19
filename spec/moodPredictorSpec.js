'use strict';

describe('MoodPredictor', function(){

  var moodpredictor;

  beforeEach(function() {
    moodpredictor = new MoodPredictor();
  });

  describe('on initialisation it contains', function() {
    it('an empty text field', function() {
      expect(moodpredictor.textInput).toEqual('');
    });

    it('a string of happy words and a string of sad words', function() {
      expect(moodpredictor.happyWords).toContain('happy');
      expect(moodpredictor.sadWords).toContain('sad');
    });
  });

  // describe('functionality', function() {
  //   it('converts a string to an array', function() {
  //     moodpredictor.wordsToArray(string);
  //     expect(moodpredictor.arr).toEqual(jasmine.any(Array));
  //   })
  // })
  
});