import React from "react";

export default ({
  name,
  label,
  error,
  type,
  onChange,
  ...rest
}) => {
  const input_type = type ? type: "text";
  return (
    <div className="field">
      <label className="label">{label}</label>
      { error ? <label className="label has-text-danger">{error}</label> : <span /> }
      <div className="control">
        <input
          className="input"
          type={input_type} 
          onChange={e => onChange(name, e.target.value)} />
      </div>
    </div>
  )
}