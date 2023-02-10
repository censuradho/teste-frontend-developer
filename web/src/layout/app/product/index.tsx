import { useToast } from '@/context'
import * as Styles from './styles'

export function ProductLayout () {
  const { onNotify } = useToast()

  return (
    <Styles.Container>
      <h1>product</h1>
      <button onClick={() => onNotify({ 
        title: '',
        description: ''
      })}>toast</button>
    </Styles.Container>
  )
}