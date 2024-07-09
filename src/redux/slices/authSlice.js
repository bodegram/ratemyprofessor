import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
        dispatch(loginRequest())
        const {data} = await api.post('/user/login', payload)
        console.log('data', data);
       
        dispatch(loginSuccess(data))          
    

       

    } catch (error) {
      console.log(error);
      //dispatch(loginFail())
      return rejectWithValue("An error occurred");
    }
  }
);

export const registerAsync = createAsyncThunk('auth/registerAsync', async(payload, {dispatch, rejectWithValue})=>{
  try{
     dispatch(registerRequest())
     console.log('payload', payload);
     const {data} = await api.post('/register', payload)
     console.log('reg-data', data);
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
  data: null,
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
      state.data = action.payload
     
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
