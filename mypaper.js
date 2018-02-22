
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


