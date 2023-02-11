import { styled } from 'stitches.config'

export const Container = styled('div', {})

export const Controller = styled('button', {
  fontSize: '$xsm',
  textTransform: 'uppercase',
  fontWeight: 600,
  background: '$primaryLight',
  color: '$heading',
  padding: '0.3rem 0.7rem',
  borderRadius: '$default',
  transition: '0.2s',

  '&:hover': {
    color: '#fff',
    background: '$ancesst0'
  }
})

export const CurrentPageInput = styled('input', {
  border: 'none',
  outline: 'none',
  width: '5rem',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  color: '$heading',
  fontWeight: 500,
  background: '$foreground',
  borderRadius: '$default',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  }
})