package com.travel.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.travel.utility.DBUtil;

public class UserDaoImpl extends UserDao {
	
	@Override
	public int userLogin(String username) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="select user_id from user where username=?";
			PreparedStatement st=con.prepareStatement(query);
			st.setString(1, username);
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
	public int userSignup(String username) {
		try {
			Connection con=DBUtil.provideConnection();
			String query="insert into user (username) value (?)";
			PreparedStatement st=con.prepareStatement(query);
			st.setString(1, username);
			int rs=st.executeUpdate();
			
			return rs;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
}
