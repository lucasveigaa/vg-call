import { z } from 'zod'

export const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 caracteres.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLocaleLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' }),
})

export type RegisterFormData = z.infer<typeof registerFormSchema>
