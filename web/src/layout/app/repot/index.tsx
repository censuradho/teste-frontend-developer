import { Box, Typography } from '@/components/common'
import { format } from '@/lib/date-fns'
import { transactionService } from '@/service/api/transactions'
import { useEffect, useState } from 'react'
import { Card } from './components'
import * as Styles from './styles'

export function ReportLayout () {
  const [transactions, setTransactions] = useState([])

  const handleGetTransactions = async () => {
    const { data } = await transactionService.findAll()
    console.log(data)
  }

  const currentMonth = format(new Date(), 'LLLL')

  useEffect(() => {
    handleGetTransactions()
  }, [])

  return (
    <Styles.Container>
      <Styles.Header>
        <Typography size="lg" color="heading" fontWeight="800">Relatório</Typography>
        <Box>
          <Typography fontWeight="600" color="heading">Referente ao mês de {currentMonth}</Typography>
        </Box>
      </Styles.Header>
      <Styles.Section>
        <Box 
          fullWidth
          gap={2}
          flexDirection={{
            '@initial': 'column',
            '@table-min': 'row'
          }}
        >
          <Card icon="clock" title="title" amount={20} />
          <Card icon="clock" title="title" amount={20} />
          <Card icon="clock" title="title" amount={20} />
        </Box>
      </Styles.Section>
    </Styles.Container>
  )
}