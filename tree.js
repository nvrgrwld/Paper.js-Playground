
	// background
	var rect = new Path.Rectangle({
		point: [0, 0],
		size: [view.size.width, view.size.height],
		strokeColor: 'white',
		selected: true
	});
	rect.sendToBack();
    // rect.fillColor = '#000000'; // black
    rect.fillColor = '#ffffff'; // white
    // rect.fillColor = '#808080'; // grey
	var lineColor = 'black';

	loopCount = 7;
	var l = 0;
	var thePoint = new Point(10,10);
	var row1x = [10, 20, 25, 30, 35, 45];
	var row1y = [10, 11, 9, 11, 10, 13];
	var i = 0;
	var multiplier = 50;



	var treeLineHorizontal = new Path();
	treeLineHorizontal.strokeColor = lineColor;
	//treeLineHorizontal.add(new Point(5, 5));

function onFrame(event){

    if(l < loopCount){
        //var vector = xMax
      // console.log('I get the point! ',Point.random(sf 51,3));
	   

		if(i === 5)  {  
			multiplier *= 3;
		}
		var a = (i === 6 ? i = 0 : i); 
		console.log('mult and aye ====> ', multiplier, i);
		thePoint.x = row1x[a] + multiplier;
		thePoint.y = row1y[a] + multiplier;
		++i;
		console.log('I get the point! ', thePoint);
		treeLineHorizontal.add(thePoint);
		l += 1;
    }



}
var y1 = [100, 110, 130];
var x1 = [100, 200];
var xMax = 300;
var xCurrent = 100;


