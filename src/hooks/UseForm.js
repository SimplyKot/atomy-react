import { useState, useCallback } from "react";

const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    console.log(target.checked);
    setValues({
      ...values,
      [name]: target.type === "checkbox" ? target.checked : value,
    });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
};

export default useFormWithValidation;
