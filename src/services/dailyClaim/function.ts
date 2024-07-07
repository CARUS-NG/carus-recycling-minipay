import { GeneralApiResponse } from '../../@types';
import http from '../http';

export const postDailyClaim = async (data: { oxAddress: string }): Promise<GeneralApiResponse<object>> => {
    const res = await http.post('/rewards/daily-claim', data);
    return res.data;
};