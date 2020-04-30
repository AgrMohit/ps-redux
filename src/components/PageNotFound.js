import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="jumbotron " style={{ textAlign: "center" }}>
    <h1>Oops! Page not found</h1>
    <Link to="/" className="btn btn-outline-primary">
      &lt;-- Go back to Home
    </Link>
  </div>
);

export default PageNotFound;
