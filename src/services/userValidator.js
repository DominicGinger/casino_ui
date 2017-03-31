export default (name, cash) => {
  if (name == "") {
    return { valid: false, message: "Invalid name" };
  } else if (cash < 10 || cash > 1000000000) {
    return { valid: false, message: "Invalid cash" };
  }
  return { valid: true, message: "" };
}

