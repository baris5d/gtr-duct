interface LinkProps {
    href: string
    children: React.ReactNode
    className?: string
}
export const Link: React.FC<LinkProps> = ({
    children,
    href,
    className,
    ...rest
}) => {
    return (
        <a href={href} className={className} {...rest}>
            {children}
        </a>
    )
}
