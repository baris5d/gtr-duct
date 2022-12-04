import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { companiesApi } from '../services/companies'
import { itemsApi } from '../services/items'
import basketSlice from './redux/basket-slice'
import brandFilterSlice from './redux/brand-filter-slice'
import sortSlice from './redux/sort-slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [companiesApi.reducerPath]: companiesApi.reducer,
        [itemsApi.reducerPath]: itemsApi.reducer,
        basket: basketSlice,
        brand: brandFilterSlice,
        sort: sortSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            companiesApi.middleware,
            itemsApi.middleware
        ),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
