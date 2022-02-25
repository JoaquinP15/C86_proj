
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
		});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
		});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_x)&&(ball_y == hole_y)) {
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Have Hit Goal!!";
		document.getElementById("myCanvas").style.borderColor="red";
	
	
	
	function up()
	{
		if(ball_y >= 0)
		{
			ball_y = ball_y - block_image_height;
			console.log("block_image_height ="+ block_image_height);
			console.log("When Up Arrow key Is Pressed  Y= "+ ball_x + "y = "+ ball_y);
			canvas.remove(ball_obj);
			playerUpdate();
		}
	}

	function down()
	{
		 if(ball_y <= 450)
    {
        ball_y = ball_y + block_image_height;
        console.log("block_image_height ="+ block_image_height);
        console.log("When Down Arrow key Is Pressed Y = "+ ball_x + "y = "+ ball_y);
        canvas.remove(ball_obj);
        playerUpdate();
    }
	}

	function left()
	{
		if(ball_x >5)
			ball_x = ball_x + block_image_height;
			console.log("block_image_Width ="+ block_image_Width);
			console.log("When Left Arrow key Is Pressed X = "+ ball_x + "y = "+ ball_x);
			canvas.remove(ball_obj);
			playerUpdate();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x - block_image_height;
			console.log("block_image_Width ="+ block_image_Width);
			console.log("When Right Arrow key Is Pressed X = "+ ball_x + "y = "+ ball_x);
			canvas.remove(ball_obj);
			playerUpdate();
		}
	}
}
