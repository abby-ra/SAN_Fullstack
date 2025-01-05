import React from 'react';
import './app.css'; // Import the CSS file

const LoginPage = () => {
  return (
    <div className="container">
      

      <div className="imageSection">
        <img
          src=".\bit.jpg" // Replace with the correct image URL
          alt="Campus"
          className="image"
        />
        <div className="headerText">BANNARI AMMAN INSTITUTE OF TECHNOLOGY</div>
        <div className="clgtype"><p>Autonomous Institution, Accredited by NAAC with 'A' Grade</p></div>
        <div className="overlayText"> &nbsp; &nbsp; C&nbsp;O&nbsp;N&nbsp;T&nbsp;R&nbsp;O&nbsp;L&nbsp;L&nbsp;E&nbsp;R &nbsp; &nbsp; &nbsp; &nbsp; O&nbsp;F &nbsp; &nbsp; &nbsp; <br></br> &nbsp; &nbsp;  E&nbsp;X&nbsp;A&nbsp;M&nbsp;I&nbsp;N&nbsp;A&nbsp;T&nbsp;I&nbsp;O&nbsp;N</div>
      </div>

      <div className="loginSection">
        <h1 className="heading">LOGIN</h1>
        <form className="form">
          <div className="inputGroup">
            <label htmlFor="facultyId">
              Faculty or admin ID <span className="required">*</span>
            </label>
            <input
              type="text"
              id="facultyId"
              placeholder="7564CS789"
              className="input"
              required
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <div className="passwordContainer">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input"
                required
              />
              <button type="button" className="eyeButton">👁️</button>
            </div>
          </div>

          <div className="forgotPassword">
            <a href="#">Forgot password</a>
          </div>

          <button type="submit" className="loginButton">
            Login Now
          </button>

          <button type="button" className="googleButton">
            <img
              src="https://example.com/google-icon.png" // Replace with a Google icon URL
              alt="Google Icon"
              className="googleIcon"
            />
            Google Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
