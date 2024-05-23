import { createAsyncThunk } from '@reduxjs/toolkit'
import {$api} from "@/api/api.js";



export const fetchCartItem = createAsyncThunk(
    'cartItem/fetchCartItem',
    async (param,thunkAPI) => {

        const {rejectWithValue} = thunkAPI

        const {id, country} = param

        try {

            const response = await $api.get(`/${country}/${id}`)

            return response.data
        } catch (error) {
            return rejectWithValue("Не были получены данные...")
        }
    }
)