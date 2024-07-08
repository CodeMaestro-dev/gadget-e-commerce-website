import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="main-error">
      <div className="main-error__breadcrumb">
        <span>Home</span>
        <span>/</span>
        <span>404 Error</span>
      </div>
      <div className="main-error__content">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/" className="main-error__content--link">Back to home page</Link>
      </div>
    </div>
  );
};

export default Error404;
