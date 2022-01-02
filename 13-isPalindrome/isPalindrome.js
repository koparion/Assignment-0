function isPalindrome(word) {
  // Insert code here;
  var split = word.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  if(join === word)
  {
    return true;
  }
  else
    return false;

}

// Do not edit this line;
module.exports = isPalindrome;