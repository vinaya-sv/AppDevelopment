package com.travel.dao;

import com.travel.entity.Expense;

public interface TravelDao {
	public void getTravels(int userId);
	public int getTravelIdByName(String tripname);
	int addTravel(String tripname, long tripBudget, int userId);
	public void getCategoriesByTravelId(int travelId);
	public int addCategory(String categoryName, int travelId);
	public int getCategoryIdByCategoryName(String categoryName, int travelId);
	public void addExpense(Expense expense);
	public void getReport(int travelId);
	public void getReport(int travelId, String categoryName);
}
