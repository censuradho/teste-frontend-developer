import { useState } from 'react';
import { Box } from '../box'
import { Icon } from '../icon';
import * as Styles from './styles'
import { PaginationProps } from './types'

export function Pagination (props: PaginationProps) {
  const {
    currentPage,
    totalPages,
    onPageChange
  } = props
  const rowsPerPage = 10

  const forward2x = ">>"
  const forward = ">"
  const backward2x = "<<"
  const backward = "<"

  const isBiggerThanMin = currentPage > 1
  const isLessThanMax = currentPage < totalPages


  const handlePageChange = (value: number) => {
    onPageChange(value + Number(currentPage))
  }

  return (
    <Styles.Container>
      <Box gap={0.3}>
        <Styles.Bullet disabled={!isBiggerThanMin} active onClick={() => handlePageChange(-2)}>
          {backward2x}
        </Styles.Bullet>
        <Styles.Bullet disabled={!isBiggerThanMin} onClick={() => handlePageChange(-1)}>
          {backward}
        </Styles.Bullet>
        <Styles.CurrentPageInput
          type="number"
          min={1}
          value={currentPage}
          defaultValue={currentPage}
          onChange={(event) => handlePageChange(Number(event.target.value))}
        />
        <Styles.Bullet disabled={!isLessThanMax} onClick={() => handlePageChange(1)}>
          {forward}
        </Styles.Bullet>
        <Styles.Bullet disabled={!isLessThanMax} active onClick={() => handlePageChange(2)}>
          {forward2x}
        </Styles.Bullet>
      
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