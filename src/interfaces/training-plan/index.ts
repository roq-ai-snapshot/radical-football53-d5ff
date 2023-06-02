import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';

export interface TrainingPlanInterface {
  id?: string;
  name: string;
  description?: string;
  coach_id: string;
  player_id: string;
  start_date: Date;
  end_date: Date;
  created_at?: Date;
  updated_at?: Date;

  coach?: CoachInterface;
  player?: PlayerInterface;
  _count?: {};
}
