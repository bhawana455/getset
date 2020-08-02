myDate = new Date();
setInterval(function(){
myDate = new Date();
$('.time').html(myDate.getHours() + ":" + myDate.getMinutes() + "<b>" + myDate.getSeconds()+"</b>");
}, 1000);