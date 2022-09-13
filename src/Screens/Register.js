import { useRef } from "react";

const Register = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  // const onSubmit = (e) => {
  //     e.preventDefault();
  //     const email = emailRef.current.value;
  //     const name = nameRef.current.value;
  //     const password = passwordRef.current.value;
  //     if (email && password && name) registerUser(email, password, name);
  //   };

  return (
    <div className="login-page">
      <form onSubmit={onSubmit}>
        <h1>REGISTRATION</h1>

        <div className="txtb">
          <label>Full Name</label>
          <input type="text" name="email" ref={nameRef} />
        </div>

        <div className="txtb">
          <label>Email Address</label>
          <input type="text" name="email" ref={emailRef} />
        </div>

        <div className="txtb">
          <label>Password</label>
          <input type="password" name="password" ref={passwordRef} />
        </div>

        <div className="login-footer">
          <button className="login-page-btns login-btn">SIGN UP</button>

          <button className="login-page-btns forgot-btn">
            Back to Login Page
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;