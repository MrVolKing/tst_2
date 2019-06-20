var btn_qestion1 = document.querySelectorAll('.question-1__btn');
for(var i=0; i<btn_qestion1.length; i++){
	btn_qestion1[i].onclick = function(){
		document.querySelector('.question-1').style.display = 'none';
		document.querySelector('.question-2').classList.add('fadeIn');
	}
}

var btn_qestion2 = document.querySelectorAll('.question-2__btn');
for(var i=0; i<btn_qestion2.length; i++){
	btn_qestion2[i].onclick = function(){
		document.querySelector('.question-2').style.display = 'none';
		document.querySelector('.question-3').classList.add('fadeIn');
	}
}

var btn_qestion3 = document.querySelectorAll('.question-3__btn');
for(var i=0; i<btn_qestion3.length; i++){
	btn_qestion3[i].onclick = function(){
		document.querySelector('.question-3').style.display = 'none';
		document.querySelector('.continue').classList.add('fadeIn');
	}
}