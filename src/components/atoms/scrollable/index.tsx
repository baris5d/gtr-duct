import styles from './scrollable.module.scss'
interface ScrollableProps {
    children: React.ReactNode
}
export const Scrollable: React.FC<ScrollableProps> = ({
    children,
    ...rest
}) => {
    return (
        <div className={styles.scrollable} {...rest}>
            {children}
        </div>
    )
}
