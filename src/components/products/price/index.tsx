import { DisplayText } from '../../atoms/display-text'
import styles from '../product.module.scss'

interface ProductPriceProps {
    price: string
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
    return (
        <div className={styles.product_price}>
            <DisplayText type="span" text="₺" className={styles.currency} />
            <DisplayText type="span" text={price} className={styles.price} />
        </div>
    )
}
