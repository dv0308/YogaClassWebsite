import React, { useState } from "react";
import classes from "./YogaForm.module.css"
import Input from "./Input"
import Batch from "./Batch";

const YogaForm = () => {


    var [onInputAge,setInputAge] = useState("18");
    var [onInputName,setInputName] = useState("");
    
    const onChangeHandlerName = (event) => {
        setInputName(onInputName = event.target.value)
    }
    const onChangeHandlerAge = (event) => {
        setInputAge(onInputAge = event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return <div className={classes.justform}>
        <form onSubmit={submitHandler} className={classes.form}>
        <Input onChange = {onChangeHandlerName} placeholder = "Input Name" input = {{
                value : onInputName,
                type : "text",
                id: "name",
            }}></Input>
            <Input onChange = {onChangeHandlerAge} placeholder = "Input Age" input = {{
                value : onInputAge,
                type : "number",
                id: "age",
                min :'18',
                max :"65",
                step : "1"
            }}></Input>
            <Batch onChange = {onChangeHandlerAge}/>
            <button className={classes.button}> Pay</button>
            
        </form>
    </div>
}

export default YogaForm