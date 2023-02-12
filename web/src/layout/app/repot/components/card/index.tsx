import { Box, Icon, Typography } from '@/components/common'
import * as Styles from './styles'
import { CardProps } from './types'

import { toLocaleString } from '@/utils/helpers'

export function Card (props: CardProps) {
  const { 
    amount,
    title,
    variant,
    icon
  } = props

  return (
    <Styles.Container variant={variant}>
      <Box flexDirection="column" gap={0.7}>
        <Box justifyContent="space-between" alignItems="center">
          <Typography size="md" fontWeight="600" >{title}</Typography>
          <Styles.IconView>
            <Icon name={icon} />
          </Styles.IconView>
        </Box>
        <Typography fontWeight="500">{toLocaleString(amount) }</Typography>
      </Box>
    </Styles.Container>
  )
}