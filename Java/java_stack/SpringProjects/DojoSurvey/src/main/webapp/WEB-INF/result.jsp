<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Submitted Info</title>
<style>
* {
    box-sizing: border-box;
}
h2{
    text-align: center;
    position: relative;
}

input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid silver;
    border-radius: 4px;
    resize: vertical;
}

label {
    padding: 12px 12px 12px 0;
    display: inline-block;
}

input[type=submit] {
    background-color:blue;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
}

input[type=submit]:hover {
    background-color: darkblue;
}

.container {
    width: 35%;
    height: 45%;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    position: absolute;
    left: 630px;
}

.col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
}

.col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
        width: 100%;
        margin-top: 0;
    }
}
</style>
</head>
<body>
    <h2>Dojo Survey</h2>
    <div class="container">
        <h3>Submitted Info</h3>
        <table>
            <tr><td>Name: <c:out value = "${name}"/></td></tr>
            <tr><td>Dojo Location: <c:out value = "${country}"/></td></tr>
            <tr><td>Favorite Language: <c:out value = "${language}"/></td></tr>
            <tr><td>Comment: <c:out value = "${comment}"/></td></tr>
        </table>
        <div class="row">
                <a href="/"><input type="submit" value="Go Back"></a>
        </div>
    </div>
</body>
</html>