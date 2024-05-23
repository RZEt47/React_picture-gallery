import {createSlice} from "@reduxjs/toolkit";
import {fetchEngland} from "@/redux/england/services/fetchEngland.js";



const initialState = {
    england : [],
    isLoading : false,
}

export const englandSlice = createSlice({
    name: 'england',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchEngland.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchEngland.fulfilled, (state, action) => {
            state.isLoading = false
            state.england = action.payload
        })
        builder.addCase(fetchEngland.rejected, (state) => {
            state.isLoading = false
        })
    },

})

export const { actions: englandActions } = englandSlice

export const {reducer:  englandReducer} = englandSlice