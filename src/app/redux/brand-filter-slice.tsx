import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BrandFilterState {
    items: string[]
}

const initialState: BrandFilterState = {
    items: ['all'],
}

const BrandFilterSlice = createSlice({
    name: 'BrandFilter',
    initialState,
    reducers: {
        selectBrand(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item !== 'all')
            const existingItem = state.items.find(
                (item) => item === action.payload
            )
            if (existingItem) {
                state.items = state.items.filter(
                    (item) => item !== existingItem
                )
            } else {
                state.items.push(action.payload)
            }
            console.log('burası', state, action)
        },
        removeSelections(state) {
            state.items = ['all']
        },
    },
})

export const { selectBrand, removeSelections } = BrandFilterSlice.actions
export default BrandFilterSlice.reducer
