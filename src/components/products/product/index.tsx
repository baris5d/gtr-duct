import { Item } from '../../../layouts/Container'
import { ProductButton } from '../button'
import { ProductImage } from '../image'
import { ProductPrice } from '../price'
import { ProductTitle } from '../title'
import styles from '../product.module.scss'
import { addToBasket, BasketItemType } from '../../../app/redux/basket-slice'
import { useDispatch } from 'react-redux'

export const Product: React.FC<any> = ({ product }) => {
    const { name, price } = product
    const item: BasketItemType = {
        slug: product.slug,
        name: product.name,
        price: product.price,
        quantity: 1,
    }

    const dispatch = useDispatch()
    return (
        <Item className={styles.product}>
            <div>
                <ProductImage
                    src={'https://picsum.photos/200'}
                    alt={name}
                    title={name}
                />
                <ProductPrice price={price} />
                <ProductTitle title={name} />
            </div>
            <ProductButton
                title="Add"
                onClick={() => dispatch(addToBasket(item))}
            />
        </Item>
    )
}
