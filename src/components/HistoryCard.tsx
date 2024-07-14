import React from 'react'
import TransactionStatus from './TransactionStatus'
import moment from 'moment'

type HistoryProps = {
    material: string
    date: number
    amount: string
    status: string
}
const HistoryCard = ({ material, date, amount, status }: HistoryProps) => {
    return (
        <div className='bg-[#F3F3F3] p-3 rounded-[10px] flex justify-between'>
            <div className='space-y-2'>
                <p className='text-xs font-medium'>{material}</p>
                <p className='text-xs font-bold text-[#026937]'>{amount} cUSD</p>
                <p className='text-[10px]'>{moment(date).toString()}</p>
            </div>
            <div className='my-auto'>
                <TransactionStatus status={status} />
            </div>
        </div>
    )
}

export default HistoryCard