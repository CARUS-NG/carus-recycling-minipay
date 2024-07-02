import React from 'react'
import { history } from '.';
import HistoryCard from '@/components/HistoryCard';

const Transactions = () => {

    return (
        <div className="max-w-3xl mx-auto flex flex-col mt-5 pb-20">
            <p className='font-bold'>Total Earnings : <span className='text-[#026937]'>0.52 cUSD</span></p>
            <div className='mt-4 space-y-2'>
                {history.map((item, itemIdx) => (
                    <HistoryCard
                        key={itemIdx}
                        material={item.material}
                        date={item.date}
                        amount={item.amount}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    )
}

export default Transactions