import * as yup from 'yup';

export const trainingPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  coach_id: yup.string().nullable().required(),
  player_id: yup.string().nullable().required(),
});
