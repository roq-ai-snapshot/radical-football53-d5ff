import * as yup from 'yup';
import { trainingPlanValidationSchema } from 'validationSchema/training-plans';

export const playerValidationSchema = yup.object().shape({
  position: yup.string(),
  birth_date: yup.date(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  training_plan: yup.array().of(trainingPlanValidationSchema),
});
