let required = (propertyType) => {
  return (property) =>
    (property && property.length > 0) || `You must input a ${propertyType}`;
};
let minLength = (propertyType, minLength) => {
  return (property) =>
    (property && property.length >= minLength) ||
    `${propertyType} must be at least ${minLength} characters`;
};
let maxLength = (propertyType, maxLength) => {
  return (property) =>
    (property && property.length <= maxLength) ||
    `${propertyType} must be at least ${maxLength} characters`;
};
let loginFormat = () => {
  let regex = /^[a-z0]+[0-9]+$/;
  return (property) =>
    (property && regex.test(property)) ||
    "Login must include include latin letters in lower case and numbers";
};
let passwordFormat = () => {
  let regex = /^[a-z0]+[0-9]+$/;
  return (property) =>
    (property && regex.test(property)) ||
    "Password must include latin letters in lower case and numbers";
};
let emailFormat = () => {
  let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return (property) =>
    (property && regex.test(property)) || "Email must be valid";
};
let genderFormat = () => {
  return (property) =>
    (property && (property === "male" || property === "female")) ||
    "Gender must be male or female";
};
let phoneFormat = () => {
  let regex = /[0-9]+$/;
  return (property) =>
    regex.test(property) || "Phone must be valid (example: 0951111111) ";
};
let birthdayFormat = () => {
  let regex = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/;
  return (property) =>
    regex.test(property) || "Birthday must be in format DD.MM.YYYY";
};
export default {
  required,
  minLength,
  maxLength,
  loginFormat,
  passwordFormat,
  emailFormat,
  genderFormat,
  phoneFormat,
  birthdayFormat,
};
