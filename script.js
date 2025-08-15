const select = document.querySelector('#regForm__select')
select.addEventListener('change', () => {
  select.firstElementChild.textContent = '------'

})

const validate = new JustValidate("#reg_form");

// name
validate.addField("#regForm__name", [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Name must be at least 2 characters",
  },
]);

// email
validate.addField("#regForm__email", [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
  {
    rule: "email",
    errorMessage: "Invalid email",
  },
]);

// password
validate.addField("#regForm__password", [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
  {
    rule: "minLength",
    value: 8,
    errorMessage: "Password must contain minimum eight characters, at least one letter and one number",
  },
  {
    rule: "password",
    errorMessage: "Invalid password",
  },
]);
validate.addField("#regForm__confirmPassword", [
  {
    rule: "required",
    errorMessage: "Confirm your password",
  },
  {
    validator: (value, fields) => {
      return value === fields["#regForm__password"].elem.value;
    },
    errorMessage: 'Passwords do not match'
  },
  
]);
validate.addField("#regForm__message", [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
])
validate.addField("#regForm__select", [
  {
    rule: "required",
    errorMessage: "You have to choose an option"
  }
])
validate.addField('#regForm__checkBox', [
  {
    rule: "required",
    errorMessage: "Please choose this option"
  }
])
validate.addField('#regForm__radio1', [
  {
    rule: 'required',
    errorMessage: "choose",
  }
])
validate.addField('#regForm__num', [
  {
    rule: "required",
    errorMessage: "This field is required"
  },
  {
    rule: "number",
    errorMessage: "Please enter the number",
  }
])
validate.addField('#regForm__int', [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
  {
    rule: "integer",
    errorMessage: "Please enter the integer number",
  }
])
validate.addField('#regForm__10', [
  {
    rule: "required",
    errorMessage: "This field is required",
  },
  {
    rule: "number",
    errorMessage: "Please enter the number",
  },
  {
    rule: 'minNumber',
    value: 10,
    errorMessage: "Minimum number is 10"
  },
  {
    rule: "maxNumber",
    value: 20,
    errorMessage: "Maximum number is 20"
  }
])
validate.addRequiredGroup('#checkBoxes', 'Please select at least 1 option')
validate.addRequiredGroup('#radioButtons', 'Please choose an option')

const showPassBtn = document.querySelector('#regForm__showPass')
showPassBtn.addEventListener('click', () => {
  const password = document.querySelector('#regForm__password')
  const confirm = document.querySelector('#regForm__confirmPassword')
  if(password.type === 'password' && confirm.type === 'password'){
    password.type = 'text'
    confirm.type = 'text'
    showPassBtn.textContent = 'Hide password'
  }
  else{
    password.type = 'password'
    confirm.type = 'password'
    showPassBtn.textContent = 'Show password'
  }

})
