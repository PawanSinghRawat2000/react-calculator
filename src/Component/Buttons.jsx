import React from 'react'
import './buttons.css'



const Buttons = ({clearInput,backspace,inputOperator,inputDot,inputDigit,calculateAns}) => {


  return (<>


    <div className='btn-container'>
        
        <div className="left">
            <div className="row">
                <button className='btn-top' onClick={clearInput}>AC</button>
                <button className='btn-top' style={{fontSize:"20px"}} onClick={backspace} >←</button>
                <button className='btn-top' onClick={inputOperator} >/</button>
            </div>
            <div className="row">
                <button onClick={inputDigit} >7</button>
                <button onClick={inputDigit}>8</button>
                <button  onClick={inputDigit} >9</button>
            </div>
            <div className="row">
                <button  onClick={inputDigit}>4</button>
                <button  onClick={inputDigit}>5</button>
                <button  onClick={inputDigit}>6</button>
            </div>
            <div className="row">
                <button onClick={inputDigit}>1</button>
                <button onClick={inputDigit}>2</button>
                <button onClick={inputDigit}>3</button>
            </div>
            <div className="row">
                <button style={{width:"127px"}}  onClick={inputDigit}>0</button>
                <button onClick={inputDot}>.</button>
            </div>
        </div>
        <div className="right">
            <button  className='btn-operator' onClick={inputOperator}>*</button>
            <button  className='btn-operator'onClick={inputOperator}>-</button>
            <button className='btn-operator' style={{height:"94.5px"}} onClick={inputOperator}>+</button>
            <button className='btn-operator' style={{height:"94.5px"}} onClick={calculateAns}>=</button>
            
        </div>
        </div>

  
  </>
    
        
        
      
  )
}

export default Buttons
