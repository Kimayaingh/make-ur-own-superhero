
var canvas=new fabric.Canvas("mycanvas");
player_x=10;
player_y=10;


block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

var current_image_object="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,left:player_x
    });
    canvas.add(player_object); 
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object); 
    });
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
keypressed=e.keyCode;
console.log (keypressed);
if (e.shiftKey==true&& keypressed=='80'){
    console.log ("P and shift key are pressed together");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
canvas.remove(block_image_object);
    new_image(current_image_object);
}
if (e.shiftKey==true&& keypressed=='77'){
    console.log ("M and shift key are pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
    canvas.remove(block_image_object);
    new_image(current_image_object);
}
if (keypressed=='38'){
    up();
    console.log ("up");

}
if (keypressed=='40'){
    down();
    console.log ("down");
    }

    if (keypressed=='37'){
    left();
        console.log ("left");
    
}
if (keypressed=='39'){
    right();
    console.log ("right");
}

if (keypressed=='65'){
    new_image('avenger_bg.jpg');
    console.log ("A has been pressed");
    current_image_object='avenger_bg.jpg';

    }
    if (keypressed=='66'){
        new_image('captin.png');
        console.log ("B has been pressed");
        current_image_object='captin.png';
    }
    if (keypressed=='67'){
        new_image('hulk_face.png');
        console.log ("C has been pressed");
        current_image_object='hulk_face.png';
    }
    if (keypressed=='68'){
        new_image('hulk_left_hand.png');
        console.log ("D has been pressed");
        current_image_object='hulk_left_hand.png';
    }
    if (keypressed=='69'){
        new_image('hulk_legs.png');
        console.log ("E has been pressed");
        current_image_object='hulk_legs.png';
    }
    if (keypressed=='70'){
        new_image('hulk_right_hand.png');
        console.log ("F has been pressed");
        current_image_object='hulk_right_hand.png';
    }
    if (keypressed=='71'){
        new_image('hulkd_body.png');
        console.log ("G has been pressed");
        current_image_object='hulkd_body.png';
    }
    if (keypressed=='72'){
        new_image('ironman_body.png');
        console.log ("H has been pressed");
        current_image_object='ironman_body.png';
    }
    if (keypressed=='73'){
        new_image('ironman_face.png');
        console.log ("I has been pressed");
        current_image_object='ironman_face.png'; 
    }
    if (keypressed=='74'){
        new_image('ironman_face.png');
        console.log ("J has been pressed");
        current_image_object='ironman_left_hand.png'; 
    }
    if (keypressed=='75'){
        new_image('ironman_left_hand.png');
        console.log ("K has been pressed");
        current_image_object='ironman_left_hand.png'; 
    }
    if (keypressed=='76'){
        new_image('ironman_legs.png');
        console.log ("L has been pressed");
        current_image_object='ironman_legs.png'; 
    }
    if (keypressed=='77'){
        new_image('ironman_right_hand.png');
        console.log ("M has been pressed");
        current_image_object='ironman_right_hand'; 
    }
    if (keypressed=='78'){
        new_image('spider_man_body.png');
        console.log ("N has been pressed");
        current_image_object='spider_man_body.png'; 
    }
    if (keypressed=='79'){
        new_image('spiderman_face.png');
        console.log ("O has been pressed");
        current_image_object='spiderman_face.png'; 
    }
    if (keypressed=='80'){
        new_image('spiderman_left_hand.png');
        console.log ("P has been pressed");
        current_image_object='spiderman_left_hand.png'; 
    }
    if (keypressed=='81'){
        new_image('spiderman_legs.png');
        console.log ("Q has been pressed");
        current_image_object='spiderman_legs.png'; 
    }
    if (keypressed=='82'){
        new_image('spiderman_right_hand.png');
        console.log ("R has been pressed");
        current_image_object='spiderman_right_hand.png'; 
    }
    if (keypressed=='83'){
        new_image('thor_face.png');
        console.log ("S has been pressed");
        current_image_object='thor_face.png'; 
    }
    if (keypressed=='83'){
        new_image('thor_left_hand.png');
        console.log ("T has been pressed");
        current_image_object='thor_left_hand.png'; 
    }
    if (keypressed=='84'){
        new_image('thor_right_hand.png');
        console.log ("U has been pressed");
        current_image_object='thor_right_hand.png'; 
    }
    function up(){
        if (player_y>=0){
            player_y=player_y-block_image_height;
            console.log ("block_image_height="+block_image_height);
            console.log ("when up arrow key is pressed x="+player_x +",y="+player_y);
            canvas.remove (player_object);
            player_update();
        }
        
        }
        
        function down(){
            if (player_y<=500){
        player_y=player_y+block_image_height;
        console.log ("block_image_height="+block_image_height);
        console.log ("when down arrow key is pressed x="+player_x +",y="+player_y);
        canvas.remove (player_object);
        player_update();
        
            }
        }
        
        function left(){
            if (player_x>0){
        player_x=player_x-block_image_width;
        console.log ("block_image_width="+block_image_width);
        console.log ("when left arrow key is pressed x="+player_x +",y="+player_y);
        canvas.remove (player_object);
        player_update();
        
            }
        }
        
        function right(){
            if (player_x<=850){
        player_x=player_x+block_image_width;
        console.log ("block_image_width="+block_image_width);
        console.log ("when right arrow key is pressed x="+player_x +",y="+player_y);
        canvas.remove (player_object);
        player_update();
        
            }
}
    }