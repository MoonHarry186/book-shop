import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		orderNumber: 10,
		active: false,
		products: []
	},
	reducers: {
		// Action
		changeStatus: (state) => {
			if (state.active === false) {
				state.active = true;
			} else {
				state.active = false;
			}
		},

		// Update Products List
		updateProductsList: (state, action) => {
			state.products = action.payload
		}
	}
})

export const { changeStatus, updateProductsList } = cartSlice.actions

export default cartSlice.reducer