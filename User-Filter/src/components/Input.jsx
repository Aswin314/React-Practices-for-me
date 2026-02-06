import React from "react";

const Input = ({value,onChange,placeholder}) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: "8px", margin: "5px" }}
      />
    </div>
  );
};

export default Input;
