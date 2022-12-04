import { Checkbox } from '../../atoms/checkbox'
import { DisplayText } from '../../atoms/display-text'
import { FormItem } from '../form-item'

interface CheckProps {
    name: string
    value: string
    label: string
    children: React.ReactNode
    checked?: boolean
    onChange: (e: any) => void
}

export const Check: React.FC<CheckProps> = ({ ...props }) => {
    const { name, checked, value, label, children, onChange } = props
    return (
        <FormItem>
            <Checkbox
                checked={checked}
                name={name}
                value={value}
                id={value}
                onChange={onChange}
            />
            <DisplayText type="label" htmlFor={value} text={label}>
                {children}
            </DisplayText>
        </FormItem>
    )
}
