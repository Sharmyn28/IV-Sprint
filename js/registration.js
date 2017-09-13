(function(){
	let loadSite = function() {
		$('#phoneNumber').keyup(checkInputInfo);
		$('#phoneNumber').keydown(checkNumbers);
		$('#btn_Next').click(loadHTML);

	}
	let loadHTML = function(){
		let phoneNumber = $('#phoneNumber').val();
		localStorage.setItem('phoneNum', phoneNumber);
		location.href = 'validar.html';
		$('#phoneNumber').val('');
	}
	let checkInputInfo = function(){
		let inputLegth = $(this).val().trim().length;	
		let btn_checkInfo = $(this).parents('.container').next().children();

		if(inputLegth != 9){
			btn_checkInfo.attr('disabled',true);
		}else{
			btn_checkInfo.removeAttr('disabled');
		}
	}
	let checkNumbers = function(e){
		let inputPhoneNumber = $(this);
			if (e.keyCode !== 8 && (e.keyCode < 48 || e.keyCode > 57)){
			  e.preventDefault();
			}	
	}

	$(document).ready(function() {
		$('select').material_select();
		loadSite();
	});
})();
