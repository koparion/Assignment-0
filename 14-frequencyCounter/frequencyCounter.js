function frequencyCounter(word) {
  // Insert code here;
  var freq = {};
  for(var i = 0; i<word.length; i++)
  {
    var char = word.charAt(i);
    if(freq[char])
    {
      freq[char]++;
    }
    else
    {
      freq[char] = 1;
    }
  }
  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;