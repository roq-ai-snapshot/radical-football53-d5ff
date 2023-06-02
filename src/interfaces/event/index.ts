import { TeamInterface } from 'interfaces/team';

export interface EventInterface {
  id?: string;
  name: string;
  description?: string;
  team_id: string;
  start_date: Date;
  end_date: Date;
  created_at?: Date;
  updated_at?: Date;

  team?: TeamInterface;
  _count?: {};
}
