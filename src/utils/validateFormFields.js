function validateForm(formVales) {
  const errorsArray = [];
  // validate the form values
  const {
    name,
    address,
    country,
    province,
    GSM,
    telephone,
    email,
    businessField,
    jobTypes,
  } = formVales;

  //todo: set required fields
  if (
    !name ||
    !address ||
    !country ||
    !province ||
    !GSM ||
    !email ||
    !businessField ||
    !jobTypes.length
  )
    errorsArray.push("Should complete all required fields with * mark");

  if (!validName(name))
    errorsArray.push("Name Should be at least name & surname");

  if (!validAddress(address))
    errorsArray.push("address should contain building number");

  if (telephone && !validPhone(telephone))
    errorsArray.push(
      "Telephone should start with '+', county code and valid number"
    );
  if (!validPhone(GSM))
    errorsArray.push("GSM should start with '+', county code and valid number");

  return errorsArray;
}

//^ validation functions
function validAddress(address) {
  const isValid = address.split("").some(character => !isNaN(character));

  return isValid;
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
