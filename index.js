var colors=["green","red","yellow","blue"];
var humanclicks=[];
var randomcols=[];var counter=0;var counter_input=0;var level=0;
$(document).keypress(function(){
auto();
});
$(".buts").click(function(){
  var pressed=String(this.id);
  humanclicks.push(String(pressed));
  makesound(String(pressed));
animatePress(String(pressed));
  check();
});
function makesound(name)
{
  var audio = new Audio(name + ".mp3");
  audio.play();
}


function randomnum()
{
  var a=Math.random();
  a=Math.floor(a*4);
  return a;
}

function auto()
{
  humanclicks = [];
  level++;
  $("#level-title").text("Level " + level);
  var b=randomnum();
  randomcols.push(String(colors[b]));

  $("#" + colors[b]).fadeIn(100).fadeOut(100).fadeIn(100);
  makesound(String(colors[b]));
}


function check()
{

    if(humanclicks[humanclicks.length-1]==randomcols[humanclicks.length-1])
    {
      if (humanclicks.length === randomcols.length){
        setTimeout(function () {
          auto();
        }, 1000);
      }
    }

    else {
      console.log("wrong");
      makesound("wrong");
     $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
     $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function startOver()
{
    level = 0;
    randomcols = [];
}
