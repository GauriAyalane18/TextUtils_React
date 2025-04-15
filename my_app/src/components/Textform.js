import React, { useState } from 'react';

export default function Textform(props) {
  const handleClickU = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClickL = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClickC = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert && props.showAlert("Text copied to clipboard!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(' ').trim();
    setText(newText);
    props.showAlert && props.showAlert("Extra spaces removed!", "success");
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-2">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleTextChange}
            id="myBox"
            rows="5"
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClickU} disabled={text.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClickL} disabled={text.length === 0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClickC} disabled={text.length === 0}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleCopy} disabled={text.length === 0}>
          Copy Text
        </button>
        <button className="btn btn-warning mx-2 my-1" onClick={handleRemoveExtraSpaces} disabled={text.length === 0}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((word) => word.length !== 0).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
