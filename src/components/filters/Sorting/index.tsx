import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { selectSort } from '../../../app/redux/sort-slice'
import { Container, Item } from '../../../layouts/Container'
import { Heading } from '../../atoms/heading'
import { FormGroup } from '../../molecules/form-group'
import { FormItem } from '../../molecules/form-item'
import { Radio } from '../../molecules/radio'
import styles from './filter.module.scss'

export const SortingFilter = () => {
    const sort = useSelector((state: any) => state.sort) // Get sort from redux store
    const dispatch = useDispatch() // Dispatch actions
    const [searchParams] = useSearchParams() // Get search params from url

    // dispatch sort action when sort changes
    const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const radio = e.target.value.split(',')
        dispatch(selectSort({ type: radio[0], order: radio[1] }))
    }

    // Set sort from url params if exists
    useEffect(() => {
        if (searchParams.get('sort') && searchParams.get('order')) {
            const sort = searchParams.get('sort')
            const order = searchParams.get('order')
            if (sort && order) {
                dispatch(selectSort({ type: sort, order: order }))
            }
        }
    }, [])
    return (
        <>
            <Heading type="h4" text="Sorting" />
            <Container cols={1} width={'100%'}>
                <Item className={styles.sorting}>
                    <FormGroup>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="price,asc"
                                checked={
                                    sort.type === 'price' &&
                                    sort.order === 'asc'
                                }
                                id="sort1"
                                label="Price low to High"
                                onChange={(e) => radioChangeHandler(e)}
                            />
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="price,desc"
                                checked={
                                    sort.type === 'price' &&
                                    sort.order === 'desc'
                                }
                                id="sort2"
                                label="Price high to Low"
                                onChange={(e) => radioChangeHandler(e)}
                            />
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="added,desc"
                                checked={
                                    sort.type === 'added' &&
                                    sort.order === 'desc'
                                }
                                id="sort3"
                                label="New to Old"
                                onChange={(e) => radioChangeHandler(e)}
                            />
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="sort"
                                value="added,asc"
                                checked={
                                    sort.type === 'added' &&
                                    sort.order === 'asc'
                                }
                                id="sort4"
                                label="Old to New"
                                onChange={(e) => radioChangeHandler(e)}
                            />
                        </FormItem>
                    </FormGroup>
                </Item>
            </Container>
        </>
    )
}
