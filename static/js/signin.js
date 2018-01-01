'use strict';

var input_email = document.getElementById('email');
var input_password = document.getElementById('password');
var button = document.getElementById('login');
var error = document.getElementById('error');
var checkEmail = false;
var checkPassword = false;

function handlerCheck(target, bool) {
	var textError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	if (bool) {
		target.style.borderColor = 'green';
		errorText(textError);
	} else {
		target.style.borderColor = 'red';
		errorText(textError);
	}
}
function errorText(text) {
	error.innerText = text;
}

input_password.addEventListener('change', function (e) {
	var target = e.target;
	if (target.value.length >= 3 && target.value.length <= 50) {
		checkPassword = true;
		handlerCheck(target, true);
	} else {
		checkPassword = false;
		handlerCheck(target, false, "Пароль должен содержать от 3 до 50 символов");
	}
});
input_email.addEventListener('change', function (e) {
	var target = e.target;
	if (target.value != '') {
		if (target.value.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i)) {
			checkEmail = true;
			handlerCheck(target, true);
		} else {
			checkEmail = false;
			handlerCheck(target, false, "Неверный E-Mail");
		}
	}
});

button.addEventListener('click', function (e) {
	e.preventDefault();
	if (checkPassword === true && checkEmail === true) {
		$.ajax({
			url: 'login_action',
			type: 'POST',
			data: {
				email: input_email.value,
				password: input_password.value
			}
		}).done(function (data) {
			var status = JSON.parse(data);
			if (status === true) {
				window.location = "/";
			} else {
				error.innerText = status;
			}
		}).fail(function () {
			console.log("error");
		});
	} else if (!checkEmail || !checkPassword) {
		error.innerText = 'Введите логин и пароль';
	}
});