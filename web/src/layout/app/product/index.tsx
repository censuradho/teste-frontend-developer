import { Box, Pagination, Typography } from '@/components/common'
import { productService } from '@/service/api/product'
import { Product, Query } from '@/service/api/product/types'
import { useEffect, useState } from 'react'
import * as Styles from './styles'
import qs from 'querystring'

import { TableComponent } from '@/components/common'
import { useRouter } from 'next/router'
import { paths } from '@/constants/routes'

import { toLocaleString } from '@/utils/helpers'

export function ProductLayout () {
  const router = useRouter()
  
  const {
    _order = 'asc',
    _sort = 'id',
    _page = 1
  } = (router.query as any || {}) as Query

  const perPage = 10
  const [products, setProducts] = useState<Product[]>([])
  const [totalPages, setTotalPages] = useState(0)

  const handleGetProducts = async (query: Query) => {
    const { data, headers } = await productService.getProducts(query)
    setProducts(data)
    setTotalPages(Math.ceil(headers['x-total-count'] / 10))
  }


  const handleSortBy = (sort: Query['_sort']) => {
    const isAsc = sort !== _sort || _order === 'desc'

    const orderParsed = {
      asc: isAsc,
      desc: !isAsc
    }

    const [orderValue] = Object
      .entries(orderParsed)
      .filter(([key, value]) => value)
      .map(([key]) => key)

    const _query = qs.stringify({
      _sort: sort,
      _page,
      _order: orderValue,
    })

    router.push(`${paths.app.product}?${_query}`)
  }

  const handlePageChange = (page: number) => {
    const query= qs.stringify({
      _order,
      _sort,
      _page: page
    }) 

    router.push(`${paths.app.product}?${query}`)

  }
  const renderProducts = products.map(product => (
    <TableComponent.Tr key={product.id}>
      <TableComponent.Td>{product.id}</TableComponent.Td>
      <TableComponent.Td>{product.name}</TableComponent.Td>
      <TableComponent.Td>{toLocaleString(product.cost)}</TableComponent.Td>
      <TableComponent.Td>{product.quantity}</TableComponent.Td>
    </TableComponent.Tr>
  ))

  useEffect(() => {
    handleGetProducts({
      _order,
      _sort,
      _page,
      _limit: perPage
    })
  }, [_order, _page, _sort])

  return (
    <Styles.Container>
      <Box flexDirection="column">
        <Styles.Header>
          <Typography size="lg" color="heading" fontWeight="800">Dashboard</Typography>
        </Styles.Header>
        <Styles.Section>
          <Styles.SectionHeader>
            <Typography size="md" color="heading" fontWeight="600">Products</Typography>
          </Styles.SectionHeader>
          <TableComponent.Table>
            <TableComponent.THead>
              <TableComponent.Tr>
                <TableComponent.Th  
                  onClick={() => handleSortBy('id')}
                >ID</TableComponent.Th>
                <TableComponent.Th
                  onClick={() => handleSortBy('name')}
                >Nome</TableComponent.Th>
                <TableComponent.Th
                  onClick={() => handleSortBy('cost')}  
                >Preço</TableComponent.Th>
                <TableComponent.Th
                  onClick={() => handleSortBy('quantity')}  
                >Quantidade</TableComponent.Th>
              </TableComponent.Tr>
            </TableComponent.THead>
            <TableComponent.TBody>
              {renderProducts}
            </TableComponent.TBody>
          </TableComponent.Table>
          <Styles.SectionFooter>
            <Pagination 
              currentPage={Number(_page)}
              totalPages={Number(totalPages)}
              onPageChange={(page) => handlePageChange(page)}
            />
          </Styles.SectionFooter>
        </Styles.Section>
      </Box>
    </Styles.Container>
  )
}