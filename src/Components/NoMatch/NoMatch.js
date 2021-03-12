import React from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NoMatch.css'

const NoMatch = () => {
  return (
    <div className="displayError">
      <h1>404  <FontAwesomeIcon icon={faExclamationTriangle} /></h1>
      <h3>Not Found</h3>
    </div>
  );
};

export default NoMatch;
