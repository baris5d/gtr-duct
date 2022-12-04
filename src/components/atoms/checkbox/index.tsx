import styles from './checkbox.module.scss'
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    value: string
    checked?: boolean
    id?: string
    onChange: (e: any) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
    name,
    value,
    checked,
    onChange,
    id,
}) => {
    return (
        <>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                value={value}
                id={id}
                className={styles.checkbox}
                onChange={onChange}
            />
        </>
    )
}
