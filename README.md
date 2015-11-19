Write an app that classifies text as happy, sad or unknown. A text is happy if it includes at least 50% more happy words than sad words. It is sad if it contains at least 50% more sad words than happy words. Otherwise it is unknown.

Use the following list of happy and sad words:
delight, delighted, delightful, happy, glad, joy, joyful, merry, pleasant
disappointed, miserable, sad, sorrow, unhappy
Even if the words are repeated, each mention should be counted separately. For example, this text would be classified as happy: "I was glad to go to the beach. Very glad. Even though it was a miserable day."

The logic that classifies text should be contained in a back-end service. There should also be a web page for using the app.

Don't forget to include a solid set of unit tests.

Include in your code a README.md file with instructions on how to run the app and unit tests, and an explanation of the design choices you've made. Use any language and/or framework you like.