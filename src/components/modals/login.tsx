function Signup({ closeModal }: { closeModal: () => void }) {
  return (
    <div className="signup-form">
      <div className="login-header">
        <img src="src/assets/icon/close.svg" alt="" onClick={closeModal} />
        <h1>Log in or sign up</h1>
      </div>
      <hr />
      <div className="greeting-container">
        <h2 className="greeting">Welcome to Airbnb</h2>
        <div className="signup-box">
          <label htmlFor="">
            {" "}
            <div>
              <select id="country-select">
                <option value="" data-code="" disabled selected>
                  <div>Country/Region</div>{" "}
                </option>
                <option value="IR" data-code="+98">
                  Iran
                </option>
                <option value="US" data-code="+1">
                  United States
                </option>
                <option value="CA" data-code="+1">
                  Canada
                </option>
                <option value="DE" data-code="+49">
                  Germany
                </option>
                <option value="FR" data-code="+33">
                  France
                </option>
                <option value="JP" data-code="+81">
                  Japan
                </option>
              </select>
            </div>
          </label>

          <div className="phone-box">
            <span id="country-code">+ </span>
            <input type="tel" id="phone-number" placeholder="Phone number" />
          </div>
        </div>
        <p>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.
          <a href="" className="privacy">
            {" "}
            Privacy Policy
          </a>
        </p>
        <div className="continue-btn">
          <button>Continue</button>
        </div>

        <div className="login-divider">
          <div className="or">or</div>
        </div>
        <div className="social-login">
          <button className="icon-login">
            <img src="src/assets/icon/google.svg" alt="google-login" />
            <div className="login-text">Continue with Google</div>
          </button>
          <button className="icon-login">
            <img src="src/assets/icon/apple.svg" alt="" />
            <div className="login-text">Continue with Apple</div>
          </button>
          <button className="icon-login">
            <img src="src/assets/icon/email.svg" alt="" />
            <div className="login-text">Continue with email</div>
          </button>
          <button className="icon-login">
            <img src="src/assets/icon/facebook2.svg" alt="" />
            <div className="login-text">Continue with Facebook</div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
