import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743', 
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743', 
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}> 
        <h1 className="my-3">About Us</h1>
        <div className="accordion" style={myStyle} id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                TextUtils gives you a way to transform your text quickly and efficiently. Be it word count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                TextUtils is a free character counter tool that provides instant character count and word count
                statistics for a given text. TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This word counter is also helpful for SEO (Search Engine Optimization) purposes. You can use this
                tool to count the number of words in your content and make sure that it meets the requirements of
                search engines.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
