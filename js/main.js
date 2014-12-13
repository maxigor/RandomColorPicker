// function getRandomColor() {
//   var letters = '0123456789ABCDEF'.split('');
//   var color = '#';
//   for (var i = 0; i < 6; i++ ) {
//    	color += letters[Math.round(Math.random() * 16)];
//   }
//   return document.getElementById('hex').innerHTML=color;
// }

// function getRandomColor(){
// 	var randomColor = Math.floor(Math.random()*16777215).toString(16);
// 	return document.getElementById('');
// }

// function draw(x,y){
// 	var canvas = document.getElementById("canvas");
// 	var ctx = canvas.getContext("2d");
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(x,y,1260,700);
// }

$(function(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);

	$("body").css({
		backgroundColor: '#' + randomColor
	});
});