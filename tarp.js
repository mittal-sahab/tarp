var startButton = document.querySelector("#start");
var timetext = document.querySelector('#time');
var rasimg = document.querySelector("#raspi");
var scr = document.querySelector('#score');
var eb = document.querySelector('#end');
var temp=0;
var score=0;
var sc=0;
var timeleft = 40;
scr.textContent=0;
startButton.addEventListener("click",function(){
  var downloadTimer = setInterval(function(){
    rasimg.addEventListener("click",function(){
      x =(10+ Math.floor((Math.random() *80) + 1))+"%";
      y = (5+ Math.floor((Math.random() * 30) + 1))+"%";
      rasimg.onclick = function() {
        rasimg.style.marginTop = y;
        rasimg.style.marginLeft = x;
        scr.textContent = parseInt(scr.textContent)+1;
        }
      //console.log(x+" "+y);
    });
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    if(timeleft<=0){
      alert("Congratulations! You have successfully got "+scr.textContent+" R-Pi for Tanmay. Take a screenshot of this and send it to Tanmay to get your equivalent reward.");

      location.reload();
      }
  }
  timetext.textContent = timeleft;
  timeleft -= 1;
}, 1000);
});
eb.addEventListener("click",function(){
  location.reload();
})
