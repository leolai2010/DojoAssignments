<%@ page isErrorPage ="true" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Edit <c:out value="${courseedit.coursename}"/></title>
	</head>
	<body>
	<fieldset>
	<h3>Edit <c:out value="${courseedit.coursename}"/></h3>
		<p><form:errors path = "course.*"/></p>
		<form:form action="/edit/${courseedit.id}" method="POST" modelAttribute="editcourse">

			<p>
				<form:label path="coursename">Name:</form:label>
				<form:errors path="coursename"/>
				<form:input value="${courseedit.coursename}" path="coursename"/>
			</p>
	  		<p>
	            <form:label path="instructor">Instructor:</form:label>
	            <form:errors path="instructor"/>
	            <form:input value="${courseedit.instructor}" path="instructor"/>
			</p>
	  		<p>
	            <form:label path="classlimit">Limit:</form:label>
	            <form:errors path="classlimit"/>
	            <form:input value="${courseedit.classlimit}" path="classlimit"/>
			</p>
			<input type="submit" value="Submit"/>
		</form:form>
	</fieldset>
	</body>
</html>