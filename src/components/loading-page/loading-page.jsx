import React from "react";

const LoadingPage = () => {
  return (
    <React.Fragment>
      <h1 style={{textAlign: `center`, marginTop: `80px`, fontSize: `28px`}}>
        Приложение загружается ...
      </h1>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{margin: `auto`}}
          width="200"
          height="200"
          display="block"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#99adba"
            strokeDasharray="164.93361431346415 56.97787143782138"
            strokeWidth="10"
            transform="rotate(99.747 50 50)"
          >
            <animateTransform
              attributeName="transform"
              dur="1s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="rotate"
              values="0 50 50;360 50 50"
            ></animateTransform>
          </circle>
        </svg>
      </div>
    </React.Fragment>
  );
};

export default LoadingPage;
