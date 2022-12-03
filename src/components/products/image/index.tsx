import { Item } from '../../../layouts/Container'
import { Image } from '../../atoms/image'
import styles from '../product.module.scss'

interface ProductImageProps {
    src: string
    alt: string
    title: string
}

export const ProductImage: React.FC<ProductImageProps> = ({ ...props }) => {
    const { src, alt, title } = props
    return (
        <>
            <Item className={styles.image}>
                <Image src={src} alt={alt} title={title} />
            </Item>
        </>
    )
}
