/**
 * Created by kotpl on 11/20/2016.
 */
var die_image;
var start_game;
var restart;
var give_up;
var win_game;
var text;
var die_val;
var guess;
var blink_interval;

window.onload=init;
function init()
{
    start_game=document.getElementById("start_game");
    restart=document.getElementById("restart");
    give_up=document.getElementById("loose");
    win_game=document.getElementById("win");

    start_game.addEventListener("click",begin_game,false);
    win_game.addEventListener("click",cheat,false);
    give_up.addEventListener("click",loose,false);
    restart.addEventListener("click",restart_game,false);

    die_image=document.getElementById("die_image");
    text=document.getElementById("text");
    die_val=0;
}

function begin_game()
{
    start_game.style.visibility="hidden";
    
    guess=parseInt(prompt('Type your guess'));

    animate_dice();
    setTimeout(finish_game,4000);
}

function cheat()
{
    alert("Cheating is BAAAD!");
    win();
}

function loose()
{
    restart.style.visibility="visible";
    give_up.style.visibility="hidden";
    win_game.style.visibility="hidden";
    start_game.style.visibility="hidden";

    text.innerHTML="YOU LOST";
    text.style.color="tomato";
    text.style.transition="opacity 1s";
    text.style.opacity="1";
    document.body.style.transition="all 1s";
    document.body.style.backgroundColor="black";
}

function win()
{
    restart.style.visibility="visible";
    give_up.style.visibility="hidden";
    win_game.style.visibility="hidden";
    start_game.style.visibility="hidden";

    text.style.transition="none";
    text.style.opacity="1";
    text.innerHTML="YOU WON!";
    text.style.color="green";
    blink_interval=setInterval(blink_text,100);
}

function restart_game() {
    clearInterval(blink_interval);
    restart.style.visibility="hidden";
    give_up.style.visibility="visible";
    win_game.style.visibility="visible";
    start_game.style.visibility="visible";

    document.body.style.transition="none";
    text.style.transition="none";

    document.body.style.backgroundColor="antiquewhite";
    text.style.opacity="0";
    die_image.style.visibility="hidden";
    die_image.style.height="53px";

}

function roll_die()
{
    var new_val;
    do
    {
        new_val=1+Math.floor(Math.random()*6);
    }
    while(new_val==die_val)
    die_val=new_val;
    switch(die_val){
        case 1:
            die_image.src="images/die1.png";
            break;
        case 2:
            die_image.src="images/die2.png";
            break;
        case 3:
            die_image.src="images/die3.png";
            break;
        case 4:
            die_image.src="images/die4.png";
            break;
        case 5:
            die_image.src="images/die5.png";
            break;
        case 6:
            die_image.src="images/die6.png";
            break;
        default:
    }
    die_image.style.visibility="visible";
    return die_val;
}

function animate_dice()
{
    for(var i=0;i<20;i++)
    {
        setTimeout(roll_die,10*i*i);
    }
}

function finish_game()
{
    die_image.style.height="75px";
    if(guess!=null && guess==die_val)
        win();
    else
        loose();
}

function blink_text()
{
    text.style.color=getRandomColor();
}
function getRandomColor()
{
    var digits="0123456789ABSDEF";
    var color="#";
    for(var i=0;i<6;i++)
    {
        color+=digits[Math.floor(Math.random()*16)];
    }
    return color;
}