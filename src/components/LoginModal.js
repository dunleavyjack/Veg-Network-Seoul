import React from "react";

const LoginModal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content d-flex align-items-center text-center">
          <div className="modal-body">
            <h1 className="modal-header">JOIN THE NETWORK</h1>
            <div
              className="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>
          </div>
        </div>
      </div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=187280509726996&autoLogAppEvents=1"
        nonce="CIuAUZI2"
      ></script>
    </div>
  );
};

export default LoginModal;
