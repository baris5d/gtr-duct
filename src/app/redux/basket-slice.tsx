import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type BasketItemType = {
    slug: string
    name: string
    price: number
    quantity: number
}

interface BasketState {
    items: BasketItemType[]
}

const initialState: BasketState = {
    items: [],
}

const BasketSlice = createSlice({
    name: 'Basket',
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<BasketItemType>) {
            const existingItem = state.items.find(
                (item) => item.slug === action.payload.slug
            )
            if (existingItem) {
                existingItem.quantity++
            } else {
                state.items.push({
                    slug: action.payload.slug,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                })
            }
        },
        incrementQuantity(state, action: PayloadAction<BasketItemType>) {
            const existingItem = state.items.find(
                (item) => item.slug === action.payload.slug
            )
            if (existingItem) {
                existingItem.quantity++
            }
        },
        decrementQuantity(state, action: PayloadAction<BasketItemType>) {
            const existingItem = state.items.find(
                (item) => item.slug === action.payload.slug
            )
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(
                        (item) => item.slug !== existingItem.slug
                    )
                } else {
                    existingItem.quantity--
                }
            }
        },
    },
})

export const { addToBasket, incrementQuantity, decrementQuantity } =
    BasketSlice.actions
export default BasketSlice.reducer
