import React from "react";

export default ({ label, name, options, error, onChange, ...rest }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      {error ? (
        <label className="label has-text-danger">{error}</label>
      ) : (
        <span />
      )}
      <div className="control">
        <div className="select">
          <select onChange={e => onChange(name, e.target.value)}>
            {
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  );
};
