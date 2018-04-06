
var lowValue = 10;
var highValue = 30;
var screenLeftX = 100;
var screenRightX = 1100;
var upOrdown = -1;
var changeThis = 0;

var X1 = 100;
var Ya = 225;
var Y1 = Ya;
var line1 = [];

var X2 = 100;
var Yb = 450;
var Y2 = Yb;
var line2 = [];

function onFrame(event){

	if(X1 < screenRightX){

		// line A
		X1 += getRandom() + 100;
		Y1 = Ya + (getRandom() + getRandom()) * upOrdown;
		var Anext = new Point(X1,Y1);
		path1.lineTo(Anext);
		line1.push(Anext);
		
		upOrdown *= -1;

		// line B
		X2 += getRandom() + 100;
		Y2 = Yb + (getRandom() + getRandom()) * upOrdown;
		var Bnext = new Point(X2,Y2);
		path2.lineTo(Bnext);
		line2.push(Bnext);

		
		// //circles for A
		// var circle = new Path.Circle(new Point(X1, Y1), 10);
		// circle.strokeColor = 'green';

		// //circles for B
		// var circle = new Path.Circle(new Point(X2, Y2), 10);
		// circle.strokeColor = 'blue';

		console.log(X1, Y1, upOrdown, X2, Y2);
	} else {
		if(changeThis <= line1.length){
			var myPath = new Path();
			myPath.strokeColor = 'green';
			myPath.add(line1[0], line2[1]);
			myPath.add(line1[2], line2[2]);
			myPath.add(line1[3], line2[4]);
			myPath.add(line1[6], line2[5]);
			myPath.add(line1[6], line2[6]);
			myPath.add(line1[6], line2[7]);
			myPath.add(line1[6], line2[8]);
			myPath.add(line1[6], line2[9]);
			
			
		}
	}
}




var path1 = new Path();
path1.strokeColor = 'red';
var start1 = new Point(X1, Y1);
path1.moveTo(start1);


var path2 = new Path();
path2.strokeColor = 'orange';
var start2 = new Point(X2, Y2);
path2.moveTo(start2);

//circles for A
var circle = new Path.Circle(new Point(X1, Y1), 10);
circle.strokeColor = 'green';

//circles for B
var circle = new Path.Circle(new Point(X2, Y2), 10);
circle.strokeColor = 'blue';

function getRandom(){
	return Math.floor(Math.random() * 10);
}


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


