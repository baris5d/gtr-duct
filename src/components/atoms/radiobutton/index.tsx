import styles from './radio.module.scss'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    value: string
    id?: string
    checked: boolean
}

const RadioButton: React.FC<RadioProps> = (props) => {
    const { name, value, checked, id, ...rest } = props
    return (
        <>
            <input
                type="radio"
                name={name}
                value={value}
                id={id}
                checked={checked}
                className={styles.radio}
                {...rest}
            />
        </>
    )
}
export default RadioButton
