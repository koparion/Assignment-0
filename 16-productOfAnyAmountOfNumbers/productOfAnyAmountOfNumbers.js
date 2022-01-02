function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product = 1;
  for(let i=0; i<args.length; i++)
  {
    product*=args[i];
  }
  //another way of performing the function
  // for(const a of args)
  // {
  //   product*=a;
  // }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;