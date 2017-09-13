let loadHTML = function() {
	$('#btn_SignUp').click(goToRegistration);
}

let goToRegistration = function(){
	location.href = "registration.html";
}

$(document).ready(loadHTML);