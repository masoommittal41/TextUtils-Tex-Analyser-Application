import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Text changed to Uppercase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Text changed to Lowercase","success");
    }
    const handleClear=()=>{
        let newText=' ';
        setText(newText);
        props.showalert("Text has been cleared","success");
    }
    const handleReverse=()=>{
        let str=text.split("")
        str=str.reverse();
        const newText=str.join("");
        setText(newText);
        props.showalert("Text has been reversed","success");
    }
    const handleCopy=()=>{
        let copyText=document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
        props.showalert("Text copied to clipboard","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState(" ");
  return (
    <div classname="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-3">{props.heading}</h1>
        <div className="container mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <div className="my-2">
            <button disabled={text.length-1===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            {/* <button className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button> */}
            <button disabled={text.length-1===0} className="btn btn-info mx-2 my-1" onClick={handleClear}>Clears The Text</button>
            <button disabled={text.length-1===0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button disabled={text.length-1===0} className="btn btn-warning mx-2 my-1" onClick={handleReverse}>Reverses The Text</button>
            <button disabled={text.length-1===0} className="btn btn-danger mx-2 my-1" onClick={handleCopy}>Copies Text To Clipboard</button>
            </div>
        </div>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h1>Your text summary</h1>
            <p> Your text has {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length-1} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
