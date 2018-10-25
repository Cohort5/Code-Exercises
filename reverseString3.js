function reverseString(str) {

  var chars = str.split("");

  //console.log(str.split(""));

  //for (var i = chars.length; i >= 0 ; i--) {
    //console.log(chars[i-1])

var newString ="";

  for (var i = chars.length - 1; i >= 0 ; i--) {
    //console.log(chars[i])  
    newString = newString + chars[i];

  }

  console.log(newString);

  return newString;
}

reverseString("hello");