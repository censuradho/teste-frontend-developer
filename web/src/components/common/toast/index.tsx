import * as Styles from './styles'
import { ToastProps } from './types'

export function Toast (props: ToastProps) {
  const { 
    onOpenChange,
    open
  } = props


  return (
    <Styles.Provider>
      <Styles.Root
        duration={3000}
        open={open} 
        onOpenChange={onOpenChange}
      >
        <Styles.Title>Title</Styles.Title>
        <Styles.Description >Description </Styles.Description>
      </Styles.Root>
      <Styles.Viewport />
    </Styles.Provider>
  )
}