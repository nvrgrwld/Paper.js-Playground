	// // Create a Paper.js Path to draw a line into it:
	// var path = new Path();
	// // Give the stroke a color
	// path.strokeColor = 'red';
	// var start = new Point(100, 100);
	// // Move to start and draw a line from there
	// path.moveTo(start);
	// // Note the plus operator on Point objects.
	// // PaperScript does that for us, and much more!
	// path.lineTo(start + [ 100, -50 ]);

	// path.add(new Point(200, 200));
	// path.add(new Point(300, 200));
	// path.add(new Point(200, 300));
	
	var rect = new Path.Rectangle({
		point: [0, 0],
		size: [view.size.width, view.size.height],
		strokeColor: 'white',
		selected: true
	});
	rect.sendToBack();
	rect.fillColor = '#000000';


	var circle = new Path.Circle(view.center - 100, 50);
	circle.strokeColor = 'green';
	circle.width = 10;
	var velocity = new Point(5, -5);
	var acceleration = new Point(0, 0.2);

	function onFrame(event){
		circle.position += velocity;
		velocity += acceleration;

	}

