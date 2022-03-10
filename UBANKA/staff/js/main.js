
function setFormMessage(formElement, type, message) {   //the element: takes wither login or create the, type: for error or success, and the message: is the message that displays

  const messageElement = formElement.querySelector(".form__message");  //this will show the message that should be displayed in line 16 of html

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);

}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");  //this will add the style from the css to the html if there is an error

  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;  //this is taking the parent element and checking for the input error message and styling it
}

function clearInputError(inputElement) {    //this is used to remove the input error
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {  //this is when we get the ids of the html for create and login form
  
  const loginForm = document.querySelector("#login"); 
  const createAccountForm = document.querySelector("#createAccount");
  
  document.querySelector("#linkCreateAccount").addEventListener("click", e => {  //when one clicks on the create account the login form is hidden because of the form--hidden code on login form while create account is seen while e means the element and prevent default is letting the page respond to the either add or remove making it not redirect it to any href

    e.preventDefault()
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");

  });

  document.querySelector("#linkLogin").addEventListener("click", e => {  //when one clicks on the login form it is visible while the create account is hidden becuase add form--hidden is on the create account

    e.preventDefault()
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");

  });


  loginForm.addEventListener("submit", e => {
    e.preventDefault()     //this will stop the page from submitting throught traditional refresh so chuckwudi will provide what we will use to store the form

    setFormMessage(loginForm, "error", "invalid username/password combination")  //this is the error message that will display if there email or password is invalid 

  });


  document.querySelectorAll(".form__input").forEach(inputElement => {

    inputElement.addEventListener("blur", e => {  //this is when the cursor is no longer in the input form and it was being edited

       if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) { 
            setInputError(inputElement, "Username must be atleast 10 characters in length");
      }

    })

    inputElement.addEventListener("input", e => {
      clearInputError(inputElement);

    });
  });
});