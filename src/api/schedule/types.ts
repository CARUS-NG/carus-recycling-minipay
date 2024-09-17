export const GET_SCHEDULES_KEY = 'getSchedules' as const;

export interface Schedule {
  address: string;
  amount: string;
  category: string;
  container_amount: number;
  date: string;
  id: string;
  material: string;
  material_amount: number;
  schedule_date: string;
  status: string;
}
