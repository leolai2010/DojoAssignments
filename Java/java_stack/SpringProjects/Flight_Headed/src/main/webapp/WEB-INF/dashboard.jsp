<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Flight Headed Dashboard</title>
		<!--Import Google Icon Font-->
      	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      	<!--Import materialize.css-->
      	<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      	<link type="text/css" rel="stylesheet" href="css/animate.min.css"/>
      	<link type="text/css" rel="stylesheet" href="css/dashboard.css"/>
      	<link type="text/css" rel="stylesheet" href="css/aos.css"/>
	</head>
	<body>
		<nav class="start animated fadeInDown teal lighten-2">
	    <div class="nav-wrapper">
	      <a href="/dashboard" class="brand-logo">&nbsp&nbspFlight Headed</a>
	      <ul id="nav-mobile" class="right hide-on-med-and-down">
	        <li class="active"><a href="#">Home</a></li>
	        <li><a href="/calculator">Calculator</a></li>
	        <li><a href="/application">Application</a></li>
	        <li><a href="/about">About</a></li>
	        <li><a href="/logout">Logout</a></li>
	      </ul>
	    </div>
  		</nav>
  	<div class="container">
  		<div class="textcenter start animated zoomIn">
  		<h1 class="blue-text text-darken-3">Welcome, <c:out value="${user.username}"/>!</h1>
 		  <div class="row">
		    <div class="col s12">
		      <div class="card">
		        <div class="card-image">
		          <img src="images/BeerFlight.jpg">
		          <span class="card-title">What is Flight Headed?</span>
		        </div>
		        <div class="card-content">
		          <p>Our name is a play on word of "Beer Flights" and the feeling of "Light headedness" 
		          from being under the influence of alcohol. Flight Headed is an Educational website 
		          for Alcohol Toxicology where we calculate the outcome of Blood Alcohol Concentration 
		          and explore Future techology examining tools focusing on Eye Nystagmus</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
  		<div class="textcenter start animated zoomIn">
		<h4 class="indigo-text text-lighten-1">Scroll Down for More Information</h4>
		<img class="animated bounce infinite " style='width: 5%;' src="images/downarrow.png">
		</div>
		<div data-aos="fade-right" class="info1">
		  <div class="row">
		    <div class="col s12 m7">
		      <div class="card">
		        <div class="card-image">
		          <img src="images/ForensicTech.png">
		        </div>
		        <div class="card-content">
		          <p>I am a very simple card. I am good at containing small bits of information.
		          I am convenient because I require little markup to use effectively.</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		<div data-aos="fade-left" class="info2">
		  <div class="row">
		    <div class="col s12 m7">
		      <div class="card">
		        <div class="card-image">
		          <img src="images/Intoximeter.png">
		        </div>
		        <div class="card-content">
		          <p>I am a very simple card. I am good at containing small bits of information.
		          I am convenient because I require little markup to use effectively.</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		<div data-aos="fade-right" class="info3">
		  <div class="row">
		    <div class="col s12 m7">
		      <div class="card">
		        <div class="card-image">
		          <img src="images/DigestiveProcess.jpg">
		          <span class="card-title grey-text text-darken-5">Alcohol Absorption</span>
		        </div>
		        <div class="card-content">
		          <p>I am a very simple card. I am good at containing small bits of information.
		          I am convenient because I require little markup to use effectively.</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		<div data-aos="fade-left" class="info4">
		  <div class="row">
		    <div class="col s12 m7">
		      <div class="card">
		        <div class="card-image">
		          <img src="images/Distribution.png">
		        </div>
		        <div class="card-content">
		          <p>I am a very simple card. I am good at containing small bits of information.
		          I am convenient because I require little markup to use effectively.</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		<div data-aos="fade-right" class="info5">
		  <div class="row">
		    <div class="col s12 m7">
		      <div class="card">
		        <div class="card-image">
		          <img src="images/Elimination.png">
		        </div>
		        <div class="card-content">
		          <p>I am a very simple card. I am good at containing small bits of information.
		          I am convenient because I require little markup to use effectively.</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
	</div>
  	<!--JavaScript at end of body for optimized loading-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  	<script type="text/javascript" src="js/aos.js"></script>
  	<script type="text/javascript" src="js/dashboard.js"></script>
  	<script type="text/javascript" src="js/materialize.min.js"></script>
  	<script>AOS.init();</script>
	</body>
</html>