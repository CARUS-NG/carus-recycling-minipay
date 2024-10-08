import { useMutation, useQuery } from '@tanstack/react-query';

import { getSchedules, getTotalEarning, postSchedulePickup } from './function';
import { GET_SCHEDULES_KEY, GET_TOTAL_EARNING_KEY } from './types';

export const useSchedulePickup = () => {
  const {
    mutate,
    isPending,
    isError,
    error,
    isSuccess: schedulePickupSucces,
  } = useMutation({
    mutationFn: postSchedulePickup,
  });

  return { mutate, isPending, isError, error, schedulePickupSucces };
};

export const useGetSchedules = (ox: string) => {
  const { data, isPending } = useQuery({
    queryKey: [GET_SCHEDULES_KEY],
    queryFn: () => getSchedules(ox),
  });

  return { data, isPending };
};

export const useGetTotalEarning = (ox: string) => {
  const { data, isPending } = useQuery({
    queryKey: [GET_TOTAL_EARNING_KEY],
    queryFn: () => getTotalEarning(ox),
  });

  return { data, isPending };
};
