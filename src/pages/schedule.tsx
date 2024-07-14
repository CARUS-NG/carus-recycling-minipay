import React from 'react'
import Pickup from '../components/assets/Pickup'
import Dropoff from '../components/assets/Dropoff'
import { Link } from 'react-router-dom'
import { useGetSchedules } from '../services/schedule'
import HistoryCard from '../components/HistoryCard'
import { useAccount } from 'wagmi'

const Schedule = () => {
    const { address } = useAccount()
    const { data } = useGetSchedules(address as string)
    console.log(data)
    return (
        <div className='space-y-10 max-w-3xl mx-auto mt-5 pb-24'>
            <Link to={'/pickup'} className='bg-[#F3F3F3] p-3 flex justify-between rounded-[10px] h-28'>
                <div className='flex flex-col justify-end'>
                    <p className='font-bold'>Schedule Pickup</p>
                    <p className='text-[10px]'>Request for waste pickup at your convenience</p>
                </div>
                <div className='bg-[#CCE1D7] rounded-full p-2 h-max '>
                    <Pickup />
                </div>
            </Link>

            <Link to={'/dropoff'} className='bg-[#F3F3F3] p-3 flex justify-between rounded-[10px] h-28'>
                <div className='flex flex-col justify-end'>
                    <p className='font-bold'>Schedule Dropoff</p>
                    <p className='text-[10px]'>Request for waste drop-off at your convenience</p>
                </div>
                <div className='bg-[#CCE1D7] rounded-full p-2 h-max '>
                    <Dropoff />
                </div>
            </Link>

            <div className=''>
                <p className='font-bold mt-3'>Schedule History</p>
                <div className='space-y-3 mt-3'>
                    {data?.map((item) => (
                        <HistoryCard amount={item?.amount} date={item?.date} material={item?.material} status={item?.status} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Schedule