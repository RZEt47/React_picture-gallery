import { createAsyncThunk } from '@reduxjs/toolkit'
import {$api} from "@/api/api.js";



export const fetchEngland = createAsyncThunk(
    'England/fetchEngland',
    async (_,thunkAPI) => {

        const {rejectWithValue} = thunkAPI

        try {
            const response = await $api.get(`/england`)

            return response.data
        } catch (error) {
            return rejectWithValue("Не были получены данные...")
        }
    }
)