
<<<<<<< Updated upstream
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
=======
// 	// background
// 	var rect = new Path.Rectangle({
// 		point: [0, 0],
// 		size: [view.size.width, view.size.height],
// 		strokeColor: 'white',
// 		selected: true
// 	});
// 	rect.sendToBack();
// 	rect.fillColor = '#000000';

//     // circle dropping
// 	var circle = new Path.Circle(view.center - 100, 50);
// 	circle.strokeColor = 'green';
// 	circle.width = 10;
// 	var velocity = new Point(5, -5);
// 	var acceleration = new Point(0, 0.2);

// 	function onFrame(event){
// 		circle.position += velocity;
// 		velocity += acceleration;


// 		// Loop through the segments of the path:
// 	// for (var i = 0; i <= amount; i++) {
// 	// 	var segment = path.segments[i];

// 	// 	// A cylic value between -1 and 1
// 	// 	var sinus = Math.sin(event.time * 3 + i);
		
// 	// 	// Change the y position of the segment point:
// 	// 	segment.point.y = sinus * height + 100;
// 	// }
// 	// // Uncomment the following line and run the script again
// 	// // to smooth the path:
// 	//  path.smooth();
// 	}

// 	// triangle magic
// 	var myPath = new Path();
// 	myPath.strokeColor = 'white';
// 	myPath.add(new Point(40, 90));
// 	myPath.add(new Point(90, 40));
// 	myPath.add(new Point(140, 90));

// 	myPath.closed = true;

// 	var triangle = new Path.RegularPolygon(new Point(280, 70), 3, 50);
// 	triangle.fillColor = '#e9e9ff';
// 	triangle.selected = true;

// 	// The amount of segment points we want to create:
// var amount = 5;

// // The maximum height of the wave:
// var height = 60;

// // Create a new path and style it:
// var path = new Path({
// 	// 80% black:
// 	strokeColor: [0.8],
// 	strokeWidth: 30,
// 	strokeCap: 'square'
// });

// // Add 5 segment points to the path spread out
// // over the width of the view:
// for (var i = 0; i <= amount; i++) {
// 	path.add(new Point(i / amount, 1) * view.size);
// }

// // Select the path, so we can see how it is constructed:
// path.selected = true;
>>>>>>> Stashed changes

