import React from 'react';

const Input = ({ id, setValue }) => {
  return (
    <div>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Input;
