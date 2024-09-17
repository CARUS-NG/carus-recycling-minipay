import { ChevronRight } from 'lucide-react';
import { useAccount } from 'wagmi';

import { CurrencySelect } from '../../components/currencySelect';
import FormatBalance from '../../components/formatBalance';
import { TotalEarningsTooltip } from '../../components/totalEarningsTooltip';
import TransactionCard from '../../components/transactionCard';
import { ROBO_URL } from '../../utils/index';

const Home = () => {
  const { address } = useAccount();
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

  const transactions = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {!address && (
        <div className="h1">Please install Metamask and connect.</div>
      )}

      {address && (
        <div className="mx-auto mt-5 flex w-full flex-col pb-20">
          <div className="flex w-full items-center justify-start space-x-2">
            <img
              src={`${ROBO_URL}/gg`}
              alt="avatar"
              className="aspect-square w-10 rounded-full"
            />
            <div>
              <p className="text-xs">Hello, 👋🏿</p>
              <p className="text-base font-medium">Welcome to Carus!</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center space-y-5">
            <CurrencySelect />

            <div className="flex items-end space-x-1">
              <p className="text-xs">cUSD</p>
              <FormatBalance
                value={321.42}
                decimalClassName="text-xl font-semibold"
                wholeNumberClassName="text-4xl font-semibold"
              />
            </div>

            <TotalEarningsTooltip />
          </div>

          <div className="mt-4 flex flex-col">
            <p className="text-xl font-semibold">Quick Actions</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center rounded-xl bg-white py-3">
                <img
                  src="/assets/pickup.png"
                  alt="pickup"
                  className="relative aspect-square w-16 object-contain"
                />
                <p className="mt-2 text-xs font-medium">Pickup</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-white py-3">
                <img
                  src="/assets/gift.png"
                  alt="gift"
                  className="relative aspect-square w-16 object-contain"
                />
                <p className="mt-2 text-xs font-medium">Daily Claim</p>
              </div>
              <div className="flex cursor-not-allowed flex-col items-center rounded-xl border-2 py-3">
                <img
                  src="/assets/dropoff.png"
                  alt="dropoff"
                  className="relative aspect-square w-16 object-contain"
                />
                <p className="mt-2 text-xs font-medium text-[#0000004D]">
                  Pickup
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">Transaction History</p>
              <div className="rounded-full border bg-white p-1.5 shadow-md">
                <ChevronRight size={12} />
              </div>
            </div>
            {transactions.slice(0, 3).map((transaction) => (
              <TransactionCard />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
