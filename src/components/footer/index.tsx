import { Link } from 'react-router-dom'
import { Container, Item } from '../../layouts/Container'
import { DisplayText } from '../atoms/display-text'
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <>
            <Container className={styles.footer}>
                <Item>
                    <DisplayText text="©2022 Market" type="label" />
                </Item>
                <Item>
                    <DisplayText text="•" type="label" />
                </Item>
                <Item>
                    <Link to="/privacy">Privacy</Link>
                </Item>
            </Container>
        </>
    )
}
