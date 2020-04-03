import React from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <h1 style={{textAlign: `center`, marginTop: `80px`, fontSize: `28px`}}>
        404
      </h1>
      <h3 style={{textAlign: `center`}}>
        Page not found
      </h3>
      <p style={{textAlign: `center`}}>
        {`There's nothing here.`}
        <br></br>
        <Link to="/">
          Try tu push this
        </Link>
      </p>

    </React.Fragment>
  );
};

export default PageNotFound;
