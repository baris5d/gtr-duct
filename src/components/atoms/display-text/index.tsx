import React from 'react'

interface TextProps {
    text: string
    type: 'label' | 'span' | 'p'
    style?: React.CSSProperties
    htmlFor?: string
    props?: any
    className?: string
    children?: React.ReactNode
}
export const DisplayText: React.FC<TextProps> = ({
    type,
    text,
    style,
    htmlFor,
    children,
    className,
}) => {
    return React.createElement(
        type,
        { style, htmlFor, className },
        text,
        children
    )
}
