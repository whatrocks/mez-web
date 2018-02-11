import React from "react";

export default ({
  name,
  label,
  error,
  type,
  onChange,
  ...rest
}) => {
  const id = `id_${name}`
  const input_type = type ? type: "text";
  return (
    <div>
      <span>{label}</span>
      <input type={input_type} onChange={e => onChange(name, e.target.value)} />
    </div>
  )
}