import {createSlice}  from '@reduxjs/toolkit'

export const userSlice=createSlice({
    name: "user",
    initialState: {
        value:{
            username:"username",
            password:""
        }
    },
    reducers:{
        login:(state, action)=>{
            state.value=action.payload
        },
        logout:(state,action)=>{
            state.value={username:"",password:""}
        }
    }
});
export const {login,logout} = userSlice.actions;
export default userSlice.reducer;