import { productService } from "@/service/api/product"
import { useEffect } from "react"

export default function HomePage () {
  useEffect(() => {
    productService.getProducts()
  }, [])

  return (
    <h1>Home</h1>
  )
}