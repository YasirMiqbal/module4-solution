
(function(window) {
  var helloSpeaker = {}; // Create an empty object

  var speakWord = "Hello"; // Define the speakWord variable

  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Expose the helloSpeaker object to the global scope
})(window);
