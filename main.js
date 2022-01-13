canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car_width=75;
car_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
carY=5;
carX=225;

function add() {
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image; 

	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(
		background_imgTag,0,0, canvas.width, canvas.height	
	)
}

function uploadgreencar() {
	ctx.drawImage(
		greencar_imgTag, carX, carY, car.width, car_height
	);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carY>=0)
	{carY=carY-10;
	console.log("When UP arrow key os pressed, X : "+carX+"  |  Y : "+carY);
	uploadBackground;
	uploadgreencar;}
}

function down()
{
	if(carY>=0)
	{carY=carY+10;
	console.log("When DOWN arrow key os pressed, X : "+carX+"  |  Y : "+carY);
	uploadBackground;
	uploadgreencar;}
}

function left()
{
	if(carX>=0)
	{carY=carY+10;
	console.log("When RIGHT arrow key os pressed, X : "+carX+"  |  Y : "+carY);
	uploadBackground;
	uploadgreencar;}
}

function right()
{
	if(carX>=0)
	{carY=carY-10;
	console.log("When LEFT arrow key os pressed, X : "+carX+"  |  Y : "+carY);
	uploadBackground;
	uploadgreencar;}}
