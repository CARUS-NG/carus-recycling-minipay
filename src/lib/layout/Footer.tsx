import { CiUser } from 'react-icons/ci';
import { FiFileText } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi2';
import { IoCalendarOutline } from 'react-icons/io5';

import FooterLink from '../components/footerLink';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-between border-t bg-white px-[10%] py-6">
      <FooterLink icon={HiHome} text="Home" link="/" />
      <FooterLink icon={IoCalendarOutline} text="Schedule" link="/schedule" />
      <FooterLink icon={FiFileText} text="History" link="/history" />
      <FooterLink icon={CiUser} text="Profile" link="/profile" />
    </footer>
  );
};

export default Footer;
