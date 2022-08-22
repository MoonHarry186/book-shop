import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		category: '',
		value: ''
	},
	reducers: {
		searchByValue: (state, action) => {
			state.value = action.payload.value
			state.category = action.payload.category
		}
	}
})

export const { searchByValue } = searchSlice.actions
export default searchSlice.reducer