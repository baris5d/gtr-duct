import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'
import { Container, Item } from '../../layouts/Container'
import { useGetItemsQuery } from '../../services/items'
import { Heading } from '../atoms/heading'
import { Paginator } from '../paginator'
import { Product } from './product'
import styles from './product.module.scss'

export const Products: React.FC<any> = ({ currentPage }) => {
    const selectedBrands = useSelector((state: any) => state.brand)

    const filters = selectedBrands.items
        .filter((_: any) => _ !== 'all')
        .join('|')

    const sorting = useSelector((state: any) => state.sort)

    const {
        data: items,
        isLoading,
        isError,
        isSuccess,
    } = useGetItemsQuery({
        page: currentPage,
        filter: filters,
        sort: sorting.type,
        order: sorting.order,
    })
    return (
        <>
            <Heading text="Products" type={'h1'} />
            <Container
                cols={4}
                width={'1fr'}
                gap={24}
                className={styles.container}
            >
                {isLoading && <Loader />}
                {isError && <Item>Something went wrong</Item>}
                {isSuccess &&
                    items?.apiResponse?.map((product) => (
                        <Product product={product} key={product.slug} />
                    ))}
            </Container>
            <Paginator currentPage={currentPage} data={items} />
        </>
    )
}

const Loader = () => (
    <Item colSpan={4}>
        <ContentLoader
            width={'100%'}
            height={'100%'}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
            <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
            <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
            <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
            <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
            <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
            <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
            <circle cx="286" cy="536" r="12" />
            <circle cx="319" cy="535" r="12" />
            <circle cx="353" cy="535" r="12" />
            <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
            <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
            <circle cx="210" cy="535" r="12" />
            <circle cx="428" cy="536" r="12" />
        </ContentLoader>
    </Item>
)
