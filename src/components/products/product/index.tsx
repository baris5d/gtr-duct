import { Item } from '../../../layouts/Container'
import { ProductButton } from '../button'
import { ProductImage } from '../image'
import { ProductPrice } from '../price'
import { ProductTitle } from '../title'
import styles from '../product.module.scss'

interface ProductProps {
    title: string
    image: string
    price: string
}

export const Product: React.FC<ProductProps> = ({ ...props }) => {
    const { title, image, price } = props
    return (
        <Item className={styles.product}>
            <div>
                <ProductImage src={image} alt={title} title={title} />
                <ProductPrice price={price} />
                <ProductTitle title={title} />
            </div>
            <ProductButton title="Add" />
        </Item>
    )
}
