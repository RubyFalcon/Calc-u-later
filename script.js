const add = function(a,b) {
    return a+ b;
  };
  
  const subtract = function(a,b) {
      return a-b;
  };
  
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
  
  const multiply = function(arr) {
    if(arr.length == 0 ){
      return 0;
    }
    else if (arr.length <2){
  
      return arr[0];
    }
      else{
      return arr.reduce((start, next)=> start*next, 1) 
    }
  };
  
  const power = function(a,b) {
      return a**b;
  };
  
  const factorial = function(n) {
      if (n === 0 || n === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let  i = 1; i <= n; i++){
          factorial*= i;
      }
      return factorial;
    }
  };
  
  // Do not edit below this line
  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };