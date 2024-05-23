import { createAsyncThunk } from '@reduxjs/toolkit'
import {$api} from "@/api/api.js";



export const fetchFrench = createAsyncThunk(
    'French/fetchFrench',
    async (_,thunkAPI) => {

        const {rejectWithValue} = thunkAPI

        try {
            const response = await $api.get(`/french`)

            return response.data
        } catch (error) {
            return rejectWithValue("Не были получены данные...")
        }
    }
)