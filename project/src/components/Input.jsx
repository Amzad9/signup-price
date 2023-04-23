import React from 'react'
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
function Input({type, value,name, onChange, placeholder, onBlur}) {
  return (
    <div>
    <div className="relative">
      <input
        type={type}
        id="text"
        name={name}
        placeholder={placeholder}
        className="py-3 p-2 border border-blue w-full rounded"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  </div>
  )
}
Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleInputChangen: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  };
export default Input