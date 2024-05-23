import {createSlice} from "@reduxjs/toolkit";
import {fetchGermany} from "@/redux/germany/services/fetchGermany.js";


const initialState = {
    germany : [],
    isLoading : false,
}

export const germanySlice = createSlice({
    name: 'germany',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchGermany.pending, (state) => {
            state.errors = null
            state.isLoading = true
        })
        builder.addCase(fetchGermany.fulfilled, (state, action) => {
            state.isLoading = false
            state.germany = action.payload
        })
        builder.addCase(fetchGermany.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload
        })
    },

})

export const { actions: germanyActions } = germanySlice

export const {reducer: germanyReducer} = germanySlice