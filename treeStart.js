
var screenLeftX = 100;
var screenRightX = 1100;
var upOrdown = -1;
var changeThis = 0;

var Xarr = [
	90,
	95,
	100,
	105,
	110,
	115,
	120
];

var Yarr = [
	200,
	250,
	325,
	425,
	550
];

var line= [];
var line2 = [];
var X,Y,k = 0;

function onFrame(event){

	if(k < 1) { //X1 < screenRightX){
	 k++;

	 for(var i = 0; i < Yarr.length; ++i){
		 
		// reset values for new line
		var path = new Path();
		path.strokeColor = 'red';
		var start = new Point(Xarr[0], Yarr[i]);
		path.moveTo(start);
		line = [];
		Y = Yarr[0];
		X = Xarr[0];
		upOrdown = -1;

		for(var j = 0; j < Xarr.length; ++j){
			typeof(X) ===  'number' ? X += getRandom() + Xarr[j] : X = getRandom() + Xarr[j];
			Y = Yarr[i] + (getRandom() + getRandom()) * upOrdown;
			var Anext = new Point(X,Y);
			path.lineTo(Anext);
			line.push(Anext);
			
			upOrdown *= -1;
			console.log(X, Y, upOrdown);
		}
	}
		// //circles for A
		// var circle = new Path.Circle(new Point(X1, Y1), 10);
		// circle.strokeColor = 'green';

		// //circles for B
		// var circle = new Path.Circle(new Point(X2, Y2), 10);
		// circle.strokeColor = 'blue';

	}
}

// var path1 = new Path();
// path1.strokeColor = 'red';
// var start1 = new Point(Xarr[0], Yarr[0]);
// path1.moveTo(start1);

function getRandom(){
	return Math.floor(Math.random() * 10);
}


