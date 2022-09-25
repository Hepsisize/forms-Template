function validateForm(formVales) {
  const errorsArray = [];
  // validate the form values

  return errorsArray;
}

//^ need this to check wether all keys are null or not (Boolean)
function isNullObject(obj) {
  const turnedToArray = Object.entries(obj);
  const isNull = turnedToArray.every(([key, value]) => Boolean(!value));
  return isNull;
}

export default validateForm;
