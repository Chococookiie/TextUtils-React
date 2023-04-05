import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=> { 
    setText(text.toUpperCase())
    props.showAlert("converted to uppercase" , "success")
  }
  
  const handledownClick = ()=> { 
    setText(text.toLowerCase())
    props.showAlert("converted to lowercase" , "success")

  }
  
  const handleClearClick = ()=> { 
    props.showAlert("text cleared" , "success")

        setText('')
  }

  const handleInverseClick = ()=> { 
    setText(text.split('').reverse().join(''))
    props.showAlert("text inversed" , "success")
    
}
  const handleOnChange = (e)=> {
    setText(e.target.value) 
  }
  
  const [text, setText] = useState('')
  
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#042743':'white' , color:props.mode === 'dark' ? 'white':'#042743' }} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handledownClick}>Conver to lowercase</button>
      <button className="btn btn-dark mx-2 my-2" onClick={handleInverseClick}>Inverse text</button>

      <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear text</button>
    
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p> {text.split(' ').length}  word, {text.length} Charaters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the textbox above to see the preview here..'}</p>
    </div>
    </>
  );
}
