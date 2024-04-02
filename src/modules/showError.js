export default function showError(error, input) {
  const errorElement = error;
  const inputElement = input;

  errorElement.className = "error active";
  errorElement.textContent = "Wrong value";
  inputElement.className = "invalid";
}
