import { useState } from "react";

const User = (props) => {
  const [count] = useState(1);
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.contact}</h3>
    </>
  );
};
export default User;
