<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>New Ninja</title>
	</head>
	<body>
		<h1>New Ninja</h1>
		<form:form action="/createninja" method="post" modelAttribute="newninja">
			<p>Dojo: 
			<form:select path="dojo">
			<c:forEach items="${dojos}" var="dojo">
				<form:option label="${dojo.name}" value="${dojo.id}"></form:option>
			</c:forEach>
			</form:select>
			</p>
			<p>
				<form:label path="firstName">First Name:</form:label>
				<form:errors path="firstName"/>
				<form:input path="firstName"/>
			</p>
			<p>
				<form:label path="lastName">Last Name:</form:label>
				<form:errors path="lastName"/>
				<form:input path="lastName"/>
			</p>
			<p>
				<form:label path="age">Age:</form:label>
				<form:errors path="age"/>
				<form:input path="age"/>
			</p>
			<input type="submit" value="Submit"/>
		</form:form>
	</body>
</html>