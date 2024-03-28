import React, { useState } from 'react'






export default function (props) {

  const convertToUppercase=(event)=>{
    console.log('Modified Text : ',text)
    
    setText(text.toUpperCase());
  }
  
  
  const handleChange=(event)=>{
  
    // console.log("value : ",event.target.value);
    setText(event.target.value);

  }

  const[text,setText]=useState();
  return (

    <div>
    <div className="mb-3 textBox">
      <label htmlFor="textBox" className="form-label">{props.labelText}</label>
      <textarea className="form-control" id="textBox" rows="6" onChange={handleChange} value={text}></textarea>
    </div>

    <button type="button" id="textBox" style={{marginLeft:"30%"}} className="btn btn-primary mt-3"  onClick={convertToUppercase} >Convert To UpperCase</button>
    </div>

  )
}
