import React, { useEffect, useState } from "react";
import "./PasswordRegistration.css";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordRegistration({ goBack, values, onChange, onSubmit }) {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  //console.log("p", password, "cp", cpassword);
  useEffect(() => {
    if (password !== "" && cpassword !== "") {
      if (password !== cpassword) {
        setErrorMessage(true);
      } else {
        setErrorMessage(false);
      }
    } else {
      setErrorMessage(false);
    }
  }, [password, cpassword]);

  const handleSubmit = (e)=>{
    e.preventDefault()
    onChange({password})
    console.log('password', onChange({password}));
  }
  return (
    <div className="password-reg">
      <div className="password-reg-header">
        <div style={{ marginTop: "4px", cursor: "pointer" }}>
          <FaArrowLeft onClick={() => goBack()} />
        </div>
        <div>
          <h3>Create Password</h3>
        </div>
      </div>
      <div className="password-reg-body">
        <div className="password-reg-form">
          <form action="" onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="password-reg-form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errorMessage && (
                <div
                  style={{ color: "red", fontWeight: "bold", fontSize: "13px" }}
                >
                  Password does not match
                </div>
              )}
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="">Repeat Password</label>
              <input
                type="password"
                className="password-reg-form-control"
                required
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={cpassword !== password ? true : false}
              className="password-reg-button"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
