import React from 'react'
import './style.css'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import {clearResult, findResult, number, operatorSelector } from './calculatorSlice'

const Calculator = () => {

    const dispatch = useDispatch()
    const resultValue = useSelector(state => state.calculator)
    const {leftValue, result, operator, rightValue} = resultValue
    console.log(resultValue)

    return (
        <div className="contact-page section main-banner" style={{display:"flex", alignItem:"center", justifyContent:"center"}}>
            <div className='cal-body'>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbvs-M64aLq0qSF5jQNiI9rT5RGxR9B2Txw&usqp=CAU"
                alt='calculator'
                style={{width:"90px"}}
                />
                
                <input className='imput-style' type="text" value={result !== "" ? result : leftValue+ operator + rightValue } disabled />
                <div className='btn-cont'>
                    <button onClick={()=>{dispatch(clearResult())}}   style={{width:"80px", backgroundColor:"red", color:"white", fontSize:"20px", height:"35px", cursor:"pointer"}} type='button'>C</button>
                    <button onClick={()=>{dispatch(operatorSelector("+"))}} className='cal-button' type='button'>+</button>
                    <button  onClick={()=>{dispatch(operatorSelector("-"))}} className='cal-button' type='button'>-</button>
                    <button onClick={()=>{dispatch(operatorSelector("/"))}} className='cal-button' type='button'>/</button>
                    <button onClick={()=>{dispatch(findResult(0))}} style={{width:"80px", backgroundColor:"green", color:"white", fontSize:"20px", height:"35px", cursor:"pointer"}} type='button'>=</button>
                    <button onClick={()=>{dispatch(number(1))}} className='cal-button' type='button'>1</button>
                    <button onClick={()=>{dispatch(number(2))}} className='cal-button' type='button'>2</button>
                    <button onClick={()=>{dispatch(number(3))}} className='cal-button' type='button'>3</button>
                    <button onClick={()=>{dispatch(operatorSelector("*"))}}  style={{marginLeft:"70px"}} className='cal-button' type='button'>x</button>
                    <button onClick={()=>{dispatch(number(4))}} className='cal-button' type='button'>4</button>
                    <button onClick={()=>{dispatch(number(5))}} className='cal-button' type='button'>5</button>
                    <button onClick={()=>{dispatch(number(6))}} className='cal-button' type='button'>6</button>
                    <button onClick={()=>{dispatch(operatorSelector("%"))}}  style={{marginLeft:"70px"}} className='cal-button' type='button'>%</button>
                    <button onClick={()=>{dispatch(number(7))}}className='cal-button' type='button'>7</button>
                    <button onClick={()=>{dispatch(number(8))}} className='cal-button' type='button'>8</button>
                    <button onClick={()=>{dispatch(number(9))}} className='cal-button' type='button'>9</button>
                    <button onClick={()=>{dispatch(number(0))}} style={{marginLeft:"70px"}} className='cal-button' type='button'>0</button>
                    <button className='cal-button' type='button'>&</button>
                    <button onClick={()=>{dispatch(number("."))}} className='cal-button' type='button'>.</button>
                    <button className='cal-button' type='button'>#</button>
                    <button onClick={()=>{dispatch(number("00"))}} style={{marginLeft:"70px"}} className='cal-button' type='button'>00</button>
                </div>
            </div>
        </div>
      )
}

export default Calculator