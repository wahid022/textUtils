import React, { useState } from 'react'


export default function (props) {

  const[text,setText]=useState('');


  const convertToUppercase=(event)=>{
    console.log('Modified Text : ' +text)
    
    setText(text.toUpperCase());
    props.alert('Converted to upperCase','success');
    // setTimeout(,1500);
    
  }
  const convertToLowerCase=(event)=>{
      setText(text.toLowerCase());
      props.alert('Converted to lowerCase','success');
  }
  
  const handleChange=(event)=>{
  
    // console.log("value : ",event.target.value);
    setText(event.target.value);

  }

  const clearText=(event)=>{
    setText('');
    props.alert('Text cleared','success');

  }

  

  const handleCopy=(event)=>{

    var content=document.getElementById('textBox');
    // console.log("copy",content);
    content.select();
    navigator.clipboard.writeText(content.value);
    props.alert('Text has been copied to clipboard','success');

  }
   

  const removeExtraSpaces=(event)=>{
    let arr=text.split(/[ ]+/);//remove more than one space and returns an array
    console.log(arr);
    setText(arr.join(""));
    // to convert array into string we use join method
    console.log(text);
    props.alert('Extra spaces has been removed','success');

  }

  const countWords=(text)=>{
    if(text==='')
    {
      return 0;
    }
    else{
      const textArray=text.split(" ");
      
      
      // console.log(len)
      return (textArray.length);
    }
      

  }
  
  return (
    <>
          <div className={`container text-${props.mode==='light'?'dark':'light'}`}  style={{marginTop:"2%"}}>
              <div className="mb-3">
                <label htmlFor="textBox" className="form-label">{props.labelText}</label>
                <textarea className="form-control" id="textBox" rows="6" onChange={handleChange} value={text}></textarea>
              </div>

              <button type="button" id="textBox"  className="btn btn-primary mx-1 my-1"   onClick={convertToUppercase} >Convert To UpperCase</button>
              <button type="button" id="textBox1"  className="btn btn-primary mx-1 my-1"  onClick={convertToLowerCase} >Convert To Lowercase</button>
              <button type="button" id="textBox2"  className="btn btn-primary mx-1 my-1"  onClick={clearText} >Clear Text</button>
              <button type="button" id="textBox4"  className="btn btn-primary mx-1 my-1"  onClick={handleCopy} >Copy Text</button>
              <button type="button" id="textBox5"  className="btn btn-primary mx-1 my-1"  onClick={removeExtraSpaces} >Remove Extra Space</button>

         </div>

          <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h1 className='my-2'>Your Text Summary</h1>
            <p>{countWords(text)} Words and {text.length}   Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
          </div>
          
    </>
  )
}

