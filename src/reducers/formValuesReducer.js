export const FORM_ACTIONS = {
  BASIC_ACTION: "BASIC_KEY",
};
export const initFormValues = {
  name: "",
  address: "",
  country: "",
  province: "",
  GSM: "",
  email: "",
  website: "",
};

function reducer(state, action = { type: "", key: "", payload: "" }) {
  switch (action.type) {
    case FORM_ACTIONS.BASIC_ACTION:
      return { ...state, [action.key]: action.payload };

    default:
      throw new Error("you didn't pass a right action type");
  }
}

export default reducer;
