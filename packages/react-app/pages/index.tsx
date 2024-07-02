/* eslint-disable react-hooks/exhaustive-deps */
import ActionButton from '@/components/ActionButton';
import HistoryCard from '@/components/HistoryCard';
import Dropoff from '@/components/assets/Dropoff';
import Pickup from '@/components/assets/Pickup';
import { useWeb3 } from "@/contexts/useWeb3";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {
    useEffect,
    // useState
} from "react";

export const history = [
    {
        material: 'Plastic',
        date: '25 Feb 2024',
        amount: '0.52',
        status: 'completed'
    },
    {
        material: 'Plastic',
        date: '29 Mar 2024',
        amount: '0.00',
        status: 'pending'
    },
    {
        material: 'Plastic',
        date: '12 Jan 2024',
        amount: '0.00',
        status: 'cancelled'
    },
    {
        material: 'Plastic',
        date: '25 Feb 2024',
        amount: '0.00',
        status: 'accepted'
    },
    {
        material: 'Plastic',
        date: '25 Feb 2024',
        amount: '0.00',
        status: 'cancelled'
    },
]

export default function Home() {
    const {
        address,
        getUserAddress,
        // sendCUSD,
        // signTransaction,
    } = useWeb3();
    // const [cUSDLoading, setCUSDLoading] = useState(false);
    // const [signingLoading, setSigningLoading] = useState(false);
    // const [tx, setTx] = useState<any>(undefined);

    useEffect(() => {
        getUserAddress();
    }, []);

    // async function sendingCUSD() {
    //     if (address) {
    //         setSigningLoading(true);
    //         try {
    //             const tx = await sendCUSD(address, "0.1");
    //             setTx(tx);
    //         } catch (error) {
    //             console.log(error);
    //         } finally {
    //             setSigningLoading(false);
    //         }
    //     }
    // }

    // async function signMessage() {
    //     setCUSDLoading(true);
    //     try {
    //         await signTransaction();
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setCUSDLoading(false);
    //     }
    // }

    return (
        <div className="flex flex-col justify-center items-center">
            {!address && (
                <div className="h1">Please install Metamask and connect.</div>
            )}

            {address && (
                <div className="max-w-3xl mx-auto flex flex-col mt-5 pb-20">
                    <p className='font-bold'>Quick Action</p>
                    <div className='flex space-x-3 mt-3'>
                        <ActionButton icon={<Pickup />} label='Schedule Pickup' link='/pickup' />
                        <ActionButton icon={<Dropoff />} label='Schedule Drop-off' link='/dropoff' inactive />
                    </div>

                    <div className='mt-10'>
                        <div>
                            <p className='font-bold'>Total Earnings : <span className='text-[#026937]'>0.52 cUSD</span></p>
                            <div className='mt-4 space-y-2'>
                                {history.slice(0, 3).map((item, itemIdx) => (
                                    <HistoryCard
                                        key={itemIdx}
                                        material={item.material}
                                        date={item.date}
                                        amount={item.amount}
                                        status={item.status}
                                    />
                                ))}
                                <div className=''>
                                    <Link href={'/transactions'} className='font-bold flex items-center text-[#026937]'>
                                        <p className='my-auto'>View full transactions</p>
                                        <ArrowRightIcon className='w-4 h-4 ml-3 my-auto' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
