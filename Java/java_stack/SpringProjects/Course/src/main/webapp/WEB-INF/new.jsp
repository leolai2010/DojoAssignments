<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>New Course</title>
	</head>
	<body>
	<fieldset>
	<h3>Create a Course</h3>
		<p><form:errors path = "course.*"/></p>
		<form:form action="/newcourse" method="POST" modelAttribute="newcourse">
			<p>
				<form:label path="coursename">Name:</form:label>
				<form:errors path="coursename"/>
				<form:input path="coursename"/>
			</p>
	  		<p>
	            <form:label path="instructor">Instructor:</form:label>
	            <form:errors path="instructor"/>
	            <form:input path="instructor"/>
			</p>
	  		<p>
	            <form:label path="classlimit">Limit:</form:label>
	            <form:errors path="classlimit"/>
	            <form:input path="classlimit"/>
			</p>
			<input type="hidden" name="creator" value="${user.username}"/>
			<input type="submit" value="Submit"/>
		</form:form>
	</fieldset>
	</body>
</html>