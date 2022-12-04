import { Container, Item } from '../../../layouts/Container'
import { Heading } from '../../atoms/heading'
import { FormGroup } from '../../molecules/form-group'
import { FormItem } from '../../molecules/form-item'
import { Check } from '../../molecules/check'
import styles from './filter.module.scss'
import { DisplayText } from '../../atoms/display-text'
import { Scrollable } from '../../atoms/scrollable'
import { TextInput } from '../../atoms/text-input'
import { useGetCompaniesQuery } from '../../../services/companies'
import {
    removeSelections,
    selectBrand,
} from '../../../app/redux/brand-filter-slice'
import { useDispatch, useSelector } from 'react-redux'

export const Filter = () => {
    const { data, isLoading } = useGetCompaniesQuery()
    const dispatch = useDispatch()

    const selectedBrand = useSelector((state: any) => state.brand)
    const checkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === 'all') {
            dispatch(removeSelections())
        } else {
            dispatch(selectBrand(e.target.value))
        }
        console.log(selectedBrand)
    }
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
                                checked={false}
                                onChange={() => {}}
                            />
                        </FormItem>
                        <Scrollable>
                            <Check
                                key={'ALL'}
                                name="brands"
                                value={'all'}
                                checked={selectedBrand.items.includes('all')}
                                label={'All'}
                                onChange={(e) => checkChangeHandler(e)}
                            >
                                <DisplayText type="span" text={'(12)'} />
                            </Check>
                            {isLoading ? (
                                <DisplayText type="span" text="Loading..." />
                            ) : (
                                data?.map((company) => (
                                    <Check
                                        key={company.slug}
                                        name="brands"
                                        value={company.slug}
                                        checked={selectedBrand.items.includes(
                                            company.slug
                                        )}
                                        label={company.name}
                                        onChange={(e) => checkChangeHandler(e)}
                                    >
                                        <DisplayText
                                            type="span"
                                            text={'(12)'}
                                        />
                                    </Check>
                                ))
                            )}
                        </Scrollable>
                    </FormGroup>
                </Item>
            </Container>
        </>
    )
}
