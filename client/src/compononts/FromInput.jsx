import React from 'react'

function FromInput(props) {
  return (
    <input
      onChange={props.changing}
      className="form-input"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
    />
  );
}

export default FromInput