package com.userinfo.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class User_Info
 */
@WebServlet("/User_Info")
public class User_Info extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public User_Info() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userFName = request.getParameter("firstName");
		String userLName = request.getParameter("lastName");
		String favLang = request.getParameter("favoriteLanguage");
		String home = request.getParameter("homeTown");
		if(home == null || userFName == null || userLName == null || favLang == null) {
			home = "Unknown";
			userFName = "Unknown";
			userLName = "Unknown";
			favLang = "Unknown";
		}
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.write("<h1>Welcome, " +userFName+" "+userLName+ "<h1>");
		out.write("<h2>Your favorite lanauage is: " +favLang+ "<h2>");
		out.write("<h2>Your hometown is: " +home+ "<h2>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
