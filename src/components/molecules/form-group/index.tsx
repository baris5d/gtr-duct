interface FormGroupProps {
    children: React.ReactNode
}
export const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
    return <div className="form-group">{children}</div>
}
