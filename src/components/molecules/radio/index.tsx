import { DisplayText } from '../../atoms/display-text'
import RadioButton from '../../atoms/radiobutton'
import { FormItem } from '../form-item'

interface RadioProps {
    name: string
    value: string
    checked: boolean
    label: string
    id?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({ ...props }) => {
    const { name, value, label, checked, id, onChange } = props
    return (
        <FormItem>
            <RadioButton
                name={name}
                value={value}
                checked={checked}
                id={id}
                onChange={() => onChange}
            />
            <DisplayText type="label" text={label} htmlFor={id} />
        </FormItem>
    )
}
