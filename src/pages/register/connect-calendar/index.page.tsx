import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'
import { RegisterFormData } from './types'

export default function Register() {
  // async function handleRegister(data: RegisterFormData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao VG Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
