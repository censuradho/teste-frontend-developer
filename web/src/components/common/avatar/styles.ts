import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  background: '$primary',
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    lineHeight: 0,
    fontSize: '1vw',
    color: '$background',
    textTransform: 'uppercase'
  }
})
