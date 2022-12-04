import { Button } from '../../atoms/button'
import { DisplayText } from '../../atoms/display-text'
import styles from '../product.module.scss'

interface ProductButtonProps {
    title: string
    onClick?: () => void
}
export const ProductButton: React.FC<ProductButtonProps> = ({
    title,
    onClick,
}) => {
    return (
        <Button className={styles.button} onClick={onClick}>
            <DisplayText type="span" text={title} />
        </Button>
    )
}
