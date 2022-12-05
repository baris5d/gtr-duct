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
import { useEffect, useState } from 'react'
import { Company } from '../../../types'
import { useSearchParams } from 'react-router-dom'

export const Filter = () => {
    const { data, isLoading } = useGetCompaniesQuery() // get companies from api
    const [brands, setBrands] = useState<Company[]>([]) // createa a state to be able to search in it
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const selectedBrand = useSelector((state: any) => state.brand) // get selected brands from redux store
    const [searchParams] = useSearchParams()

    useEffect(() => {
        if (data) {
            setBrands(data)
        }
    }, [data])

    // Set filters from url params
    useEffect(() => {
        if (searchParams.get('brand_like')) {
            const brandFilters = searchParams.get('brand_like')?.split('|') // brand_like=Apple|Samsung
            brandFilters?.forEach((_) => {
                dispatch(selectBrand(_))
            })
        }
    }, [])

    const checkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Handler')
        if (e.target.value === 'all') {
            dispatch(removeSelections()) // Remove all selections if All is selected
        } else {
            dispatch(selectBrand(e.target.value))
        }
    }

    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        if (e.target.value.length > 0) {
            setBrands(
                brands?.filter((brand: any) =>
                    brand.name.toLowerCase().includes(search.toLowerCase())
                )
            ) // Filter brands by search input
        } else {
            if (data) {
                setBrands(data)
            }
        }
    }

    return (
        <>
            <Heading type="h4" text="Brands" />
            <Container cols={1} width={'100%'}>
                <Item className={styles.filter}>
                    <FormGroup>
                        <FormItem>
                            <SearchBar
                                onChange={searchChangeHandler}
                                value={search}
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
                                brands?.map((company) => (
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

interface SearchBarProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, value }) => {
    return (
        <>
            <TextInput
                type="text"
                name="search"
                placeholder="Search"
                onChange={onChange}
                value={value}
            />
        </>
    )
}
