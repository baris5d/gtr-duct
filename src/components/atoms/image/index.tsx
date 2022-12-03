import classNames from 'classnames'
import styles from './image.module.scss'
interface ImageProps {
    src: string
    alt: string
    title: string
    style?: React.CSSProperties
    className?: string
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    title,
    style,
    className,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{ ...style }}
            title={title}
            className={classNames(className, styles.image)}
            {...props}
        />
    )
}
