<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Create Team</title>
    </head>
<body>
	<fieldset>
	<h1>Create a New Team</h1>
	<form action='/Team_Roster/Teams' method='post'>
	Name:<input type="text" name="name">
	<input style="margin: 5px" type="submit" value="Submit">
	</form>
	</fieldset>
</body>
</html>