import { Box, Button } from '@/components/common'
import { InputForm, InputPassword } from '@/components/common/hook-form'
import { Typography } from '@/components/common/typography'
import { useForm } from 'react-hook-form'
import * as Styles from './styles'
import { LoginFormData } from './types'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidationSchema } from './validations'
import { useBoolean } from '@/hooks'
import { authService } from '@/service/api/auth'

export function LoginLayout () {

  const [isLoading, toggleIsLoading] = useBoolean(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidationSchema)
  })

  
  
  const onSubmit = async (data: LoginFormData) => {
    try {
      toggleIsLoading()

      await authService.signInWithEmailPassword(data)
    } finally {
      toggleIsLoading()
    }
  }

  return (
    <Styles.Container>
      <Styles.Info>
        <div style={{ maxWidth: '400px' }}>
          <Styles.Title>Login</Styles.Title>
          <Typography fontWeight="500" color="heading" size="md">Faça o login para começar a desapegar</Typography>
        </div>
      </Styles.Info>
      <Styles.Section>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          <Box flexDirection="column" gap={1} fullWidth>
            <InputForm
              fullWidth
              id="email"
              label="E-mail"
              register={register('email')}
              errorMessage={errors?.email?.message}
            />
            <InputPassword 
              fullWidth
              label="Senha"
              id="password"
              register={register('password')}
              errorMessage={errors?.password?.message}
            />
          </Box>
          <Box marginTop={2} fullWidth>
            <Button 
              type="submit" 
              loading={isLoading} 
              fullWidth
            >Logar</Button>
          </Box>
        </Styles.Form>
      </Styles.Section>
    </Styles.Container>
  )
}