import React, { useState } from "react";
import "./calculator.css";
import Buttons from "./Buttons";
import Display from "./Display";
import * as math from 'mathjs'

const Calculator = () => {
  const [input,setInput]=useState("");
  const [answer,setAnswer]=useState("");
  const [lastNumeric,setLastNumeric]=useState(false);
  const [lastDot,setLastDot]=useState(false);


  const inputDigit=(e)=>{
    
    if(input.length>14)return;
    let val=e.target.innerText;
    setInput(input+val);
    setLastNumeric(true);
  }

  const inputOperator=(e)=>{
    if(input.length>14)return;
    if(lastNumeric){
      setInput(input+e.target.innerText);
      setLastNumeric(false)
      setLastDot(false)
    }
  }


  const clearInput=()=>{
    setInput("");
    setAnswer("");
    setLastDot(false);
    setLastNumeric(false);
  }

  const backspace=()=>{
    if(input.length==0)return;
    setInput(input.substring(0,input.length-1));
    setAnswer("")
    if(input[input.length-1]==='.'){
      setLastDot(true);
    }
  }

  const inputDot=(e)=>{
    if(input.length>14)return;
    if(lastNumeric){
      setInput(input+e.target.innerText);
      setLastNumeric(false);
      setLastDot(true);
    }
  }

  
  const calculateAns=()=>{
    const result=math.evaluate(input).toFixed(3);
    
    setAnswer(result);
  }

  return (
    <div className="container">
        <div className="calculator">
            <Display input={input} answer={answer}/>
            <Buttons 
                
                inputDigit={inputDigit}
                clearInput={clearInput}
                backspace={backspace}
                inputOperator={inputOperator}
                inputDot={inputDot}
                calculateAns={calculateAns}
            />
        </div>
      
    </div>
  );
};

export default Calculator;
