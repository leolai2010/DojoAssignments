<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Great Number Game</title>
    <link rel="stylesheet" type="text/css" media="screen" href="static/main.css" />
    <style>
    h1{
    text-align: center;

	}
	p{
	    text-align: center;
	    position: relative;
	}
	#overbox{
	    display: inline-block;
	    text-align: center;
	    position: absolute;
	    left: 45%;
	}
	#box{
	    display: inline-block;
	}
    </style>
</head>
<body>
    <h1>Welcome to the Great Number Game!</h1>
    <p>I am thinking of a number between 1 an 100 </p>
    <p>Take a Guess!</p>
    <div id = "overbox">
    <div id = "box"></div>
    <form action="/Great_Number_Game/Home" method='post'>
        <input type="text" id="Number" name="number">
        <input type="submit" value="Submit">
    </form>
        <p><c:out value="${message}"/></p>
    </div>
</body>
</html>