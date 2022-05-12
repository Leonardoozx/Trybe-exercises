import React from 'react';

class CreateInput extends React.Component {
  render() {
    const { type, id, onInputChange, name, value,maxLength } = this.props;
    return (
      <label htmlFor={id}>
        {name}
        <input
          name={id}
          value={value}
          onChange={onInputChange}
          type={type}
          id={id}
          maxLength={maxLength}
        />
      </label>
    );
  }
}

export default CreateInput;