package com.travel.runner;

import java.sql.Date;
import java.sql.Time;
import java.util.Scanner;

import com.travel.dao.TravelDao;
import com.travel.dao.TravelDaoImpl;
import com.travel.dao.UserDao;
import com.travel.dao.UserDaoImpl;
import com.travel.entity.Expense;

public class Main {
	public static void main(String args[]) {
		Scanner s=new Scanner(System.in);
		outer:
		while(true) {
			System.out.println("");
			System.out.println("========================");
			System.out.println("Travel Expense Tracker");
			System.out.println("========================");
			System.out.println("");
			
			System.out.println();
			System.out.println("1. New user");
			System.out.println("2. Existing user");
			System.out.println("3. Exit");
			System.out.println();
			
			System.out.println("Enter your choice:");
			TravelDao dao=new TravelDaoImpl();
			UserDao user=new UserDaoImpl();
			int choice = s.nextInt();
			s.nextLine();
			int userId=-1; //Contains the user ID
			if(choice==3) {
				System.out.println();
				System.out.println("*** Exiting ***");
				break outer;
			}
			else if(choice==1) {
				System.out.println();
				System.out.println("Enter username: ");
				String username = s.nextLine();
				user.userSignup(username);
				userId=user.userLogin(username);
				
			}
			else if(choice==2) {
				System.out.println();
				System.out.println("Enter your username: ");
				String username=s.nextLine();
				userId=user.userLogin(username);
				if(userId==-1) {
					System.out.println("You are not a registered user. Please select new user");
					continue;
				}
			}
			else {
				System.out.println("Wrong choice entered");
				break;
			}
			
			//second while loop for travel
			int travelId=-1;
			travel_loop:
			while(true) {
				
			System.out.println("=======================================================================================");
			System.out.println();
			System.out.println("1. Create new trip");
			System.out.println("2. Work on existing trip");
			System.out.println("3. Go back");
			System.out.println();
			
			System.out.println("Enter your choice:");
			int tripChoice=s.nextInt();
			s.nextLine();
			if(tripChoice==3) {
				break travel_loop;
			}
			else if(tripChoice==1) {
				System.out.println();
				System.out.println("Enter the name for your new trip:");
				String tripname=s.nextLine();
				System.out.println();
				System.out.println("Enter the budget for your new trip:");
				long budget=s.nextLong();
				s.nextLine();
				travelId=dao.addTravel(tripname, budget, userId);
			}
			else if(tripChoice==2) {
				System.out.println();
				dao.getTravels(userId);
				System.out.println();
				System.out.println("Select a trip");
				String tripname=s.nextLine();
				travelId=dao.getTravelIdByName(tripname);
				
			}
			
			//third while loop for category
			int categoryId=-1;
			category_loop:
			while(true) {
			System.out.println("=======================================================================================");
			System.out.println();
			System.out.println("1. Create new category");
			System.out.println("2. Use an existing category");
			System.out.println("3. Get report");
			System.out.println("4. Get report of specific category");
			System.out.println("5. Go back");
			System.out.println();
			
					System.out.println("Enter your choice:");
					int categoryChoice=s.nextInt();
					s.nextLine();
					if(categoryChoice==5)
						break category_loop;
					else if (categoryChoice==1) {
						System.out.println("Enter the category name");
						String categoryName=s.nextLine();
						categoryId=dao.addCategory(categoryName, travelId);
						
					}
					else if (categoryChoice==2) {
						dao.getCategoriesByTravelId(travelId);
						System.out.println();
						System.out.println("Select a category name");
						String categoryName=s.nextLine();
						categoryId=dao.getCategoryIdByCategoryName(categoryName, travelId);
					}
					else if (categoryChoice==3) {
						dao.getReport(travelId);
						System.out.println();
						System.out.println();
						System.out.println("Press Enter to go back");
						s.nextLine();
						continue category_loop;
					}
					else if (categoryChoice==4) {
						System.out.println();
						dao.getCategoriesByTravelId(travelId);
						System.out.println();
						System.out.println("Select a category name");
						String categoryName=s.nextLine();
						dao.getReport(travelId, categoryName);
						System.out.println();
						System.out.println();
						System.out.println("Press Enter to go back");
						s.nextLine();
						continue category_loop;
					}
				
//				System.out.println("Category id :"+categoryId);
				if(categoryId==-1) {
					continue category_loop;
				}
			
				//Adding expense
				Expense expense=new Expense();
				System.out.println();
				System.out.println("=======================================================================================");
				System.out.println();
				System.out.println("Enter the amount spent under the selected category:");
				expense.setExpenseAmount(s.nextLong());
				s.nextLine();
				System.out.println("Enter the date on when the amount was spent:");
				expense.setExpenseDate(Date.valueOf(s.nextLine()));
				System.out.println("Enter the time at when the amount was spent:");
				expense.setExpenseTime(Time.valueOf(s.nextLine()));
				System.out.println("Add a note:");
				expense.setExpenseSource(s.nextLine());
				expense.setCategoryId(categoryId);
				dao.addExpense(expense);
			
				}
			}//end of category loop
		}//end of travel loop
			
	}
}
