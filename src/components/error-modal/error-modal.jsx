import React from "react";
import PropTypes from "prop-types";

const ErrorModal = (props) => {
  const {closeModal} = props;

  return (
    <div
      style={{position: `fixed`,
        top: `0`,
        right: `0`,
        bottom: `0`,
        left: `0`,
        background: `rgba(0,0,0,0.8)`,
        zIndex: `99999`,
        transition: `opacity 400ms ease-in`,
      }}
      onClick={() => closeModal()}
    >
      <p style={{
        display: `block`,
        width: `400px`,
        height: `100px`,
        fontSize: `28px`,
        position: `relative`,
        paddingTop: `50px`,
        margin: `10% auto`,
        padding: `5px 20px 13px 20px`,
        borderRadius: `10px`,
        background: `#fff`,
        textAlign: `center`,
      }}>
        Возникла сетевая ошибка
      </p>

    </div>
  );
};

ErrorModal.propTypes = {
  closeModal: PropTypes.func
};

export default ErrorModal;

