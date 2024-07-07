import { useMutation } from '@tanstack/react-query';
import { postDailyClaim } from './function';
import { toast } from 'react-toastify';

export const useClaimDailyReward = () => {
    const { mutate, isPending, isError, error, isSuccess: dailyClaimSuccess } = useMutation({
        mutationFn: postDailyClaim,
       
    });

    return { mutate, isPending, isError, error, dailyClaimSuccess };
};