import classNames from 'classnames'
import styles from './scrollable.module.scss'
interface ScrollableProps {
    children: React.ReactNode
    className?: string
}
export const Scrollable: React.FC<ScrollableProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <div className={classNames(styles.scrollable, className)} {...rest}>
            {children}
        </div>
    )
}
