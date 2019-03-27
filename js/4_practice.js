$(document).ready(function() {


	var pictures = ["1.1.jpg", "2.1.jpg", "3.1.jpg", "4.1.jpg", "5.1.jpg", "6.1.jpg", "7.1.jpg", "8.1.jpg", "9.1.jpg", "10.1.jpg", "11.1.jpg", "12.1.jpg", "13.1.jpg", "14.1.jpg", "15.1.jpg", "16.1.jpg", "17.1.jpg", "18.1.jpg", "19.1.jpg", "20.1.jpg", "21.1.jpg", "22.1.jpg", "23.1.jpg", "24.1.jpg", "25.1.jpg"];
	var n = Math.floor(Math.random() * pictures.length);

$(".picture").css({"background": "url(images/" + pictures[n] +") no-repeat center" });


});