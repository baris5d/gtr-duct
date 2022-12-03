import classnames from 'classnames'

interface ButtonProps {
    className?: string
    children: React.ReactNode
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    ...props
}) => {
    return (
        <button className={classnames(className)} onClick={onClick} {...props}>
            {children}
        </button>
    )
}
