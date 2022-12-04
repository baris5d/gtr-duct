import { DisplayText } from '../../atoms/display-text'
import styles from '../product.module.scss'

interface ProductPriceProps {
    price: number
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
    return (
        <div className={styles.product_price}>
            <DisplayText type="span" text="₺" className={styles.currency} />
            <DisplayText
                type="span"
                text={price.toString()}
                className={styles.price}
            />
        </div>
    )
}
