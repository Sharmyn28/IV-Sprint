(function(){
	let loadSite = function() {
		$('#btn_Next').click(loadHTML);
		$('#name').keydown(checkLetters);
		$('#lastname').keydown(checkLetters);
	}

	let loadHTML = function(){
		//location.href = 'home.html';
		checkEmail();
	}

	let checkLetters = function(e){
		let inputNames =  $(this);
		if(e.keyCode == 32 || e.keyCode == 8 || e.keyCode < 65 || e.keyCode > 90){
			e.preventDefault();
		}	
	}

	let checkEmail = function(){
		let email = $('#email').val();
		if (email === "") {
			alert("Please enter your email address.");
		} else if(!(/\S+@\S+\.\S+/.test(email))) {
			alert("Not a valid email address");
		}else{
			location.href = 'home.html';
			console.log('completa')
		}
	}
	
	$(document).ready(function() {
		$('select').material_select();
		loadSite();
	});
})();