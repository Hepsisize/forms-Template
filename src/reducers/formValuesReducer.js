export const FORM_VALUES_ACTIONS = {
  VALUE1: "SOMETHING",
};
export const initFormValues = {
  name: "",
  email: "",
  mobile: "",

  agree: false,
};

function reducer(state, action) {
  switch (action.type) {
    case FORM_VALUES_ACTIONS.VALUE1:
      return;

    default:
      throw new Error("you didn't pass a right action type");
  }
}

export default reducer;
