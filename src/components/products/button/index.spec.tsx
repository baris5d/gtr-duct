import { render, fireEvent } from '@testing-library/react'
import { ProductButton } from './'

describe('ProductButton', () => {
    test('renders the provided title and calls onClick when clicked', () => {
        const title = 'Add to cart'
        const onClick = jest.fn()

        const { getByText } = render(
            <ProductButton title={title} onClick={onClick} />
        )

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const button = getByText(title)

        fireEvent.click(button)

        expect(button).toBeInTheDocument()
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
