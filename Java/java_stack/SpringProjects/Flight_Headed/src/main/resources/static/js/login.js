var password = document.getElementById("reg_password")
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
	console.log("Firing")
	if(password.value != confirm_password.value) {
	  confirm_password.setCustomValidity("Passwords Don't Match");
	} else {
	  confirm_password.setCustomValidity('');
	}
}

$(document).ready(function () {
    $('#regbtn').click(function(){
        $('#loginbox').fadeOut();
        $('#registerbox').delay(700).fadeIn()
    });
    $('#already').click(function(e){
        e.preventDefault();
        $('#loginbox').removeClass('animate bounceInUp').fadeIn();
        $('#registerbox').hide()
    });
    $('#valid').click(function(){
    	validatePassword()
    });
});
