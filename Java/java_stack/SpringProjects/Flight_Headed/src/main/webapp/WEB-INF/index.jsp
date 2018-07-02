<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Flight Headed</title>
		<!--Import Google Icon Font-->
      	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      	<!--Import materialize.css-->
      	<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      	<link type="text/css" rel="stylesheet" href="css/lognreg.css"/>
      	<link type="text/css" rel="stylesheet" href="css/animate.min.css"/>
	</head>
	<body>
	<div id="webtitle" class="bubbles animated fadeInUp">
		<h1>Flight Headed</h1>
	</div>
	<div class="section"></div>
	<div id="loginbox" class="container animated bounceIn">
	<h4>Login</h4>
	<p></p>
    <p><c:out value="${error}" /></p>
    <form method="POST" action="/login" modelAttribute="user">
		<div class="input-field col s12">
		    <i class="material-icons prefix">account_box</i>
			<input type="text" id="email" name="emaillogin" class="autocomplete">
			<label for="autocomplete-input">E-mail</label>
		</div>
		<div class="input-field col s12">
		    <i class="material-icons prefix">vpn_key</i>
			<input type="password" id="password" name="passwordlogin" class="autocomplete">
			<label for="autocomplete-input">Password</label>
		</div>
        <button class="btn waves-effect waves-light" type="submit" id="logbtn">Login
    	<i class="material-icons right">fingerprint</i></button>
    </form>
    	<p></p>
    	<button id="regbtn" class="btn waves-effect waves-light">Register<i class="material-icons right">create</i></button>  
    </div>
    <div id="registerbox" class="container hidden">
	<h4>Register</h4>
    <p><form:errors path="user.*"/></p>
    <form:form method="POST" action="/registration" modelAttribute="user">
        <p>
            <form:label path="username">Name:</form:label>
            <form:input type="text" path="username" required="required"/>
        </p>
        <p>
            <form:label path="email">Email:</form:label>
            <form:input type="email" path="email" required="required"/>
        </p>
        <p>
            <form:label path="password">Password:</form:label>
            <form:password path="password" minlength="8" required="required" id="reg_password"/>
        </p>
        <p>
            <form:label path="passwordConfirmation">Password Confirmation:</form:label>
            <form:password path="passwordConfirmation" minlength="8" required="required" id="confirm_password"/>
        </p>
        <button id="valid" class="btn waves-effect waves-light" type="submit">Submit
    	<i class="material-icons right">send</i></button>
    	<p class='smallfont'>Already an User? <a href='' id='already'>Click Here</a> to Login</p>
    </form:form>
    </div>
	<!--JavaScript at end of body for optimized loading-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
	<script type="text/javascript" src="js/bubblelogo.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
	</body>
</html>