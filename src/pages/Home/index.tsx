import { useParams } from 'react-router-dom'
import { Header, Footer } from '../../components/'
import { BasketList } from '../../components/basket'
import { Filter } from '../../components/filters/Filter'
import { SortingFilter } from '../../components/filters/Sorting'
import { Products } from '../../components/products'
import { Container, Item } from '../../layouts/Container/'

export function Home() {
    const currentPage = useParams<{ page: string }>().page || 1

    return (
        <>
            <Header />
            <Container cols={12} style={{ paddingTop: '25px' }}>
                <Item colSpan={3}>
                    <SortingFilter />
                    <Filter />
                </Item>
                <Item colSpan={6}>
                    <Products currentPage={currentPage} />
                </Item>
                <Item colSpan={3}>
                    <BasketList />
                </Item>
            </Container>
            <Footer />
        </>
    )
}
