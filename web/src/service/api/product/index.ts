import { api } from ".."

import { Product, Query } from "./types"

function getProducts (query: Query = {
  _order: 'asc',
  _sort: 'id',
  _page: 1
}) {
  return api.get<Product[]>('/products', {
    params: {
      ...query,
      _limit: 10,
    }
  })
}

export const productService = {
  getProducts
}