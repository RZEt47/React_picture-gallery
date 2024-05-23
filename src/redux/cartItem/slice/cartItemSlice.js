import {createSlice} from "@reduxjs/toolkit";
import {fetchCartItem} from "@/redux/cartItem/services/fetchCartItem.js";


const initialState = {
    cartItem : [],
    isLoading: false,
}

export const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cartItem.forEach((item) => {
                if (action.payload === item.id) {
                    item.count++
                }
            })
        },
        decItem(state, action) {
            state.cartItem.forEach((item) => {
                const id =  state.cartItem.findIndex(function (item) {
                    return item.id === action.payload
                });

                if (action.payload === item.id) {
                    item.count <= 1 ? state.cartItem.splice(id,1) : item.count--
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartItem.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCartItem.fulfilled, (state, action) => {

            const item = state.cartItem.find((res) => {
                return JSON.stringify(res) === JSON.stringify(action.payload)
            })

            if (item) {
                item.count++
            } else {
                state.cartItem.push(action.payload);
            }
        })
        builder.addCase(fetchCartItem.rejected, (state) => {
            state.isLoading = false
        })
    },

})

export const { actions: cartItemActions } = cartItemSlice

export const {reducer:  cartItemReducer} = cartItemSlice