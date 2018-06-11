package com.gng.web.models;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Home
 */
@WebServlet("/Home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private int randomInt = 0;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
        if (request.getAttribute("randomInt") == null) {
        	Random r = new Random();
        	randomInt = r.nextInt(100) + 1;
        	session.setAttribute("randomInt", randomInt);
        } else {
        	Random r = new Random();
        	randomInt = r.nextInt(100) + 1;
        	session.setAttribute("randomInt", randomInt);
        }
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/view/index.jsp");
        view.forward(request, response);
	}

	/**
	 * @return 
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Integer number = Integer.parseInt(request.getParameter("number"));
		HttpSession session = request.getSession();
        String small = "Too Small";
        String big = "Too Large"; 
        String win = "You got it!";
        if(number == (Integer) session.getAttribute("randomInt")) {
        	session.setAttribute("message", win);
        	System.out.println((Integer) session.getAttribute("randomInt"));
		}
		else if(number > (Integer) session.getAttribute("randomInt")) {
			session.setAttribute("message", big);
			System.out.println((Integer) session.getAttribute("randomInt"));
		}
		else if(number < (Integer) session.getAttribute("randomInt")) {
			session.setAttribute("message", small);
			System.out.println((Integer) session.getAttribute("randomInt"));
		}
        RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/view/index.jsp");
		view.forward(request,  response);
	}

}