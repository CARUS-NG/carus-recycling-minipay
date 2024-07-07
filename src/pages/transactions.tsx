import React, { useEffect } from 'react'
import HistoryCard from '../components/HistoryCard';
import { useAccount, useReadContract } from 'wagmi';
import { CARUS, CARUSABI } from '../constants/contractAddress';
import { formatEther } from 'viem';

const Transactions = () => {
    const { address, chainId } = useAccount()
    const { data: accountTokenBalance, isLoading: isLoading1 } = useReadContract({
        abi: CARUSABI,
        address: CARUS,
        functionName: 'accountTokenBalance',
        args: [address]
    })
    const { data: transactionByAddress, isLoading: isLoading2 } = useReadContract({
        abi: CARUSABI,
        address: CARUS,
        functionName: 'transactionByAddressFunc',
        args: [address]
    })

    if (transactionByAddress) { console.log(transactionByAddress) }

    useEffect(() => { }, [isLoading1, isLoading2])

    return (
        <div className="max-w-3xl mx-auto flex flex-col mt-5 pb-20">
            <p className='font-bold'>Total Earnings : <span className='text-[#026937]'>{accountTokenBalance ? formatEther(accountTokenBalance) : 0} cUSD</span></p>
            <div className='mt-4 space-y-2'>
                {transactionByAddress?.length > 0 ? transactionByAddress.reverse().map((item, itemIdx) => (
                    <HistoryCard
                        key={itemIdx}
                        material={item.details}
                        date={Number(item.timestamp)}
                        amount={formatEther(item.amount)}
                        status={`completed`}
                    />
                )) : <p>No transaction history data.</p>}
            </div>
        </div>
    )
}

export default Transactions