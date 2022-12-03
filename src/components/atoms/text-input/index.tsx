import styles from './input.module.scss'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    value: string
    type: string
    placeholder: string
}

export const TextInput: React.FC<TextInputProps> = ({
    name,
    value,
    placeholder,
    type,
    ...rest
}) => {
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                {...rest}
                className={styles.input}
            />
        </>
    )
}
