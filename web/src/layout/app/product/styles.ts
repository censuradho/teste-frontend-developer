import { styled } from 'stitches.config'

export const Container = styled('div', {
  padding: '2rem 1rem'
})

export const Header = styled('header', {
  marginBottom: '1.3rem'
})

export const Section = styled('section', {
  background: '$background',
  borderRadius: '$default',
  maxHeight: '31.25rem',
  overflowY: 'auto',
  padding: '1rem 0.5rem 1rem 1rem',

  table: {
    border: '1px solid $border',
    borderRadius: '$default',
    th: {
      cursor: 'pointer',
      userSelect: 'none'
    }
  }
})

export const SectionHeader = styled('header', {
  padding: '1.3rem',
  position: 'sticky',
  left: 0,
})