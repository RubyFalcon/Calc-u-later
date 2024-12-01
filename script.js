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

  const divide = (...args) => args.reduce((accum, val) => args.length === 0? 0: val / accum, 1);
  


 


  const displayedNum =  document.querySelector("#display");


// todo-- handle if 0 then h1 = 0 else if !0
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
  number.addEventListener("click", ()=>  {
    let newNum = number.value;

    if (displayedNum.textContent == '0' ){
      displayedNum.textContent = newNum;
    } else {
      displayedNum.textContent += newNum;
    }
    
  })
})
// console.table(numbers)


function operate(operator,aString , bString) {
    if(bString == ""){
      return aString;
    }
    let operatedNum;
    a = parseInt(aString);
    b = parseInt(bString);
    switch(operator){
      case "/":
        operatedNum = divide(a,b);
        break;
      case "*":
        operatedNum = multiply(a,b);
        break;
      case "+":
        operatedNum = add(a,b);
        break;
      case "-":
        operatedNum = subtract(a,b);
        break;
    }
    return operatedNum;
}

function clearContent(){
  displayedNum.textContent = "0";
}

const clear= document.querySelector(".clear")
clear.addEventListener("click",()=> clearContent());


const  operators = document.querySelectorAll('.operator');
let prevOperator = "";
let prevValue = "";
let isNewValue = false;
let nextValue= "";
operators.forEach((operator)=> {
  operator.addEventListener("click", ()=> {
    let prevValue = displayedNum.textContent;

    
    console.log("prev value is: " , prevValue);
    console.log("op value is: ", operator.value);

    if(operator.value != "=") {
      prevOperator = operator.value;
      nextValue = prevValue;
      console.log("next value in if statement: ", nextValue);
      displayedNum.textContent = "";
      
      
    }
    else if (operator.value == "=" ) {
          
          console.log("= was run")
        
       

          console.log("second statementd");
          console.log("prev value is: " , prevValue);
          console.log("op value is: ", operator.value);
          console.log("prev op is:", prevOperator);
          console.log("next value is: ",  nextValue)
          displayedNum.textContent = operate(prevOperator,prevValue, nextValue);
        }
      
    
  }
    
  )
})