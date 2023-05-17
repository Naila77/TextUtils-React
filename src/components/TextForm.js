import React, {useState} from 'react'


export default function TextForm(props) {
    const upperClicked = () => {
        let newText =  text.toUpperCase() ;
        setText(newText);
        
        {if (newText.length > 0) props.showAlert('Uppercase text has been showed','success')};
    }

    const lowerClicked = () => {
        let newText =  text.toLowerCase() ;
        setText(newText);
        {if (newText.length > 0) props.showAlert('Lowercase text has been showed','success')};
    }

    const clearClicked = () => {
        let newText =  '' ;
        setText(newText);
        {if (text.length > 0) props.showAlert('Text has been cleared','success')};
    }

    const endedClicked = () => {
        let newText =  text.concat("Text Ends here ...") ;
        setText(newText);
        {if (text.length > 0) props.showAlert('There is an end with text now','success')};
    }

    
        
    const changeText = (event)=> {
        setText(event.target.value);
    }

    const [text,setText] = useState("");

    
  return (
    <>
    <div className= "container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myText" onChange= {changeText} value= {text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick= {upperClicked}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick= {lowerClicked}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick= {clearClicked}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick= {endedClicked}>Text ends with an end.</button>
       
    </div>

    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length} characters. </b></p>
        <p><b>{text.split(" ").length * 0.008 }</b> minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter the text in the text area above to preview here...'}</p>
    </div>
    </>
  )
}
