import addOnclick from "./modules/addOnclick";
import validateSubmit from "./modules/validateSubmit";
import "./style.css";

const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
// const emailError = document.querySelector("#mail + span.error");

addOnclick(email);
addOnclick(country);
addOnclick(zipcode);
addOnclick(password);
addOnclick(passwordConfirm);
validateSubmit(form);
