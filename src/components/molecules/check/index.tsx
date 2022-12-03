import { Checkbox } from '../../atoms/checkbox'
import { DisplayText } from '../../atoms/display-text'
import { FormItem } from '../form-item'

interface CheckProps {
    name: string
    value: string
    checked: boolean
    label: string
    children: React.ReactNode
}

export const Check: React.FC<CheckProps> = ({ ...props }) => {
    const { name, value, label, checked, children } = props
    return (
        <FormItem>
            <Checkbox name={name} value={value} checked={checked} />
            <DisplayText type="label" text={label}>
                {children}
            </DisplayText>
        </FormItem>
    )
}
