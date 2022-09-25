import { createContext, useReducer } from "react";
import formValuesReducer, {
  initFormValues,
} from "../reducers/formValuesReducer";

export const FormContext = createContext();
export const FormContextProvider = ({ children }) => {
  const [formValues, dispatchFormInfo] = useReducer(
    formValuesReducer,
    initFormValues
  );

  const sharedValues = {
    setFormInfo: dispatchFormInfo,
    formValues,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
};
