const add = (...args) => args.reduce((accum, val) => accum + val, 0);
  
  const subtract = (...args) => args.reduce((accum, val) => accum - val, 0);
  
  const sum = function(arr) {
    if(arr.length == 0 ){
      return 0;
    }
    else if (arr.length <2){
  
      return arr[0];
    }
      else{
      return arr.reduce((start, next)=> start+next, 0) 
    }
  };

  const multiply = (...args) => args.reduce((accum, val) => args.length === 0 ? 0:  accum * val, 1);

  const divide = (...args) => args.reduce((accum, val) => args.length === 0? 0: accum / val, 1);
  
  let firstNum, secondNum, operator;

  const operate = (a,b, operator) => operator(a,b);
