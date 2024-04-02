import checkValidity from "./checkValidity";
import removeError from "./removeError";
import showError from "./showError";

export default function addOnclick(input) {
  const element = input;
  const error = document.querySelector(`#${element.id} + span.error`);
  element.addEventListener("input", () => {
    if (checkValidity(element)) {
      removeError(error, element);
    } else {
      showError(error, element);
    }
  });
}
