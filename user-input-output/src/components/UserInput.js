import React from "react";

const UserInput = props => {
  return (
    <input
      type="text"
      placeholder="Type Here"
      onChange={props.changed}
      value={props.value}
    />
  );
};

export default UserInput;
