import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import styles from './container.module.scss'

export const Container: FunctionComponent<{
    children: ReactNode
    cols?: number
    gap?: number
    width?: string
    style?: React.CSSProperties
    className?: string
}> = ({ children, cols = 12, gap = 16, style, width = '88px', className }) => {
    const CustomGrid = styled.div`
        grid-gap: ${gap}px;
        grid-template-columns: repeat(${cols}, ${width});
    `
    return (
        <CustomGrid
            className={classNames(styles.grid, className)}
            style={{ ...style }}
        >
            {children}
        </CustomGrid>
    )
}

export const Item: FunctionComponent<{
    children: ReactNode
    colSpan?: number
    style?: React.CSSProperties
    start?: number
    className?: string
}> = ({ children, colSpan = 1, style, start, className }) => {
    const GridItem = styled.div`
        grid-column: ${start
            ? `${start} / span ${colSpan}`
            : `span ${colSpan}`};
    `

    return (
        <GridItem style={{ ...style }} className={className}>
            {children}
        </GridItem>
    )
}
