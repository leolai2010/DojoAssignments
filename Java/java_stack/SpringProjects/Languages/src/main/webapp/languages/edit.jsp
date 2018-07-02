<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Edit Language</title>
	</head>
	<body>
	<h1>Edit Language</h1>
	<h4><a href="/languages">Return</a></h4>
	<form:form action="/languages/${language.id}" method="post" modelAttribute="editlang">
	    <input type="hidden" name="_method" value="put">
  			<p>
		        <form:label path="name">Name</form:label>
		        <form:errors path="name"/>
		        <form:input path="name"/>
		    </p>
		    <p>
		        <form:label path="creator">Creator</form:label>
		        <form:errors path="creator"/>
		        <form:textarea path="creator"/>
		    </p>
		    <p>
		        <form:label path="version">Version</form:label>
		        <form:errors path="version"/>
		        <form:input type="number" path="version"/>
		    </p>   
	    <input type="submit" value="Submit"/>
	</form:form>
	</body>
</html>