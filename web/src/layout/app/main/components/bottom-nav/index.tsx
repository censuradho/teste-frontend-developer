import { Icon } from '@/components/common'
import { ActiveLink } from '@/components/common/active-link'
import { paths } from '@/constants/routes'
import * as Styles from './styles'
import { BottomNavProps } from './types'

export function BottomNav (props: BottomNavProps) {
  const {
    onToggleMenu
  } = props

  return (
    <Styles.Navigation>
      <Styles.List>
        <Styles.Item>
          <ActiveLink href={paths.app.product}>
            <Icon name="users" size={20} />
            <span>Products</span>
          </ActiveLink>
        </Styles.Item>
      </Styles.List>      
    </Styles.Navigation>
  )
}