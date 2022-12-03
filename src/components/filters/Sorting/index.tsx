import { Container, Item } from '../../../layouts/Container'
import { Heading } from '../../atoms/heading'
import { FormGroup } from '../../molecules/form-group'
import { FormItem } from '../../molecules/form-item'
import { Radio } from '../../molecules/radio'
import styles from './filter.module.scss'

export const SortingFilter = () => {
    return (
        <>
            <Heading type="h4" text="Sorting" />
            <Container cols={1} width={'100%'}>
                <Item className={styles.sorting}>
                    <FormGroup>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="low_to_high"
                                checked={false}
                                id="sort1"
                                label="Price low to High"
                            />
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="high_to_low"
                                checked={false}
                                id="sort2"
                                label="Price high to Low"
                            />
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="new_to_old"
                                checked={false}
                                id="sort3"
                                label="New to Old"
                            />
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="old_to_new"
                                checked={false}
                                id="sort4"
                                label="Old to New"
                            />
                        </FormItem>
                    </FormGroup>
                </Item>
            </Container>
        </>
    )
}
