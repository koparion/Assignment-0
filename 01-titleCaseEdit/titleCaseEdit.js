function titleCaseEdit(title) {
  // Insert code here;
  var split = title.split(" ");
 

  for (var i =0; i <split.length; i++)
  {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  const combine = split.join(" ");
  // title = combine;
  return combine;
}

// Do not edit this line;
module.exports = titleCaseEdit;