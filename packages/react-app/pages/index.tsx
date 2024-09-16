'use client'
import React from "react";
import { useAccount } from "wagmi";

import Image from 'next/image';
import { ROBO_URL } from '@/utils';
import { CurrencySelect } from '@/components/currencySelect';
import FormatBalance from '@/components/formatBalance';
import { TotalEarningsTooltip } from '@/components/totalEarningsTooltip';
import { ChevronRight } from 'lucide-react';

const Home = () => {
    const { address, chainId } = useAccount()
    // const { mutate: claimReward, } = useClaimDailyReward()
    // const { writeContract, isPending, isError, isSuccess, isIdle, error } = useWriteContract()
    // const { data: dailyReached, isLoading: isLoading1 } = useReadContract({
    //     abi: CARUSABI,
    //     address: CARUS,
    //     functionName: 'checkDaily',
    //     account: address
    // })

    // const wait = (milliseconds: any) => {
    //     return new Promise((resolve) => {
    //         setTimeout(resolve, milliseconds);
    //     });
    // };

    // const waitPage = async () => {
    //     await wait(9000);
    //     window.location.reload();
    // }

    // const { data: accountTokenBalance, isLoading: isLoading2 } = useReadContract({
    //     abi: CARUSABI,
    //     address: CARUS,
    //     functionName: 'accountTokenBalance',
    //     args: [address]
    // })

    // const { data: transactionByAddress, isLoading: isLoading3 } = useReadContract({
    //     abi: CARUSABI,
    //     address: CARUS,
    //     functionName: 'transactionByAddressFunc',
    //     args: [address]
    // })

    // if (transactionByAddress) { console.log(transactionByAddress) }


    // if (isError) {
    //     toast.error("Error during daily mint!")
    //     console.log(error)
    // }

    // if (isPending) {
    //     toast.info("Processing daily mint")
    // }

    // if (isSuccess) {
    //     toast.success("Successful daily mint")
    //     waitPage()
    // }

    // const handleSubmit = () => {
    //     writeContract({
    //         abi: CARUSABI,
    //         address: CARUS,
    //         functionName: 'dailyMint',
    //         account: address,
    //     })
    // }


    return (
        <div className="flex flex-col justify-center items-center">
            {!address && (
                <div className="h1">Please install Metamask and connect.</div>
            )}

            {address && (
                <div className="w-full mx-auto flex flex-col mt-5 pb-20">
                    <div className='w-full flex space-x-2 justify-start items-center'>
                        <figure className='relative w-10 aspect-square rounded-full'>
                            <Image src={`${ROBO_URL}/gg`} alt='avatar' fill />
                        </figure>
                        <div>
                            <p className='text-xs'>Hello, 👋🏿</p>
                            <p className='text-base font-medium'>Welcome to Carus!</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-4 space-y-5'>
                        <CurrencySelect />

                        <div className='flex items-end space-x-1 '>
                            <p className='text-xs'>cUSD</p>
                            <FormatBalance value={321.42} decimalClassName='text-xl font-semibold' wholeNumberClassName='text-4xl font-semibold' />
                        </div>

                        <TotalEarningsTooltip />
                    </div>

                    <div className='flex flex-col mt-4'>
                        <p className='font-semibold text-xl'>Quick Actions</p>
                        <div className='grid grid-cols-3 gap-3 mt-3'>
                            <div className='bg-white flex flex-col items-center py-3 rounded-xl'>
                                <figure className='relative w-16 aspect-square object-contain'>
                                    <Image src='/pickup.png' alt='pickup' fill />
                                </figure>
                                <p className='text-xs font-medium mt-2'>Pickup</p>
                            </div>
                            <div className='bg-white flex flex-col items-center py-3 rounded-xl'>
                                <figure className='relative w-16 aspect-square object-contain'>
                                    <Image src='/gift.png' alt='gift' fill />
                                </figure>
                                <p className='text-xs font-medium mt-2'>Daily Claim</p>
                            </div>
                            <div className='border-2 flex flex-col items-center py-3 rounded-xl cursor-not-allowed'>
                                <figure className='relative w-16 aspect-square object-contain'>
                                    <Image src='/dropoff.png' alt='dropoff' fill />
                                </figure>
                                <p className='text-xs text-[#0000004D] font-medium mt-2'>Pickup</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-4'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-xl'>Transaction History</p>
                            <div className='bg-white rounded-full p-1.5 border shadow-md'>
                                <ChevronRight size={12}/>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
