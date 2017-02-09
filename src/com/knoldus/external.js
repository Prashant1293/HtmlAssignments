function timerDisp(){
var date= new Date();
var time=date.toLocaleTimeString();
document.getElementById("timer").innerHtml=time;

}
setInterval(function(){timerDisp()},1000)