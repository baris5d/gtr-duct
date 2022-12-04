import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Item } from '../types'
import { BASE_URL } from '../constants'

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getItems: builder.query<
            { apiResponse: Item[]; totalCount: number; link: string },
            any
        >({
            query: ({ page, filter, sort, order }) =>
                `items?_page=${page}&_limit=16&manufacturer_like=${filter}&_sort=${sort}&_order=${order}`,
            transformResponse: (apiResponse: Item[], meta) => ({
                apiResponse,
                totalCount:
                    Number(meta?.response?.headers?.get('X-Total-Count')) || 16,
                link: meta?.response?.headers?.get('Link') || '',
            }),
        }),
    }),
})

export const { useGetItemsQuery } = itemsApi
