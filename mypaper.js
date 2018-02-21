
var lowValue = 10;
var highValue = 30;
var screenLeftX = 100;
var screenRightX = 1100;
var currentX = 100;
var currentY = 450;

function onFrame(event){

	if(currentX < screenRightX){
		currentX += getRandom();
		currentY += getRandom() - 50;
		console.log(currentX, currentY);
		path.lineTo(currentX, currentY);

		//circle
		var circle = new Path.Circle(new Point(currentX, currentY), 10);
		circle.strokeColor = 'green';
	}
}


//circle.position = new Point(currentX, currentY);
//circle.width = 8;

// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'red';
var start = new Point(currentX, currentY);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
//path.lineTo(start + [ 100, -50 ]);

function getRandom(){
	return Math.floor(Math.random() * 100);
	//return rand; 
}

console.log(Math.floor(Math.random() * 100));

