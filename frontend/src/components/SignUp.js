import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file

const SignUp= () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className={`form-container ${isLoginForm ? 'login-form' : ''}`}>
      <form>
        {isLoginForm ? (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Your username" required />
          </div>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Your password" required />
        </div>

        <div className="form-group">
          <button type="submit">{isLoginForm ? 'Login' : 'Sign Up'}</button>
        </div>
      </form>

      <div className="form-switch">
        {isLoginForm ? (
          <p>
            Don't have an account? <span onClick={toggleForm}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={toggleForm}>Login</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
