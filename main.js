var replaceArray = [];
replaceArray[1] = [1,'a', "!"];
replaceArray[2] = [1, 'e', "@"]
replaceArray[3] = [1,'o', "#"];
replaceArray[4] = [1,'u', "$"];
replaceArray[5] = [1,'i', "%"];

replaceArray[6] = [2,'a', "&"];
replaceArray[7] = [2,'e', "*"];
replaceArray[8] = [2,'o', "="];
replaceArray[9] = [2,'u', "+"];
replaceArray[10] = [2,'i', "-"];

function clearDiv() {
  document.getElementById('result').innerHTML = "";
}
function codeInput(version) {
  // This function codes a message
  clearDiv();
  var text = getText();
  text = text.split("");
  for (var i = 0; i < text.length; i++) {
    for (var t = 1; t < replaceArray.length; t++) {
      for (var b = 1; b < 2; b++) {
        // console.log(replaceArray[t][0]);
        if (replaceArray[t][0] == version) {
          // We look in the replace array if we have the
          // Correct version
          if (text[i] == replaceArray[t][1]) {
            // Here we look if we have the correct letter
            // Be comparesing it with the text and the replace array
            text[i] = replaceArray[t][2];
            // Replace the texts
          }
        }
      }
    }
  }
      display(text);
  }
function display(array) {
  for (var i = 0; i < array.length; i++) {
    document.getElementById('result').innerHTML += array[i];
    // Displaying the new input
  }
}
function getText() {
  var text = document.getElementById('text').value;
  return(text);
}
