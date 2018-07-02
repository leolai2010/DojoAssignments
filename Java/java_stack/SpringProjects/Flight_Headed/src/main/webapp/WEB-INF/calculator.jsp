<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Blood Alcohol Content Calculator</title>
		<!--Import Google Icon Font-->
      	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      	<!--Import materialize.css-->
      	<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      	<link type="text/css" rel="stylesheet" href="css/animate.min.css"/>
      	<link type="text/css" rel="stylesheet" href="css/calculator.css"/>
	</head>
	<body>
		<nav class="teal lighten-2">
	    <div class="nav-wrapper">
	      <a href="/dashboard" class="brand-logo">&nbsp&nbspFlight Headed</a>
	      <ul id="nav-mobile" class="right hide-on-med-and-down">
	        <li><a href="/dashboard">Home</a></li>
	        <li class="active"><a href="/calculator">Calculator</a></li>
	        <li><a href="/application">Application</a></li>
	        <li><a href="/about">About</a></li>
	        <li><a href="/logout">Logout</a></li>
	      </ul>
	    </div>
  		</nav>
  		<div class="container animated fadeInUp">
  		<div class="drinktable">
  		<table>
	        <thead>
	          <tr>
	              <th>Drink Type</th>
	              <th>Percent Alcohol</th>
	              <th>Total Servings</th>
	              <th>Action<th>
	          </tr>
	        </thead>
	        <tbody>
	        <c:forEach items="${alcohol}" var="a">
	          <tr>
	            <td>${a.type}</td>
	            <td>${a.percentAlcohol}%</td>
	            <td>${a.servings} oz</td>
	            <!-- Modal Trigger -->
	            <td><a class="waves-effect waves-light btn modal-trigger" href="#modal/${a.id}">Edit</a></td>
	            <!-- Modal Trigger -->
	            <td><a href="/delete/${a.id}">Delete</a></td>
	          </tr>
	          <!-- Modal Structure -->
			  <div id="modal/${a.id}" class="modal">
			    <div class="modal-content">
			      <h4>Edit Drink</h4>
			      <form:form action="/edit/${a.id}" method="POST" modelAttribute="updatealcohol">
				    <input type="hidden" name="_method" value="put">
				    <p>
						<form:label path="type">Drink Type:</form:label>
						<form:input value="${a.type}" path="type" required="required"/>
					</p>
				    <p class="range-field">
				        <form:label path="percentAlcohol">Percent Alcohol: (%)</form:label>
				        <form:input path="percentAlcohol" type="range" id="percent" min="1" max="100" />
				    </p>
				    <p class="range-field">
				        <form:label path="servings">Total Servings: (Oz) </form:label>
				        <form:input path="servings" type="range" id="serving" min="1" max="100" />
				    </p>
				<input type="hidden" name="user" value="${user.id}"/>
				<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
			    <button class="btn waves-effect waves-light" type="submit">
				<i class="material-icons right">local_bar</i>Edit Alcohol</button>
				</form:form>
			    </div>
			  </div>
	  		<!-- Modal Structure -->
	        </c:forEach>
	        </tbody>
      	</table>
  		</div>
  		<div class="alcoholinfo">
  		<p><form:errors path = "alcohol.*"/></p>
		<form:form action="/createalcohol" method="POST" modelAttribute="createalcohol">
		    <p>
		    	<form:label path="type">Drink Type:</form:label>
				<form:input path="type" required="required"/>
		    </p>
		    <p></p>
		    <p class="range-field">
		        <form:label path="percentAlcohol">Percent Alcohol: (%)</form:label>
		        <form:input path="percentAlcohol" type="range" id="percent" min="1" max="100" />
		    </p>
		    <p class="range-field">
		        <form:label path="servings">Total Servings: (Oz) </form:label>
		        <form:input path="servings" type="range" id="serving" min="1" max="100" />
		    </p>
		<input type="hidden" name="user" value="${user.id}"/>
		<button class="btn waves-effect waves-light" type="submit">
		<i class="material-icons right">local_bar</i>Add Alcohol</button>
		</form:form>
  		</div>
  		<div class="personinfo">
  		<form action="/calbac" method="POST">
		    <p class="range-field">
		        <label>Body weight: (lbs)</label>
		        <input type="range" value="150" name="weight" min="100" max="500" />
		    </p>
		    <p>
		        <label>Gender: </label>
				<label>
					<input type="radio" value="0.73" class="with-gap" name="human" checked/>
				    <span>Man</span>
				</label>
				<label>
					<input type="radio" value="0.66" class="with-gap" name="human"/>
				    <span>Woman</span>
				</label>
		    </p>
		    <p>
		        <label>Metablic Rate:</label>
		        <select name="metarate">
		            <option value="0.01">Slow</option>
		            <option value="0.015" selected>Moderate</option>
		            <option value="0.025">Rapid</option>
		            <option value="0.035">Ultra Rapid</option>
		        </select>
		    </p>
		        <label>Hours since the last drink: </label>
		        <input value="5" name="hours" type="number" min="0">
		    <p>
		 	<button class="btn waves-effect waves-light" type="submit">
			<i class="material-icons right">local_hospital</i>Update</button>
		</form>
  		</div>
  		<div class="resultbox">
  			<h5>Estimated Blood Alcohol Concentration:</h5>
  			<h2><fmt:formatNumber value="${userbacinfo}" pattern="##.###" />%</h2>
  			<h4>BAC Chart Values</h4>
  			<table>
	        <tbody>
	        <tr>
	        	<td>0.00 – 0.03%	Normal behavior, no impairment</td>
	        	<td>0.03 – 0.06%	Mild euphoria and impairment; decreased inhibitions</td>
	        	<td>0.06 – 0.10%	Buzzed, euphoric, increased impairment</td>
	        	<td>0.10 – 0.20%	Drunk, emotional swings, slurred speech, nausea, loss of reaction time and motor control</td>
	        	<td>0.20 – 0.30%	Confused, nauseated, poor mentation, blackout</td>
	        	<td>0.30 – 0.40%	Possibly unconscious, unarrousable, loss of bladder function, risk of death</td>
	        	<td>Above 0.40%	Unconscious, coma, impaired breathing, risk of death</td>
	        </tr>
	        </tbody>
  			</table>
  		</div>
  	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  	<script type="text/javascript" src="js/calculator.js"></script>
  	<script type="text/javascript" src="js/materialize.min.js"></script>
	</body>
</html>