import { Button } from '../../atoms/button'
import { DisplayText } from '../../atoms/display-text'
import styles from '../product.module.scss'

interface ProductButtonProps {
    title: string
}
export const ProductButton: React.FC<ProductButtonProps> = ({ title }) => {
    return (
        <Button className={styles.button}>
            <DisplayText type="span" text={title} />
        </Button>
    )
}
