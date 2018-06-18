<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>New Person</title>
	</head>
	<body>
		<h1>New Person</h1>
		<form:form action="/createp" method="post" modelAttribute="newperson">

			<p>
				<form:label path="firstName">First Name</form:label>
				<form:errors path="firstName"/>
				<form:input path="firstName"/>
			</p>
			<p>
				<form:label path="lastName">Last Name</form:label>
				<form:errors path="lastName"/>
				<form:input path="lastName"/>
			</p>
			<input type="submit" value="Submit"/>
		</form:form>
	</body>
</html>