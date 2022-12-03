import { Container, Item } from '../../layouts/Container'
import { Button } from '../atoms/button'
import { DisplayText } from '../atoms/display-text'
import { Scrollable } from '../atoms/scrollable'
import { Svg } from '../atoms/svg'
import styles from './basket.module.scss'

const BasketButton: React.FC = () => {
    return (
        <>
            <Button className={styles.button}>
                <Svg
                    viewBox="0 0 24 26"
                    width={24}
                    height={26}
                    className={styles.basket_button}
                >
                    <path d="M5.41174 9.46655H18.5884V21.0081H5.41174V9.46655Z" />
                    <path d="M9.67188 4.65747H14.3412L15.2765 5.62625V9.4666L14.2645 9.46388V5.6242H9.75454V9.46388L8.72388 9.4666V5.6242L9.67188 4.65747Z" />
                </Svg>
                <DisplayText type="span" text="₺39,97" />
            </Button>
        </>
    )
}

export const BasketList: React.FC = () => {
    return (
        <>
            <Container
                cols={1}
                gap={0}
                width={'1fr'}
                className={styles.container}
            >
                <Item className={styles.scrollable}>
                    <BasketProduct />
                    <BasketProduct />
                    <BasketProduct />
                    <Container cols={3} gap={0} width={'1fr'}>
                        <Item
                            colSpan={2}
                            start={3}
                            className={styles.total_price}
                        >
                            <DisplayText type="span" text="₺222,22" />
                        </Item>
                    </Container>
                </Item>
            </Container>
        </>
    )
}

const BasketProduct: React.FC = () => {
    return (
        <>
            <Container cols={3} width={'1fr'} className={styles.product}>
                <Item colSpan={2} className={styles.info}>
                    <DisplayText type="p" text="Example Product" />
                    <DisplayText type="span" text="₺39,97" />
                </Item>
                <Item colSpan={1}>
                    <Counter />
                </Item>
            </Container>
        </>
    )
}

const Counter: React.FC = () => {
    return (
        <>
            <Container
                cols={3}
                gap={0}
                width={'1fr'}
                className={styles.counter}
            >
                <Item>
                    <Button className={styles.counter_button}>
                        <Svg
                            viewBox="0 0 12 12"
                            width={12}
                            height={12}
                            className={styles.counter_button}
                        >
                            <rect
                                y="4"
                                width="10"
                                height="2.04384"
                                rx="1"
                                fill="#1EA4CE"
                            />
                        </Svg>
                    </Button>
                </Item>
                <Item className={styles.price_box}>
                    <DisplayText
                        type="span"
                        text="1"
                        className={styles.price}
                    />
                </Item>
                <Item>
                    <Button className={styles.counter_button}>
                        <Svg
                            viewBox="0 0 12 12"
                            width={12}
                            height={12}
                            className={styles.counter_button}
                        >
                            <path
                                d="M6.44053 10.4069L6.44053 6.1977H10.5595C10.8027 6.1977 11 5.9961 11 5.74751C11 5.49892 10.8027 5.29733 10.5595 5.29733H6.44053V1.08812C6.44053 0.839531 6.24326 0.637939 6 0.637939C5.75674 0.637939 5.55947 0.839531 5.55947 1.08812V5.29733L1.44053 5.29733C1.19727 5.29733 1 5.49892 1 5.74751C1 5.9961 1.19727 6.1977 1.44053 6.1977L5.55947 6.1977L5.55947 10.4069C5.55947 10.6555 5.75674 10.8571 6 10.8571C6.24326 10.8571 6.44053 10.6555 6.44053 10.4069"
                                stroke="#1EA4CE"
                            />
                        </Svg>
                    </Button>
                </Item>
            </Container>
        </>
    )
}

export const Basket: React.FC = () => {
    return <BasketButton />
}
