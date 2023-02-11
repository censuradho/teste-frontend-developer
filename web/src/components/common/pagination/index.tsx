import { useState } from 'react';
import { Box } from '../box'
import * as Styles from './styles'
import { PaginationProps } from './types'

export function Pagination (props: PaginationProps) {
  const {
    currentPage,
    totalPages,
    onPageChange
  } = props
  const rowsPerPage = 10
  const start =  (currentPage - 1) / rowsPerPage

  const end = currentPage * rowsPerPage

  const pageBullets = Array(totalPages)
    .fill(1)
    .map((_, index) => index + 1)
 
  const offsetBullet = pageBullets.slice(start, end)

  const renderBullets = offsetBullet.map((item) => (
    <button key={item} onClick={() => onPageChange(item)}>{item}</button>
  ))

  console.log(start, end)
  return (
    <Styles.Container>
      <Box gap={1}>
        {renderBullets}
        {/* <Styles.Controller onClick={() => onPageChange(currentPage > 1 ? currentPage -1 : 0)}>Prev</Styles.Controller>
        <Styles.CurrentPageInput 
          value={currentPage} 
          max={totalPages}
          min={1}
          type="number"
          defaultValue={1}
          onChange={event => onPageChange(Number(event.target.value))}
        />
        <Styles.Controller onClick={() => onPageChange(currentPage + 1)}>Next</Styles.Controller> */}
      </Box>
    </Styles.Container>
  )
}