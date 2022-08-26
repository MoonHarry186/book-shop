import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: []
	},
	reducers: {

		// Update Products List
		updateProductsList: (state, action) => {
			state.products = action.payload
		}
	}
})

export const { updateProductsList } = productsSlice.actions

export default productsSlice.reducer