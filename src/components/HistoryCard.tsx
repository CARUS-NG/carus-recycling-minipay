import React from 'react'
import TransactionStatus from './TransactionStatus'

type HistoryProps = {
    material: string
    date: number
    amount: string
    status: string
}
const HistoryCard = ({ material, date, amount, status }: HistoryProps) => {
    const timestamp = date * 1000;
    const newdate = new Date(timestamp);
    return (
        <div className='bg-[#F3F3F3] p-3 rounded-[10px] flex justify-between'>
            <div className='space-y-2'>
                <p className='text-xs font-medium'>{material}</p>
                <p className='text-xs font-bold text-[#026937]'>{amount} cUSD</p>
                <p className='text-xs'>{`${newdate.getDay()}/${newdate.getMonth() + 1}/${newdate.getFullYear()} ${newdate.getHours()}:${newdate.getMinutes()}${newdate.getHours() > 11 ? "PM" : "AM"}`}</p>
            </div>
            <div className='my-auto'>
                <TransactionStatus status={status} />
            </div>
        </div>
    )
}

export default HistoryCard