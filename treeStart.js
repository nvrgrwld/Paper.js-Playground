//import { Layer } from "paper";

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
	120,
	125,
	130,
	140,
	150,
];

var Yarr = [
	190,
	200,
	220,
	250,
	290,
	340,
	400, 
	470,
	550,
	640,
	740,
];

var line= [];
var line2 = [];
var X,Y,k = 0;
var pathHolder = [];

function onFrame(event){

	if(k < 4) { //X1 < screenRightX){
	 k++;
	 
	//  if(project.layers.length > 3){
	// 	 console.log('the layers');
	//  }
	 //window[k + ] = new Layer();

	 for(var i = 0; i < Yarr.length; ++i){
		 
		// reset values for new line
		var path = new Path();
		pathHolder.push(path);
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
			path.smooth();
			line.push(Anext);
			
			if(getRandom() < 10){
				upOrdown *= -1;
			}
			// console.log(X, Y, upOrdown);
		}
	}
		// //circles for A
		// var circle = new Path.Circle(new Point(X1, Y1), 10);
		// circle.strokeColor = 'green';

		// //circles for B
		// var circle = new Path.Circle(new Point(X2, Y2), 10);
		// circle.strokeColor = 'blue';

	}
	else  {
		//debugger;
		k = 0;
		for(var ii = 0; ii < pathHolder.length / 2; ++ii){
			var path = pathHolder[ii];
			path.remove();
		}
		pathHolder.splice(0, pathHolder.length / 2);
		console.log(pathHolder.length);
		//project.clear();
		//console.log('beans');
	}
}

// var path1 = new Path();
// path1.strokeColor = 'red';
// var start1 = new Point(Xarr[0], Yarr[0]);
// path1.moveTo(start1);

function getRandom(){
	return Math.floor(Math.random() * 10);
}

// function sleep(ms){
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runPause(){
// 	await sleep(2000);
// 	k = 0;
// }

// runPause();