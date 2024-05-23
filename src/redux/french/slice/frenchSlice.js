import {createSlice} from "@reduxjs/toolkit";
import {fetchFrench} from "@/redux/french/services/fetchFrench.js";



const initialState = {
    french : [],
    isLoading : false,
}

export const frenchSlice = createSlice({
    name: 'french',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchFrench.pending, (state) => {
            state.errors = null
            state.isLoading = true
        })
        builder.addCase(fetchFrench.fulfilled, (state, action) => {
            state.isLoading = false
            state.french = action.payload
        })
        builder.addCase(fetchFrench.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload
        })
    },

})

export const { actions: frenchActions } = frenchSlice

export const {reducer:  frenchReducer} = frenchSlice