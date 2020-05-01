var colors = ["#2ecc71","#3498db","#9b59b6", "#f1c40f", "#e67e22", "#e74c3c"];                
var rand = Math.floor(Math.random()*colors.length);
$('header').css({"background":colors[rand]});
$('h4 a').css({"color":colors[rand]});
$('li p a').css({"color":colors[rand]});
$('button').css({"background":colors[rand]});
$('.product-container .product-details h4').css({"color":colors[rand]});			
$('footer path').css({"fill":colors[rand]});
