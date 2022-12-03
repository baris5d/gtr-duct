interface SvgProps {
    className?: string
    viewBox?: string
    children: React.ReactNode
    width?: number
    height?: number
}

export const Svg: React.FC<SvgProps> = ({
    children,
    viewBox,
    className,
    width,
    height,
}) => {
    return (
        <svg
            className={className}
            viewBox={viewBox}
            width={width}
            height={height}
        >
            {children}
        </svg>
    )
}
