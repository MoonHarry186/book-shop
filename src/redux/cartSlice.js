import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		orderNumber: 0,
		active: false,
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

		updateOrderNumber: (state, action) => {
			if (!action.payload) {
				action.payload = 1
			} 
			state.orderNumber = state.orderNumber + action.payload;
		}
	}
})

export const { changeStatus, updateOrderNumber } = cartSlice.actions

export default cartSlice.reducer