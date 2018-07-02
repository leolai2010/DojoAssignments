<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Dashboard</title>
	</head>
	<body>
		<h1>Welcome, <c:out value="${user.username}"/></h1>
		<h2>Courses</h2>
		<table>
		  <tr>
		    <th>Course</th>
		    <th>Instructor</th> 
		    <th>Signups</th>
		    <th>Action</th>
		  </tr>
		  <c:forEach items="${allcourse}" var="c">
		  <tr>
		    <td><a href="/show/${c.id}">${c.coursename}</a></td>
		    <td>${c.instructor}</td>
		    <td>${c.classlimit}</td>
		    <td><a href="/join/${c.id}">Add</a></td>
		  </tr>
		  </c:forEach>
		</table>
		<form action="/new">
		<input type="submit" value="Add a Course"/>
		</form>
	</body>
</html>