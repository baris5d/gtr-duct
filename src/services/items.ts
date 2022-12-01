import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Item } from '../types'
import { BASE_URL } from '../constants'

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getItems: builder.query<Item[], void>({
            query: () => 'items',
        }),
    }),
})
