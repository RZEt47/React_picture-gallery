import { createAsyncThunk } from '@reduxjs/toolkit'
import {$api} from "@/api/api.js";


export const fetchGermany = createAsyncThunk(
    'Germany/fetchGermany',
    async (_,thunkAPI) => {

        const {rejectWithValue} = thunkAPI

        try {
            const response = await $api.get(`/germany`, )

            return response.data
        } catch (error) {
            return rejectWithValue("Не были получены данные...")
        }
    }
)