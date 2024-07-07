import React, { useEffect } from "react";
import ActionButton from "../components/ActionButton";
import HistoryCard from "../components/HistoryCard";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import Pickup from "../components/assets/Pickup";
import Dropoff from "../components/assets/Dropoff";
import { CARUS, CARUSABI } from "../constants/contractAddress";
import { toast } from "react-toastify";
import { formatEther } from "viem";
import { useClaimDailyReward } from '../services/dailyClaim';

const Landing = () => {
  const { address, chainId } = useAccount()
  const { mutate: claimReward, } = useClaimDailyReward()
  const { writeContract, isPending, isError, isSuccess, isIdle, error } = useWriteContract()
  const { data: dailyReached, isLoading: isLoading1 } = useReadContract({
    abi: CARUSABI,
    address: CARUS,
    functionName: 'checkDaily',
    account: address
  })

  const { data: accountTokenBalance, isLoading: isLoading2 } = useReadContract({
    abi: CARUSABI,
    address: CARUS,
    functionName: 'accountTokenBalance',
    args: [address]
  })

  const { data: transactionByAddress, isLoading: isLoading3 } = useReadContract({
    abi: CARUSABI,
    address: CARUS,
    functionName: 'transactionByAddressFunc',
    args: [address]
  })

  if (transactionByAddress) { console.log(transactionByAddress) }


  if (isError) {
    toast.error("Error during daily mint!")
    console.log(error)
  }

  if (isPending) {
    toast.info("Processing daily mint")
  }

  if (isSuccess) {
    toast.success("Successful daily mint")
  }

  const handleSubmit = () => {
    writeContract({
      abi: CARUSABI,
      address: CARUS,
      functionName: 'dailyMint',
      account: address,
    })
  }


  return (
    <div className="flex flex-col justify-center items-center">
      {!address && (
        <div className="h1">Please install Metamask and connect.</div>
      )}

      {address && (
        <div className="max-w-3xl mx-auto flex flex-col mt-5 pb-20">
          <div className=''>
            <p className='font-bold'>Daily claim</p>
            {dailyReached ? <button className="bg-[#026937] text-white mt-2 py-5 font-medium w-full flex justify-center items-center rounded-lg cursor-pointer" onClick={handleSubmit}>Daily Mint Available</button> : <button disabled={true} className="bg-[#CCE1D7] px-5 py-5 mt-2 w-full font-medium flex justify-center items-center rounded-lg cursor-pointer">Daily Mint Not Available</button>}
          </div>

          <p className="font-bold mt-10">Quick Action</p>
          <div className="flex space-x-3 mt-3 overflow-x-auto">
            <ActionButton
              icon={<Pickup />}
              label="Schedule Pickup"
              link="/pickup"
            />
            <ActionButton
              icon={<Dropoff />}
              label="Schedule Drop-off"
              link="/dropoff"
              inactive
            />
          </div>

          <div className="mt-10">
            <div>
              <p className="font-bold text-lg">
                Total Earnings :{" "}
                <span className="text-[#026937]">
                  {accountTokenBalance ? formatEther(accountTokenBalance) : 0} cUSD
                </span>
              </p>
              <div className="mt-4 space-y-2">
                {transactionByAddress?.length > 0 ? transactionByAddress?.slice(0, 3).reverse().map((item, itemIdx) => (
                  <HistoryCard
                    key={itemIdx}
                    material={item.details}
                    date={Number(item.timestamp)}
                    amount={formatEther(item.amount)}
                    status={`completed`}
                  />
                )) : <p>No transaction history data.</p>}
                <div className="">
                  <Link
                    to={"/transactions"}
                    className="font-bold flex items-center text-[#026937]"
                  >
                    <p className="my-auto">View full transactions</p>
                    <ArrowRightIcon className="w-4 h-4 ml-3 my-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
