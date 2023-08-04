import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Oops!!!</h1>
      <h4>Something went wrong!!!</h4>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};
export default Error;
