import { Container, Item } from '../../layouts/Container'
import { Heading } from '../atoms/heading'
import { Paginator } from '../paginator'
import { Product } from './product'
import styles from './product.module.scss'

export const Products: React.FC<any> = ({ product }) => {
    return (
        <>
            <Heading text="Products" type={'h1'} />
            <Container
                cols={4}
                width={'1fr'}
                gap={24}
                className={styles.container}
            >
                <Product
                    title="Gorgeous Office Mug"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 2"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 3"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 4"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 5"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 6"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 7"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
                <Product
                    title="Product 8"
                    image="https://picsum.photos/200"
                    price="100"
                />
            </Container>
            <Paginator currentPage={1} totalPages={10} />
        </>
    )
}
