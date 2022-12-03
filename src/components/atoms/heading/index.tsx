import React from 'react'

interface HeadingProps {
    text: string
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    style?: React.CSSProperties
}
export const Heading: React.FC<HeadingProps> = ({ type, text, style }) => {
    return React.createElement(type, { style }, text)
}
