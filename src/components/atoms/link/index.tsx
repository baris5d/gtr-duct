import classNames from 'classnames'
import styles from './link.module.scss'
interface LinkProps {
    href: string
    disabled?: boolean
    children: React.ReactNode
    className?: string
}
export const Link: React.FC<LinkProps> = ({
    children,
    href,
    disabled,
    className,
    ...rest
}) => {
    return (
        <a
            href={href}
            className={classNames(className, disabled && styles.disabled)}
            {...rest}
        >
            {children}
        </a>
    )
}
