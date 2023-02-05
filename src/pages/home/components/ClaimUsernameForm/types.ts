import { z } from 'zod'

export const claimUsernameFormSchema = z.object({
  username: z.string(),
})

export type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>
