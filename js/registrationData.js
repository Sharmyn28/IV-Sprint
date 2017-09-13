(function(){
	let loadSite = function() {
		$('#btn_Next').click(loadHTML);

	}
	let loadHTML = function(){
		location.href = 'home.html';
	}

	$(document).ready(function() {
		$('select').material_select();
		loadSite();
	});
})();