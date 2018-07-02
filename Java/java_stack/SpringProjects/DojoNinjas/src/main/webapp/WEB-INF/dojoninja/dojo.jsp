<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>New Dojo</title>
	</head>
	<body>
	<h1>New Dojo</h1>
	<form:form action="/createdojo" method="post" modelAttribute="newdojo">
		<p>New Dojo
			<form:label path="name">Name:</form:label>
			<form:errors path="name"/>
			<form:input path="name"/>
		</p>
		<input type="submit" value="Submit"/>
	</form:form>
	</body>
</html>