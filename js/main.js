function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
   	color += letters[Math.round(Math.random() * 16)];
  }
  return color;
}

function draw(x,y){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = getRandomColor();
	ctx.fillRect(x,y,1260,700);
}