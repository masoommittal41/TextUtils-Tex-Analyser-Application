import React, {useState} from 'react'
export default function About(props) {

    let mystyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'#020f29':'white'
    }
  return (
    <div className="container" style={mystyle}>
    <h1>About The App</h1>
    <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
         TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, manipulating it to uppercase, lowercase, reversing it or copying it to use for future.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils is free of cost text analyzer tool and is deployed on Netlify. Can be used for free by everyone.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={mystyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This app works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera.
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}
