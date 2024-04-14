import React, { useState } from "react";
import "./Register.css";
import EmailRegistration from "./EmailRegistration";
import PasswordRegistration from "./PasswordRegistration";

export default function Register() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const onChange = (item) => {
    setValues({ email: item });
    setStep((prev) => prev + 1);
  };

  console.log('email', values.email);
  const goBack = () =>{
    setStep(prev=>prev-1)
  }
  switch (step) {
    case 1:
      return (
        <EmailRegistration emailValue={values.email} onChange={onChange} />
      );

    case 2:
      return <PasswordRegistration goBack={goBack} values={values} />;
  }
}
