package com.travel.dao;

public abstract class UserDao {
	public abstract int userLogin(String username);
	public abstract int userSignup(String username);
}
