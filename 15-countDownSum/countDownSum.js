class MySolution {
  constructor()
  {
    this.sum=0;
  }
  countDownSum(num) {
    // Insert code here;
    this.sum=0
    if(num == 1)
    { 
      return num+this.sum; 
    }
    else
    {
      this.sum=num+this.countDownSum(num-1);
      return this.sum;
    } 
  }
  
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;