import { Avatar, Icon, ActiveLink } from '@/components/common'
import { paths } from '@/constants/routes'
import { useAuth } from '@/context/auth'
import * as Styles from './styles'
import { NavigationProps } from './types'

export function Navigation (props: NavigationProps) {
  const {
    open,
    onToggleMenu
  } = props
  
  const { onSignOut } = useAuth()

  return (
    <Styles.Overlay onClick={onToggleMenu}  open={open}>
      <Styles.Navigation onClick={event => event.stopPropagation()}>
        <Styles.Header>
          <Styles.Root>
            <Styles.Trigger>
              <Avatar alt="username" />
              <Styles.Username>Username</Styles.Username>
            </Styles.Trigger>
            <Styles.Portal>
              <Styles.DropdownMenuContent sideOffset={5}>
                <Styles.DropdownMenuItem>Perfil</Styles.DropdownMenuItem>
                <Styles.DropdownMenuSeparator />
                <Styles.DropdownMenuItem onClick={onSignOut}>Sair</Styles.DropdownMenuItem>
              </Styles.DropdownMenuContent>
            </Styles.Portal>
          </Styles.Root>
        </Styles.Header>
        <Styles.List>
          {/* <Styles.Item>
            <ActiveLink href={paths._members.list}>
              <Icon name="users" />
              Product
            </ActiveLink>
          </Styles.Item> */}
        </Styles.List>
      </Styles.Navigation>
    </Styles.Overlay>
  )
}