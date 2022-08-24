import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		orderNumber: 10,
		active: false
	},
	reducers: {
		// Action
		changeStatus: (state) => {
			if (state.active === false) {
				state.active = true;
			} else {
				state.active = false;
			}
		}
	}
})

export const { changeStatus } = cartSlice.actions

export default cartSlice.reducer