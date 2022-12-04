import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SortState {
    type: string
    order: string
}

const initialState: SortState = {
    type: 'price',
    order: 'asc',
}

const SortSlice = createSlice({
    name: 'Sort',
    initialState,
    reducers: {
        selectSort(
            state,
            action: PayloadAction<{ type: string; order: string }>
        ) {
            state.type = action.payload.type
            state.order = action.payload.order
        },
    },
})

export const { selectSort } = SortSlice.actions
export default SortSlice.reducer
