import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { universities } from "../../_helpers/universities"


export const getCollegeAsync = createAsyncThunk('college/getCollegeAsync', async(payload, {dispatch,rejectWithValue})=>{
    try{
      dispatch(getCollegeRequest())
      console.log('payload', payload);
      const uni = universities.filter((item)=> payload === item.name)
      console.log('uni', uni);
      if(uni.length > 0){
        dispatch(getCollegeSuccess(uni))
      }
      else{
        dispatch(getCollegeFail('An error occurred'))
      }
    }
    catch(error){
       return rejectWithValue('An error occurred')
    }
})


const initialState = {
    data: null,
    loading: false,
    error: false,
    errorMessage: null
}

const collegeSlice = createSlice({
    name:'college',
    initialState,
    reducers:{
       getCollegeRequest: (state)=>{
        state.loading = true
       },
       getCollegeSuccess: (state, action)=>{
        state.loading = false
        state.data = action.payload
       },
       getCollegeFail: (state, action)=>{
        state.loading = false
        state.error = true
        state.errorMessage = action.payload
       }
    }
})

export const {getCollegeRequest, getCollegeSuccess,getCollegeFail} = collegeSlice.actions
export default collegeSlice;