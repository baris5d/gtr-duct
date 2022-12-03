import { Button } from '../atoms/button'
import { DisplayText } from '../atoms/display-text'
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

const BasketList: React.FC = () => {
    return <></>
}

export const Basket: React.FC = () => {
    return <BasketButton />
}
