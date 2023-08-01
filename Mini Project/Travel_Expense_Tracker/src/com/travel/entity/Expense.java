package com.travel.entity;

import java.sql.Date;
import java.sql.Time;

public class Expense {
	private String expenseSource;
	private long expenseAmount;
	private Date expenseDate;
	private Time expenseTime;
	private int categoryId;
	
	public String getExpenseSource() {
		return expenseSource;
	}
	public void setExpenseSource(String expenseSource) {
		this.expenseSource = expenseSource;
	}
	public long getExpenseAmount() {
		return expenseAmount;
	}
	public void setExpenseAmount(long expenseAmount) {
		this.expenseAmount = expenseAmount;
	}
	public Date getExpenseDate() {
		return expenseDate;
	}
	public void setExpenseDate(Date expenseDate) {
		this.expenseDate = expenseDate;
	}
	public Time getExpenseTime() {
		return expenseTime;
	}
	public void setExpenseTime(Time expenseTime) {
		this.expenseTime = expenseTime;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
}
