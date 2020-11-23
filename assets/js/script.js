var fields = {}

document.addEventListener('DOMContentLoaded', function () {
  fields.name = document.getElementById('name');
  fields.email = document.getElementById('email');
  fields.text = document.getElementById('text');
});


function isEmail(email) {
  let regex = '^(?=[A-Z0-9@._%+-]{6,254}$)[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,8}[A-Z]{2,63}$'
  return regex.test(String(email).toLowerCase());
};

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined')
    return false;
  return (value.length > 0);
};

function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
    field.className = 'placeholderRed';
  } else {
    field.className = '';
  }

  return isFieldValid;
}

function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.name, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.text, isNotEmpty);

  return valid;
};

class User {
  constructor(name, email, text) {
    this.name = name;
    this.email = email;
    this.text = text;
  }
};

function sendContact() {
  if (isValid()) {
    let usr = new User(name.value, email.value, text.value);

    alert(`${usr.name} thanks for the message!`)
  } else {
    alert("there was an error")
  }
};