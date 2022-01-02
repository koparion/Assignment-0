function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const union = new Set();
  for (const firstSet of args) 
  {
    for (const secondSet of firstSet) 
    {
      union.add(secondSet);
    }
  }
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;