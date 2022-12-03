import { DisplayText } from '../../atoms/display-text'
import styles from '../product.module.scss'

interface ProductTitleProps {
    title: string
}

export const ProductTitle: React.FC<ProductTitleProps> = ({
    title,
    ...props
}) => {
    return <DisplayText type="p" text={title} className={styles.title} />
}
