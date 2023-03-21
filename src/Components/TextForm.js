import React, {useState} from 'react'



export const TextForm = (props) => {
  const [text, setText]= useState("");

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

const onClickHandle = (e) => {
    setText(e.target.value);

}
const handleClearText = () => {
  setText("");
}
    
const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);

}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}


  return (
    <div>
      <div className="container">
        <h1 my-3>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={onClickHandle} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2 " onClick={handleLoClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2 " onClick={handleClearText}>Clear Text</button>

<button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>


</div>
<div className="container">
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008*text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
    </div>
  )
}
