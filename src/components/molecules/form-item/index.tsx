import styles from './item.module.scss'

interface FormItemProps {
    children: React.ReactNode
}
export const FormItem: React.FC<FormItemProps> = ({ children }) => {
    return <div className={styles.form_item}>{children}</div>
}
