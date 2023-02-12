import { IconNames } from "@/components/common/icon/types"
import { VariantProps } from "@stitches/react"
import { Container } from "./styles"

export interface CardProps extends VariantProps<typeof Container>{
  title: string
  amount: number
  icon: IconNames
}