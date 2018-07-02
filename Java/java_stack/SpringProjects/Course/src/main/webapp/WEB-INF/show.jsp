<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title><c:out value="${course.coursename}"/></title>
	</head>
	<body>
		<h1><c:out value="${course.coursename}"/></h1>
		<p>Instructor: ${course.instructor}</p>
		<p>Sign Ups:<c:out value="${people}"/></p>
		<table>
		  <tr>
		    <th>Name</th>
		    <th>Sign Up Date</th>
		    <th>Action</th>
		  </tr>
		  <c:forEach items="${course.users}" var="u">
		  <tr>
		    <td><c:out value="${u.username}"/></td>
		    <td><fmt:formatDate value="${date}" pattern="yyyy-MM-dd" /></td> 
		    <td>
		    <c:choose>
		    	<c:when test = "${user.username.equals(u.username)}">
		    	<a href="/cancel/${course.id}">Remove</a>
		    	</c:when>
		    </c:choose>
		    </td>
		  </tr>
		  </c:forEach>
		</table>
		<c:choose>
		<c:when test = "${user.username.equals(course.creator)}">
		<form action="/edit/${course.id}">
		<input type="submit" value="Edit"/>
		</form>
		<form action="/delete/${course.id}">
		<input type="submit" value="Delete"/>
		</form>
		</c:when>
		</c:choose>
		<a href="/dashboard">Return</a>
	</body>
</html>