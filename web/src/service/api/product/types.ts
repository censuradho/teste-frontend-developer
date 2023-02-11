export interface Product {
  id: number
  name: string
  cost: number
  quantity: number
  locationId: number
  familyId: number
}

export interface Query {
  _sort: keyof Product
  _order: 'desc' | 'asc',
  _page: number
}