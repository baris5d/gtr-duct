import { render, fireEvent } from '@testing-library/react'
import { ProductPrice } from './'

describe('ProductPrice', () => {
    test('renders the provided price', () => {
        const price = 10

        const { getByText } = render(<ProductPrice price={price} />)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const priceText = getByText(price.toString())
        expect(priceText).toBeInTheDocument()
    })

    test('renders the provided price with currency', () => {
        const price = 10

        const { getByText } = render(<ProductPrice price={price} />)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const currencyText = getByText('₺')
        expect(currencyText).toBeInTheDocument()
    })
})
