import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

import { useGetSchedules, useGetTotalEarning } from '@/api/schedule';
import Loader from '@/lib/components/loader';
import TransactionCard from '@/lib/components/transactionCard';
import { formatcUsd } from '@/lib/utils/format';

const History = () => {
  const { address } = useAccount();
  const { data: totalEarning } = useGetTotalEarning(address as string);
  const navigate = useNavigate();
  const { data: schedules, isPending: isLoadingGetSchedules } = useGetSchedules(
    address as string
  );

  return (
    <div className="mt-5">
      <div className="flex items-center space-x-3">
        <button aria-label="back" type="button" onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack size={20} />
        </button>
        <p className="text-xl font-semibold">Transaction History</p>
      </div>

      <p className="mt-4 text-xs">
        Total Transaction Earnings:{' '}
        <span className="font-medium text-[#008343]">
          cUSD {formatcUsd(totalEarning?.total)}
        </span>
      </p>
      <div className="mt-10 space-y-2">
        {schedules &&
          !isLoadingGetSchedules &&
          schedules.map((transaction) => (
            <TransactionCard transaction={transaction} />
          ))}
        {!schedules && isLoadingGetSchedules && <Loader />}
        {!isLoadingGetSchedules && !schedules && (
          <div className="mx-auto flex max-w-[60%] flex-col items-center text-center">
            <img
              className="mx-auto pt-10"
              src="/assets/garbage.png"
              alt="empty"
            />
            <p className="text-sm font-semibold">No transaction history</p>
            <p className="text-xs text-gray-500">
              Your data history is currently empty. Start recycling today to see
              your impact.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
