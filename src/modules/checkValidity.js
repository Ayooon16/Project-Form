export default function checkValidity(input) {
  const data = input.value;
  const checkType = input.dataset.type;
  if (checkType === "email") {
    if (
      data !== "" &&
      data.length > 12 &&
      data.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ) {
      return true;
    }
    return false;
  }
  if (checkType === "country") {
    if (data !== "" && data.length > 3) {
      return true;
    }
    return false;
  }
  if (checkType === "zipcode") {
    if (data !== "" && data.match(/^\d{5}(?:[-\s]\d{4})?$/)) {
      return true;
    }
    return false;
  }
  if (checkType === "password" || checkType === "passwordConfirm") {
    if (data !== "" && data.length > 7) {
      return true;
    }
    return false;
  }
  return false;
}
