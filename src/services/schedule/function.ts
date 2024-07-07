import { GeneralApiResponse } from '../../@types';
import { Schedule } from '../../@types/schedule';
import http from '../http';

export const postSchedulePickup = async (data: { oxAddress: string; material: string; material_amount: number; container_amount: number; address: string; date: string }): Promise<GeneralApiResponse<object>> => {
    const res = await http.post('/schedule/pickup', data);
    return res.data;
};

export const getSchedules = async (ox: string): Promise<any> => {
    const res = await http.get(`/schedule/${ox}`);
    return res.data.data;
};