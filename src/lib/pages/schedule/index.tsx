import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import { emitCommingSoonToast } from '@/lib/components/comingSoonToast';

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-5">
      <div className="flex items-center space-x-3">
        <button aria-label="back" type="button" onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack size={20} />
        </button>
        <p className="text-xl font-semibold">Schedule</p>
      </div>

      <Link
        to="/schedule/pickup"
        className="mt-5 flex w-full items-center space-x-2 rounded-xl bg-white text-start"
      >
        <img src="/assets/pickup.png" alt="pickup" className="h-max w-20" />
        <div className="p-5">
          <p className="text-sm font-semibold">Schedule Pickup</p>
          <p className="text-xs text-gray-500">
            Schedule your next pickup to recycle waste easily. Tap to set a
            date!
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={emitCommingSoonToast}
        className="mt-5 flex w-full items-center space-x-2 rounded-xl border bg-[#C3C3C31A] text-start"
      >
        <img src="/assets/dropoff.png" alt="dropoff" className="h-max w-20" />
        <div className="p-5">
          <p className="text-sm font-semibold">Schedule Drop-off</p>
          <p className="text-xs text-gray-500">Coming soon!</p>
        </div>
      </button>
    </div>
  );
};

export default Schedule;
