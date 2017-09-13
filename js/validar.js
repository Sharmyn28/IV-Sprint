(function() {
	let loadSite = function(){
		let getNumber = localStorage.getItem('phoneNum');
		$('#prevPhoneNum').text(getNumber);
		$('#codeGenerator').click(generateCode);
		$('.randomCode').keyup(checkInputInfo).keyup(nextBlankSpace);
		$('#checkCode').click(checkCode);
		generateCode();
	}
	let generateCode = function(){
		let codeArray = [];
		let code = '';
		let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for(let i = 0; i < 3; i++){
			code += abc.charAt(Math.floor(Math.random()*abc.length));
		}
		console.log(code);
		localStorage.setItem('savedNumber',code);
		swal("Your Lyft code is:", "LAB " + code );	
	}

	let checkInputInfo = function(){	
		let btn_checkInfo = $(this).parents('.container').next().children().eq(0);
		console.log(btn_checkInfo);
		let isOk = true;
		$('.randomCode').each(function(index, element){
			let inputsLength = $(element).val().trim().length;
			isOk = isOk && (inputsLength === 1);
		});
		if(isOk){
			btn_checkInfo.removeAttr('disabled');
		}else{
			btn_checkInfo.attr('disabled',true);
		}	
	}

	let loadHTML = function(){
		setTimeout(function(){
			location.href = "registrationData.html";
		},700);
	}

	let checkCode = function(serie){
		let arrayCode = [];
		$('.randomCode').each(function(index, element){
			let digitValue = $(element).val();
			digitValue = digitValue.toUpperCase();
			arrayCode.push(digitValue);
		});
		let codeChain = arrayCode.join('');
		let getSavedNumber = localStorage.getItem('savedNumber');
		if(codeChain === getSavedNumber){
			swal("Welcome to Lyft!",'Your code is valid', "success");	
			loadHTML();
		}else{	
			swal ( "Something went wrong" ,  "Try again!" ,  "error" );
		}
		$('randomCode').val('');
	}
	let nextBlankSpace = function(){
		let element = $(this).val().length;
		let nextSibling = $(this).parent().next().children();
		let atrrElement = $(this).attr('maxlength');
		if (element == atrrElement){
			nextSibling.focus();	
		}
	}
	$(document).ready(loadSite);
})();