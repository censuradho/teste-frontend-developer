import { FORM_ERROR_MESSAGES } from '@/constants/messages'
import * as y from 'yup'

export const loginValidationSchema = y.object({
  email: y.string().email(FORM_ERROR_MESSAGES.invalid).required(FORM_ERROR_MESSAGES.required),
  password: y.string().test('len', 'Must be bigger than 8 characters', val => (val?.length || 0) > 5).required(FORM_ERROR_MESSAGES.required),
})