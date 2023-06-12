import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {
    const [text, setText] = useState("");

const onClickUp = ()=> {
     console.log("You click Uppercase button");
    let UpText = text.toUpperCase();
    setText(UpText);
} 


const onClickDn = ()=> {
    console.log("You click Uppercase button");
   let UpText = text.toLocaleLowerCase();
   setText(UpText);
} 
const changeState = (event) => {
console.log("State is changed to "+ {text})
setText(event.target.value);

}

const clearText = (event) => {
  console.log("State is changed to "+ {text})
  setText("");
  
  }

  const copyText = (event) => {
   var text =  document.getElementById("Text");
   text.select();
   navigator.clipboard.writeText(text.value);
    }

    const removeSpaces = (event) => {
      let newText = text.split(/[  ]+/);
      setText (newText.join(" "));
       }
   

const [myStyle, setStyle] = useState(
{
        color: 'black',
        backgroundColor: 'white',
        modeType: 'Dark Mode'
                }

); 


const changeTheme = () =>{
        if (myStyle.modeType ==='Dark Mode'){
            setStyle({
                color: 'white',
        backgroundColor: 'black',
        modeType: 'Light Mode'
        });
}
        else {
            setStyle({
                color: 'black',
        backgroundColor: 'white',
        modeType: 'Dark Mode'
        });
        }
}


  return (
<>
    <form>
  <div className={`container mb-3 text-${props.Theme==='light'?'dark':'light'}`} >
    <label htmlFor="exampleFormControlTextarea1"><h2>{props.SampleText}</h2></label>
    <textarea placeholder="Enter Your Text"  style={{backgroundColor: props.Theme ==='dark'?'grey':'white', color: props.Theme ==='dark'?'white':'black'}} className="form-control mb-30" value= {text}  onChange={changeState} id="Text" rows="9"></textarea>
    
    <div className="container my-3">
    <button  onClick={onClickUp} type="button" className="btn btn-primary">Convert to UpperCase</button>
    <button  onClick={onClickDn} type="button" className="btn btn-primary">Convert to LowerCase</button>
    <button  onClick={clearText} type="button" className="btn btn-primary">Clear Text</button>
    <button  onClick={copyText} type="button" className="btn btn-primary">Copy Text</button>
    <button  onClick={removeSpaces} type="button" className="btn btn-primary">Remove Spaces</button>

    </div>
   
             </div>

    <div className={`container mb-3 text-${props.Theme==='light'?'dark':'light'}`} >
<h2> Text Properties</h2>
<p>Total words are <b>{text.split(" ").length-1}</b>. Total characters are <b>{text.length}</b></p>
</div>
 
</form>
</>
  )
}



export default TextForm