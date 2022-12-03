import styles from './header.module.scss'
import { Container, Item } from '../../layouts/Container'
import Logo from '../../logo.svg'
import { Basket } from '../basket'
export function Header() {
    return (
        <>
            <Container cols={12} className={styles.header}>
                <Item
                    start={6}
                    colSpan={2}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={Logo} alt="Market Logo" />
                </Item>
                <Item
                    start={11}
                    colSpan={2}
                    style={{
                        display: 'flex',
                        justifyItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Basket />
                </Item>
            </Container>
        </>
    )
}
