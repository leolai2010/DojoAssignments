<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Country Tester</title>
	</head>
	<body>
	<h1>#1</h1>
	<c:forEach var = "row1" items="${slovene}">
	<p>Country: ${row1[0]}</p>
	<p>Language: ${row1[1]}</p>
	<p>Percentage: ${row1[2]}</p>
	</c:forEach>
	<h1>#2</h1>
	<c:forEach var = "row2" items="${city}">
	<p>Name: ${row2[0]}</p>
	<p>Number of Cities: ${row2[1]}</p>
	</c:forEach>
	<h1>#3</h1>
	<c:forEach var = "row3" items="${mexico}">
	<p>Name: ${row3[1]}</p>
	<p>Population: ${row3[0]}</p>
	</c:forEach>
	<h1>#4</h1>
	<c:forEach var = "row4" items="${langpop}">
	<p>Country: ${row4[0]}</p>
	<p>Language: ${row4[1]}</p>
	<p>Percentage: ${row4[2]}</p>
	</c:forEach>
	<h1>#5</h1>
	<c:forEach var = "row5" items="${SnP}">
	<p>Country: ${row5[0]}</p>
	<p>Surface Area: ${row5[1]}</p>
	<p>Population: ${row5[2]}</p>
	</c:forEach>
	<h1>#6</h1>
	<c:forEach var = "row6" items="${gcl}">
	<p>Country: ${row6[0]}</p>
	<p>Government Form: ${row6[1]}</p>
	<p>Life Expectancy: ${row6[2]}</p>
	</c:forEach>
	</body>
	<h1>#7</h1>
	<c:forEach var = "row7" items="${cdp}">
	<p>Country: ${row7[0]}</p>
	<p>City: ${row7[1]}</p>
	<p>District: ${row7[2]}</p>
	<p>Population: ${row7[3]}</p>
	</c:forEach>
	<h1>#8</h1>
	<c:forEach var = "row8" items="${rcc}">
	<p>Name: ${row8[0]}</p>
	<p>Population: ${row8[1]}</p>
	</c:forEach>
	</body>
</html>