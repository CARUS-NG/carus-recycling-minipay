import { IoIosArrowRoundBack } from 'react-icons/io';
import { useAccount } from 'wagmi';

import { useGetTotalEarning } from '@/api/schedule';
import { formatcUsd } from '@/lib/utils/format';

const History = () => {
  const { address } = useAccount();
  const { data: totalEarning } = useGetTotalEarning(address as string);

  return (
    <div className="mt-5">
      <div className="flex items-center space-x-3">
        <IoIosArrowRoundBack size={20} />
        <p className="text-xl font-semibold">Transaction History</p>
      </div>

      <p className="mt-4 text-xs">
        Total Transaction Earnings:{' '}
        <span className="font-medium text-[#008343]">
          cUSD {formatcUsd(totalEarning?.total)}
        </span>
      </p>
      <div className="bg-white">
        <p>Schedule Pickup</p>
      </div>
    </div>
  );
};

export default History;
