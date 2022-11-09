function validateForm(formVales) {
  const errorsArray = [];
  // validate the form values
  const { name, tel, GSM, jobTypes } = formVales;

  if (!validName(name))
    errorsArray.push("Name Should be at least name & surname");

  if (tel && !validPhone(tel))
    errorsArray.push(
      "Telephone should start with '+', county code and valid number"
    );
  if (!validPhone(GSM))
    errorsArray.push("GSM should start with '+', county code and valid number");

  if (jobTypes.length === 0)
    errorsArray.push("At least 1 job type should be selected");

  return errorsArray;
}

function validName(name) {
  const isValid = name.split(" ").length >= 2;
  return isValid;
}

export function validPhone(phoneNumber) {
  const arrayOfNumbers = phoneNumber.split("");
  const startWithPlus = arrayOfNumbers[0] === "+";
  if (!startWithPlus) return false;
  const noLetters = arrayOfNumbers.slice(1).every(v => !isNaN(v));
  if (!noLetters) return false;
  const minAndMaxNumbers =
    arrayOfNumbers.length > 5 && arrayOfNumbers.length <= 15;
  if (!minAndMaxNumbers) return false;

  return true;
}

export default validateForm;
