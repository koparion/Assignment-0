function pairSum(nums, target) {
  // Insert code here;

  if(nums.length < 2)
  {
    throw "Error";
  }

  // for(var i = 0 ; i < nums.length; i++)
  // {    
  //     if(nums.forEach(nums,i)+nums.forEach(nums.i)== target)
  //     {
  //       return true;
  //     }
  // }
  // return false;
  
  for(var i =0; i<nums.length; i++)
  {
    for(var j=i+1; j<nums.length ; j++)
    {
      if(nums[i] + nums[j]===target)
      {
        return true;
      }
      
    }
  }
  return false;
  // if(nums.length<2)
  // {
  //   throw "Error";
  // }
  // numIndex = {};
  // for(let i =0; i<nums.length; i++)
  // {
  //   let currDiff = target - nums[i];
  //   if(numIndex[currDiff]!= undefined && numIndex[currDiff]!= i)
  //   {
  //     return [i, numIndex[currDiff]];
  //   }
  //   else
  //   {
  //     numIndex[nums[i]]=i;
  //   }
  // }
  // if(nums.length<2)
  // {
  //   //return error();
  //   throw 'Error';
  // }
  // // else if(nums.length>1)
  // // {
  //   for(let a of nums)
  //   {
  //     for(let b of a)
  //     {
  //       if(a[b]+b[a] == target)
  //       {
  //         return true;
  //       }
  //       // else
  //       // {
        
  //       // }
  //     }
  //   }
  //   return false; 
 // }
}

// Do not edit this line;
module.exports = pairSum;