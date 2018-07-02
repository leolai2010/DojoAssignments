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
		<form:form action="/createlicense" method="post" modelAttribute="newlicense">
			<p>
			Person: 
			<form:select path="person">
			<c:forEach items="${people}" var="person">
				<form:option label="${person.firstName}" value="${person.id}"></form:option>
			</c:forEach>
			</form:select>
			</p>
			<p>
				<form:label path="state">State</form:label>
				<form:errors path="state"/>
				<form:input path="state"/>
			</p>
			Expiration Date: <input type="date" name="expdate">
			<input type="submit" value="Submit"/>
		</form:form>
	</body>
</html>