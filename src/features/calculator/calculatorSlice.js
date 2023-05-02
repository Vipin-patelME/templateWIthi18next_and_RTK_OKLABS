import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result:"",
    leftValue:"",
    operator:"",
    rightValue:""
}


const calculatorSlice = createSlice({
    name:"calculator",
    initialState,
    reducers:{
        number:(state, action)=>{
            if(state.result !== ""){
                state.result = ""
                state.leftValue=""
                state.rightValue=""
                state.operator=""
            }
            else if (state.operator === ""){
                state.leftValue += action.payload
                console.log(action.payload)
            }
            else{
                state.rightValue += action.payload
                console.log(action.payload)
            }
            
        },
        operatorSelector:(state, action)=>{
            state.operator = action.payload
        },
        findResult:(state, action) =>{
            switch(state.operator){
                case "+":
                    state.result = parseFloat(state.leftValue) + parseFloat(state.rightValue)
                    break
                case "-":
                    if(state.leftValue === state.rightValue ){
                        state.result=action.payload
                        console.log("same digit")

                    }
                    else{
                        state.result = parseFloat(state.leftValue) - parseFloat(state.rightValue)
                    }
                    break
                case "/":
                    state.result = parseFloat(state.leftValue) / parseFloat(state.rightValue)
                    break
                case "*":
                    state.result = parseFloat(state.leftValue) * parseFloat(state.rightValue)
                    break
                default:
                    break
            }
        },
        clearResult:(state)=>{
            state.result = ""
            state.leftValue=""
            state.rightValue=""
            state.operator=""
        }
    }
})

export const {number, clearResult, operatorSelector, findResult} = calculatorSlice.actions

export default calculatorSlice.reducer