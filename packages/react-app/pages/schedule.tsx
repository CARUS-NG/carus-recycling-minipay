import React from 'react'
import Pickup from '../components/assets/Pickup'
import Dropoff from '../components/assets/Dropoff'
import Link from 'next/link'

const Schedule = () => {
    return (
        <div className='space-y-10 max-w-3xl mx-auto mt-5'>
            <Link href={'/pickup'} className='bg-[#F3F3F3] p-3 flex justify-between rounded-[10px] h-28'>
                <div className='flex flex-col justify-end'>
                    <p className='font-bold'>Schedule Pickup</p>
                    <p className='text-[10px]'>Request for waste pickup at your convenience</p>
                </div>
                <div className='bg-[#CCE1D7] rounded-full p-2 h-max '>
                    <Pickup/>
                </div>
            </Link>

            <Link href={'/dropoff'} className='bg-[#F3F3F3] p-3 flex justify-between rounded-[10px] h-28'>
                <div className='flex flex-col justify-end'>
                    <p className='font-bold'>Schedule Dropoff</p>
                    <p className='text-[10px]'>Request for waste drop-off at your convenience</p>
                </div>
                <div className='bg-[#CCE1D7] rounded-full p-2 h-max '>
                    <Dropoff/>
                </div>
            </Link>
        </div>
    )
}

export default Schedule