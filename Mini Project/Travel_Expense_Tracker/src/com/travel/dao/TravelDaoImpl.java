package com.travel.dao;
import java.sql.*;

import com.travel.entity.Expense;
import com.travel.utility.DBUtil;

public class TravelDaoImpl implements TravelDao {
	@Override
	public int addTravel(String tripname, long tripBudget, int userId){
		try {
			Connection con=DBUtil.provideConnection();
			String query="insert into travel (travel_name, travel_budget, user_id) value(?,?,?);";
			PreparedStatement st=con.prepareStatement(query);
			st.setString(1, tripname);
			st.setLong(2,tripBudget);
			st.setInt(3, userId);
			int rs=st.executeUpdate();
			return getTravelIdByName(tripname);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
	
	
	
	@Override
	public void getTravels(int userId) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="select travel_name from travel where user_id=?";
			PreparedStatement st=con.prepareStatement(query);
			st.setInt(1, userId);
			ResultSet rs=st.executeQuery();
			
			while(rs.next()) {
				System.out.println(rs.getString(1));
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public int getTravelIdByName(String tripname) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="select travel_id from travel where travel_name=?";
			PreparedStatement st=con.prepareStatement(query);
			st.setString(1, tripname);
			ResultSet rs=st.executeQuery();
			if(rs.next()) {
				return rs.getInt(1);			
			}
			return -1;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
	
	@Override
	public void getCategoriesByTravelId(int travelId) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="select distinct category_name from category where travel_id=?";
			PreparedStatement st=con.prepareStatement(query);
			st.setInt(1, travelId);
			ResultSet rs=st.executeQuery();
			while(rs.next()) {
				System.out.println(rs.getString(1));
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public int addCategory(String categoryName, int travelId) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="insert into category (category_name, travel_id) value(?,?);";
			PreparedStatement st=con.prepareStatement(query);
			st.setString(1, categoryName);
			st.setInt(2, travelId);
			int rs=st.executeUpdate();
			return getCategoryIdByCategoryName(categoryName, travelId);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
	
	@Override
	public int getCategoryIdByCategoryName(String categoryName, int travelId) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="select category_id from category where category_name=? and travel_id=?";
			PreparedStatement st=con.prepareStatement(query);
			st.setString(1, categoryName);
			st.setInt(2, travelId);
			ResultSet rs=st.executeQuery();
			if(rs.next())
				return rs.getInt(1);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}

	@Override
	public void addExpense(Expense expense) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="insert into expense (expense_source, expense_amount, expense_date, expense_time, category_id) value (?,?,?,?,?) ;";
			PreparedStatement st=con.prepareStatement(query);
			st.setString(1, expense.getExpenseSource());
			st.setLong(2, expense.getExpenseAmount());
			st.setDate(3, expense.getExpenseDate());
			st.setTime(4, expense.getExpenseTime());
			st.setInt(5, expense.getCategoryId());
			int rs=st.executeUpdate();
			String query2="update travel set travel_amount_left=travel_amount_left-? where travel_id in (select travel_id from category where category_id=?)";
			PreparedStatement st2=con.prepareStatement(query2);
			st2.setLong(1, expense.getExpenseAmount());
			st2.setInt(2,expense.getCategoryId());
			System.out.println(st2.executeUpdate());
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void getBalanceData(int travelId) {
		try {
			Connection con=DBUtil.provideConnection();
			String query1="select travel_budget from travel where travel_id=?";
			PreparedStatement st1=con.prepareStatement(query1);
			st1.setInt(1, travelId);
			ResultSet rs1=st1.executeQuery();
			rs1.next();
			long total=rs1.getLong(1);
			System.out.println("================================================================================================");
			System.out.println("Total Budget Amount : "+total+"/-");
			System.out.println("================================================================================================");
			
			
			String query2="select sum(expense_amount) from expense e join category c on e.category_id=c.category_id where travel_id=?;";
			PreparedStatement st2=con.prepareStatement(query2);
			st2.setInt(1, travelId);
			ResultSet rs2=st2.executeQuery();
			rs2.next();
			long spent=rs2.getLong(1);
			System.out.println("================================================================================================");
			System.out.println("Amount spent : "+spent+"/-");
			System.out.println("================================================================================================");

			System.out.println("================================================================================================");
			System.out.println("Balance Amount : "+(total-spent)+"/-");
			System.out.println("================================================================================================");
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void getReport(int travelId) {
		try {
			getBalanceData(travelId);
			Connection con=DBUtil.provideConnection();
			String query="select * from expense e join category c on e.category_id=c.category_id where travel_id=? order by c.category_id ;";
			PreparedStatement st=con.prepareStatement(query);
			
			String query2="select category_name, sum(expense_amount) as total, concat(sum(expense_amount)/(select travel_budget from travel where travel_id=?)*100,\"%\") as percentage \r\n"
					+ "from expense e join category c on e.category_id=c.category_id \r\n"
					+ "where travel_id=?\r\n"
					+ "group by category_name \r\n"
					+ "having category_name=?;";
			PreparedStatement st2=con.prepareStatement(query2);
			st.setInt(1, travelId);
			ResultSet rs=st.executeQuery();
			String currentSubt="";
			while(rs.next()) {
				String categoryName=rs.getString("category_name");
				String expenseSource=rs.getString("expense_source");
				String expenseDate=rs.getString("expense_date");
				String expenseTime=rs.getString("expense_time");
				long expenseAmount=rs.getLong("expense_amount");
				
				if(!categoryName.equals(currentSubt)) {
					System.out.println();
					System.out.println();
					System.out.println("================================================================================================");
					st2.setInt(1, travelId);
					st2.setInt(2, travelId);
					st2.setString(3, categoryName);
					ResultSet rs2=st2.executeQuery();
					rs2.next();
					System.out.println(categoryName+":       "+"Total:    "+rs2.getLong(2)+"/-"+"    Percentage:     "+rs2.getString(3));
					System.out.println("================================================================================================");
					currentSubt=categoryName;
				}
				System.out.println(expenseSource+"\t"+expenseAmount+"/- "+"\t"+expenseDate+"\t"+expenseTime);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void getReport(int travelId, String categoryName) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="select * from expense e join category c on e.category_id=c.category_id where travel_id=? and category_name=? order by c.category_id ;";
			PreparedStatement st=con.prepareStatement(query);
			
			String query2="select category_name, sum(expense_amount) as total, concat(sum(expense_amount)/(select travel_budget from travel where travel_id=?)*100,\"%\") as percentage \r\n"
					+ "from expense e join category c on e.category_id=c.category_id \r\n"
					+ "where travel_id=?\r\n"
					+ "group by category_name \r\n"
					+ "having category_name=?;";
			PreparedStatement st2=con.prepareStatement(query2);
			st.setInt(1, travelId);
			st.setString(2, categoryName);
			ResultSet rs=st.executeQuery();
			String currentSubt="";
			while(rs.next()) {
				String expenseSource=rs.getString("expense_source");
				String expenseDate=rs.getString("expense_date");
				String expenseTime=rs.getString("expense_time");
				long expenseAmount=rs.getLong("expense_amount");
				
				if(!categoryName.equals(currentSubt)) {
					System.out.println();
					System.out.println();
					System.out.println("================================================================================================");
					st2.setInt(1, travelId);
					st2.setInt(2, travelId);
					st2.setString(3, categoryName);
					ResultSet rs2=st2.executeQuery();
					rs2.next();
					System.out.println(categoryName+":       "+"Total:    "+rs2.getLong(2)+"/-"+"    Percentage:     "+rs2.getString(3));
					System.out.println("================================================================================================");
					currentSubt=categoryName;
				}
				System.out.println(expenseSource+"\t"+expenseAmount+"/- "+"\t"+expenseDate+"\t"+expenseTime);
				System.out.println("================================================================================================");

			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
