import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import styles from './container.module.scss'

interface GridProps {
    children: ReactNode
    cols?: number
    gap?: number
    width?: string
    style?: React.CSSProperties
    className?: string
}

const WithCustomGrid = styled.div`
    grid-gap: ${(props: GridProps) => props.gap}px;
    grid-template-columns: repeat(
        ${(props: GridProps) => props.cols},
        ${(props: GridProps) => props.width}
    );
`

export const Container: FunctionComponent<{
    children: ReactNode
    cols?: number
    gap?: number
    width?: string
    style?: React.CSSProperties
    className?: string
}> = ({ children, cols = 12, gap = 16, style, width = '88px', className }) => {
    return (
        <WithCustomGrid
            className={classNames(styles.grid, className)}
            style={{ ...style }}
            cols={cols}
            gap={gap}
            width={width}
        >
            {children}
        </WithCustomGrid>
    )
}

export const Item: FunctionComponent<{
    children: ReactNode
    colSpan?: number
    style?: React.CSSProperties
    start?: number
    className?: string
}> = ({ children, colSpan = 1, style, start, className }) => {
    return (
        <div
            style={{
                ...style,
                gridColumn: start
                    ? `${start} / span ${colSpan}`
                    : `span ${colSpan}`,
            }}
            className={className}
        >
            {children}
        </div>
    )
}
