import checkValidity from "./checkValidity";

export default function validateSubmit(form) {
  form.addEventListener("submit", (event) => {
    const inputs = form.children[0].querySelectorAll(":scope > input");
    let valid = true;
    let password = "";
    let passwordConfirm = "";
    inputs.forEach((element) => {
      if (element.dataset.type === "password") {
        password = element.value;
      }
      if (element.dataset.type === "passwordConfirm") {
        passwordConfirm = element.value;
      }
      if (!checkValidity(element)) {
        valid = false;
      }
    });
    if (!valid || password !== passwordConfirm) {
      event.preventDefault();
    }
  });
}
