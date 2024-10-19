import React from 'react'

function TextAreaInput(props) {
  return (
    <textarea
      onChange={props.changing}
      className="form-input"
      name={props.name}
      rows="1"
      cols="30"
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
      
    />
  );
}

export default TextAreaInput