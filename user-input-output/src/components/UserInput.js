import React from "react";

const UserInput = props => {
  return <input type="text" placeholder="Type Here" onChange={props.changed} />;
};

export default UserInput;
