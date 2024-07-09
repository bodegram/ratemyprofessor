import React, { useState } from "react";
import "./Register.css";
import EmailRegistration from "./EmailRegistration";
import PasswordRegistration from "./PasswordRegistration";
import { useDispatch } from "react-redux";
import { registerAsync } from "../../redux/slices/authSlice";

export default function Register() {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onChange = (item) => {
    setValues({ ...item });
    if (step === 2) {
      console.log('submit');
      onSubmit();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const onSubmit = () => {
    dispatch(
      registerAsync({
        email: values.email,
        username: values.username,
        password: values.password,
      })
    );
  };

  //console.log('email', values.email);
  const goBack = () => {
    setStep((prev) => prev - 1);
  };
  switch (step) {
    case 1:
      return (
        <EmailRegistration
          emailValue={values.email}
          usernameValue={values.username}
          onChange={onChange}
        />
      );

    case 2:
      return (
        <PasswordRegistration
          goBack={goBack}
          values={values}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      );
  }
}
