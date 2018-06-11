<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Make a Pet!</title>
    </head>
<body>
	<fieldset>
	<h1>Make a Dog!</h1>
	<form action='/Pets/ShowDog' method='get'>
	Name:<input type="text" name="name"><br>
	Breed:<input type="text" name="breed"><br>
	Weight:<input type="text" name="weight"><br>
	<input type="submit" value="Submit">
	</form>
	</fieldset>
	<fieldset>
	<form action='/Pets/ShowCat' method='get'>
	<h1>Make a Cat!</h1>
	Name:<input type="text" name="name"><br>
	Breed:<input type="text" name="breed"><br>
	Weight:<input type="text" name="weight"><br>
	<input type="submit" value="Submit">
	</form>
	</fieldset>
</body>
</html>