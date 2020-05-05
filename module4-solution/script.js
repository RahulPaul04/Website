(function Read(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (str in names) {
  var firstLetter = names[str].charAt(0);
  var lower = str.toLowerCase(firstLetter);

  if (firstLetter =='J' || firstLetter =='j') {
    byeSpeaker.speak(names[str]);
  } else {
    helloSpeaker.speak(names[str]);
  }
}
})();
