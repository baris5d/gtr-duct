import styles from './radio.module.scss'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    value: string
    checked: boolean
}

const RadioButton: React.FC<RadioProps> = (props) => {
    const { name, value, checked, ...rest } = props
    return (
        <>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                className={styles.radio}
                {...rest}
            />
        </>
    )
}
export default RadioButton
