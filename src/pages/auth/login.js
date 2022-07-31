import React from "react";
import LoginContainer from "../../containers/LoginContainer";

const Login = () => {
  console.log('here');
  return (
    <LoginContainer>
      <div className="form-container w-2/5">
        <div className="w-full p-10 text-center">
          <img src={require('../../assets/icons/tos.png')} alt="Tos" className="logo-auth"/>
          <h5 className="mt-20 text-black bold text-lg">
            Signup
          </h5>
          <div className="login-form-area">
            <div className="form-field">
                <label>
                  Username
                </label>
                <input type="email" placeholder="example@gmail.com"/>
            </div>
            <div className="form-field">
                <label>
                  Password
                </label>
                <input type="email" placeholder="example@gmail.com"/>
            </div>
            <div className="form-field">
                <label>
                  Confirm Password
                </label>
                <input type="email" placeholder="example@gmail.com"/>
            </div>
        
           
            <button className="tos-bg w-full">
              Register
            </button>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};
export default Login;
