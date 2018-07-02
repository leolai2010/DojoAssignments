<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>About</title>
		<!--Import Google Icon Font-->
      	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      	<!--Import materialize.css-->
      	<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      	<link type="text/css" rel="stylesheet" href="css/animate.min.css"/>
      	<link type="text/css" rel="stylesheet" href="css/about.css"/>
	</head>
	<body>
		<nav class="teal lighten-2">
	    <div class="nav-wrapper">
	      <a href="/dashboard" class="brand-logo">&nbsp&nbspFlight Headed</a>
	      <ul id="nav-mobile" class="right hide-on-med-and-down">
	        <li><a href="/dashboard">Home</a></li>
	        <li><a href="/calculator">Calculator</a></li>
	        <li><a href="/application">Application</a></li>
	        <li class="active"><a href="/about">About</a></li>
	        <li><a href="/logout">Logout</a></li>
	      </ul>
	    </div>
  		</nav>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  	<script type="text/javascript" src="js/about.js"></script>
  	<script type="text/javascript" src="js/materialize.min.js"></script>
	</body>
</html>