import React from "react";
export function useForm(inputs: any) {
  const [values, setValues] = React.useState(inputs);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e: any) => {
    const {name, value} = e.target
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  return { values, handleChange, errors, isValid}
}