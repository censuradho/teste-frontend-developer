import { Box, Typography } from '@/components/common'
import { format } from '@/lib/date-fns'
import { Card } from './components'
import * as Styles from './styles'

export function ReportLayout () {
  const currentMonth = format(new Date(), 'LLLL')

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
          <Card icon="clock" variant="primary" title="title" amount={20} />
          <Card icon="clock" variant="secondary" title="title" amount={20} />
          <Card icon="clock" variant="tertiary" title="title" amount={20} />
        </Box>
      </Styles.Section>
    </Styles.Container>
  )
}