interface Location {
  id: number
  name: string
}
export interface Product {
  id: number
  name: string
  cost: number
  quantity: number
  locationId: number
  familyId: number
  locations: Location
}

export interface Query {
  _sort: keyof Product
  _order: 'desc' | 'asc',
  _page: number
  _limit: number
}