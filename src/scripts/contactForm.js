import contactInfo from "./contactCollection";

export default function() {
  const domContainer = document.getElementById("container");
  const dataForm = document.createElement("form");
  domContainer.appendChild(dataForm);
  const inputFirst = document.createElement("input");
  inputFirst.setAttribute("placeholder", "First Name");
  const inputLast = document.createElement("input");
  inputLast.setAttribute("placeholder", "Last Name");
  const inputPhone = document.createElement("input");
  inputPhone.setAttribute("placeholder", "Phone number");
  const inputAddress = document.createElement("input");
  inputAddress.setAttribute("placeholder", "Address");
  dataForm.appendChild(inputFirst);
  dataForm.appendChild(inputLast);
  dataForm.appendChild(inputPhone);
  dataForm.appendChild(inputAddress);
  const button = document.createElement("button");
  const buttonName = document.createTextNode("Save Button");
  button.appendChild(buttonName);
  dataForm.appendChild(button);
  button.addEventListener("click", () => {
    const contacts = {
      first_name: inputFirst.value,
      last_name: inputLast.value,
      phone: inputPhone.value,
      address: inputAddress.value
    };
    contactInfo.saveInfo(contacts);
  });
}
