canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
car_x=10;
car_y=10;
background_image="xd track.jpg";
car_image="simple-travel-car-top_view.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src= car_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadcar(){
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);

}