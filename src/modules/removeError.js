export default function removeError(error, input) {
  const errorElement = error;
  const inputElement = input;
  errorElement.textContent = "";
  errorElement.className = "error";
  inputElement.className = "";
}
