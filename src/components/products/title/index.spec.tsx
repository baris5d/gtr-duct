import { render } from '@testing-library/react'
import { ProductTitle } from './'

describe('ProductTitle', () => {
    test('renders the provided title', () => {
        const title = 'Product title'

        const { getByText } = render(<ProductTitle title={title} />)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const titleText = getByText(title)
        expect(titleText).toBeInTheDocument()
    })
})
