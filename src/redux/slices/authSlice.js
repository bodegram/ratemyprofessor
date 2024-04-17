import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
        dispatch(loginRequest())
        const {data} = await api.post('/auth', payload)
        if(data.status === 200){
          //console.log('user logged in');
           dispatch(loginSuccess({token:data.data.accessToken, email:data.data.email, username: data.data.username}))          
        }
        else{
          //console.log('error logging in', data.message);
            dispatch(loginFail(data.message))
        }

       

    } catch (error) {
      return rejectWithValue("An error occurred");
    }
  }
);

export const registerAsync = createAsyncThunk('auth/registerAsync', async(payload, {dispatch, rejectWithValue})=>{
  try{
     dispatch(registerRequest())
  }
  catch(error){
    return rejectWithValue("An error occurred");
  }
})

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: false,
  errorMessage: null,
  token: null,
  email: null,
  username: null,
  isRegistered: false

  
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true
      state.loading = false
      state.token = action.payload.token
      state.email = action.payload.email
      state.username = action.payload.username
    },
    loginFail: (state, action)=>{
        state.error = true
        state.errorMessage = action.payload
        state.loading = false
       
    },
    logout: (state)=>{
       state.isAuthenticated = false
       state.email = null
       state.username = null
    },
    clearLog: (state)=>{
      state.error = false
      state.errorMessage = null
      state.loading = false
      state.isRegistered = false
    },
    registerRequest: (state)=>{
      state.loading = true
    },
    registerFail: (state, action)=>{
      state.error = true
      state.errorMessage = action.payload
      state.loading = false
    },
    registerSuccess: (state)=>{

    }
  },
});

export const {
  loginRequest, 
  loginSuccess,
  loginFail, 
  clearLog, 
  logout, 
  registerRequest, 
  registerFail, 
  registerSuccess
} = authSlice.actions
