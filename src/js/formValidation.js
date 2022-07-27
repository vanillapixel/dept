let emailInput = document.querySelector("#form-section #email");
let emailInputWrapper = document.querySelector(
	"#form-section .email-input-wrapper"
);

let messageInput = document.querySelector("#form-section #message");
let messageInputWrapper = document.querySelector(
	"#form-section .message-input-wrapper"
);
let nameInput = document.querySelector("#form-section #name");
let nameInputWrapper = document.querySelector(
	"#form-section .name-input-wrapper"
);
let submitButton = document.querySelector(
	"#form-section button[type='submit']"
);
function submitForm(e) {
	e.preventDefault();
	let nameInputError = validateNameInput();
	let emailInputError = validateEmailInput();
	let messageInputError = validateMessageInput();

	nameInputWrapper.setAttribute("data-input-valid", !nameInputError.status);
	emailInputWrapper.setAttribute("data-input-valid", !emailInputError.status);
	messageInputWrapper.setAttribute(
		"data-input-valid",
		!messageInputError.status
	);

	nameInputWrapper.setAttribute(
		"data-input-error-message",
		nameInputError.message
	);
	emailInputWrapper.setAttribute(
		"data-input-error-message",
		emailInputError.message
	);
	messageInputWrapper.setAttribute(
		"data-input-error-message",
		messageInputError.message
	);
	if (
		(!nameInputError.status,
		!emailInputError.status && !messageInputError.status)
	) {
		alert(
			`Form sent : \n name: ${nameInput.value}, \n email: ${emailInput.value}, \n message: ${messageInput.value}`
		);
		const inputs = [nameInput, emailInput, messageInput];
		resetAllInputs(inputs);
	}
}

function validateEmailInput() {
	const error = {
		status: false,
		message: "",
	};
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (emailInput.value === "") {
		error.status = true;
		error.message = "This field is required and cannot be empty!";
	}
	if (!regex.test(emailInput.value)) {
		error.status = true;
		error.message = "The email address is not valid!";
	}
	return error;
}

function validateNameInput() {
	const error = {
		status: false,
		message: "",
	};
	if (nameInput.value.length < 2) {
		error.message = "This field must be at least 2 characters!";
		error.status = true;
	}
	return error;
}

function validateMessageInput() {
	const error = {
		status: false,
		message: "",
	};
	if (messageInput.value.length < 2) {
		error.message = "Don't be shy, write us something!";
		error.status = true;
	}
	return error;
}

function resetErrorStatus(el) {
	el.setAttribute("data-input-valid", "");
	el.setAttribute("data-input-error-message", "");
}

function resetAllInputs(inputs) {
	inputs.forEach((input) => {
		resetErrorStatus(input.parentNode);
		input.value = "";
	});
}

nameInput.addEventListener("input", (e) =>
	resetErrorStatus(e.target.parentNode)
);
emailInput.addEventListener("input", (e) =>
	resetErrorStatus(e.target.parentNode)
);
messageInput.addEventListener("input", (e) =>
	resetErrorStatus(e.target.parentNode)
);

submitButton.addEventListener("click", submitForm);
