<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <title>Checkerboard</title>
	<link rel="stylesheet" type="text/css" media="screen" href="Checkerboard.css" />
</head>
<body>
    <h1>Checkerboard</h1>
<table>
	<% Integer drawwidth = Integer.parseInt(request.getParameter("width")); %>
	<% Integer drawheight = Integer.parseInt(request.getParameter("height")); %>
    <% for(int x = 0; x < drawwidth; x++) { %>
    <tr>
        <% for(int y = 0; y < drawheight; y++) { %>
        	<% if((x + y) % 2 == 0) { %>
        		<td class="color1"></td>
        	<% } else { %>
        		<td class="color2"></td>
        		<% } %>
        <% } %>
    </tr>
    <% } %>
</table>
</body>
</html>