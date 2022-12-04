import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Company } from '../types'
import { BASE_URL } from '../constants'

export const companiesApi = createApi({
    reducerPath: 'companiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCompanies: builder.query<Company[], void>({
            query: () => 'companies',
        }),
    }),
})

export const { useGetCompaniesQuery } = companiesApi
