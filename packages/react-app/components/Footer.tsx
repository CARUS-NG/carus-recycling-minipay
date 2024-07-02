import { CalendarDaysIcon, HomeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex pt-2 px-[10%] text-[#026937] font-medium text-sm bg-[#CCE1D7]">
      <div className='flex justify-between w-full'>
        <Link href={'/'} className='flex flex-col items-center'>
          <HomeIcon className='w-6 h-6' />
          Home
        </Link>

        <Link href={'/schedule'} className='flex flex-col items-center'>
          <CalendarDaysIcon className='w-6 h-6' />
          Schedule
        </Link>

        <Link href={'/transactions'} className='flex flex-col items-center'>
          <DocumentTextIcon className='w-6 h-6' />
          History
        </Link>
      </div>
    </footer>
  );
}
