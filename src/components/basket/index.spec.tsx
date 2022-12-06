/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BasketButton, BasketList } from './'
import configureStore from 'redux-mock-store'
import { screen } from '@testing-library/react'

const mockStore = configureStore()
// Create a mock basket item
const mockBasketItem = [
    {
        title: 'Product title',
        price: 10,
        quantity: 1,
    },
    {
        title: 'Product title 2',
        price: 20,
        quantity: 2,
    },
]

describe('BasketButton', () => {
    test('renders the total price according to mock basket items', () => {
        const store = mockStore({ basket: { items: mockBasketItem } })

        const { getByText } = render(
            <Provider store={store}>
                <BasketButton />
            </Provider>
        )

        const priceText = getByText('₺ 50.00')
        expect(priceText).toBeInTheDocument()
    })
})

describe('BasketList', () => {
    test('it should display Basket is empty when basket is empty', () => {
        const store = mockStore({ basket: { items: [] } })

        const { getByText } = render(
            <Provider store={store}>
                <BasketList />
            </Provider>
        )

        const emptyText = getByText('Basket is empty')
        expect(emptyText).toBeInTheDocument()
    })
})
