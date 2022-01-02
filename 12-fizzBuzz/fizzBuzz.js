function fizzBuzz(start, end) {
  // Insert code here;
  const fizz=[];
  while(start<=end)
  {
    if(start%5 ===0 && start%3 === 0 )
    {
      fizz.push("FizzBuzz");
    }
    else if(start%3 === 0 && !start%5 ===0)
    {
      fizz.push("Fizz");
    }
    else if(start%5 === 0 && !start%3 === 0)
    {
      fizz.push("Buzz");
    }
    else
    {     
      fizz.push(start);
    }
    start++;
  }
  return fizz;

}

// Do not edit this line;
module.exports = fizzBuzz;