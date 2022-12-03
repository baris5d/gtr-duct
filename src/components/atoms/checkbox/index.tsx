import styles from './checkbox.module.scss'
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    value: string
    checked: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, value, checked }) => {
    return (
        <>
            <input
                type="chechbox"
                name={name}
                value={value}
                checked={checked}
                className={styles.checkbox}
            />
        </>
    )
}
