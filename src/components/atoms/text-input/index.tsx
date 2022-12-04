import styles from './input.module.scss'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    value?: string
    type: string
    placeholder: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: React.FC<TextInputProps> = ({
    name,
    value,
    placeholder,
    type,
    onChange,
    ...rest
}) => {
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
                className={styles.input}
            />
        </>
    )
}
