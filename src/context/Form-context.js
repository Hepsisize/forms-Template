import { createContext, useEffect, useReducer, useState } from "react";
import reducer, { initFormValues } from "../reducers/formValuesReducer";

export const FormContext = createContext();
export const FormContextProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [formValues, dispatchFormInfo] = useReducer(reducer, initFormValues);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  const sharedValues = {
    errors,
    setErrors,
    formValues,
    setFormInfo: dispatchFormInfo,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
};
