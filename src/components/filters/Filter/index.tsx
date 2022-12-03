import { Container, Item } from '../../../layouts/Container'
import { Heading } from '../../atoms/heading'
import { FormGroup } from '../../molecules/form-group'
import { FormItem } from '../../molecules/form-item'
import { Check } from '../../molecules/check'
import styles from './filter.module.scss'
import { DisplayText } from '../../atoms/display-text'
import { Scrollable } from '../../atoms/scrollable'
import { TextInput } from '../../atoms/text-input'

export const Filter = () => {
    return (
        <>
            <Heading type="h4" text="Brands" />
            <Container cols={1} width={'100%'}>
                <Item className={styles.filter}>
                    <FormGroup>
                        <FormItem>
                            <TextInput
                                placeholder="Search"
                                type="text"
                                name="brands"
                                value=""
                            />
                        </FormItem>
                        <Scrollable>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={true}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={false}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={false}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={false}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={false}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={false}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={false}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                            <FormItem>
                                <Check
                                    name="all"
                                    label="All"
                                    value="1"
                                    checked={false}
                                >
                                    <DisplayText type="span" text="(12)" />
                                </Check>
                            </FormItem>
                        </Scrollable>
                    </FormGroup>
                </Item>
            </Container>
        </>
    )
}
