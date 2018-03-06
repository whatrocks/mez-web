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
      <div className="control">
        <input
          className="input"
          type={input_type} 
          onChange={e => onChange(name, e.target.value)} />
      </div>
    </div>
  )
}