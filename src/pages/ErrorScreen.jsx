import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
//library
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";

const ErrorScreen = () => {
  const error = useRouteError();
  // navigate(-1)used go go back to previous screen useNavigate will memorize the previous page and calls it
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh oh! we've got a problem!.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={20} />
          <span>Go back</span>
        </button>
        <Link to={"/"} className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorScreen;
