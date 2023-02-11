import { api } from ".."

import { Product, Query } from "./types"

function getProducts (query: Query = {
  _order: 'asc',
  _sort: 'id',
  _page: 1,
  _limit: 10
}) {
  return api.get<Product[]>('/products', {
    params: {
      ...query,
    }
  })
}

export const productService = {
  getProducts
}