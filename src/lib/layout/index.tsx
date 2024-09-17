import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Meta />
      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center overflow-hidden bg-[#FCFCFC]">
        <Header />
        <div className="w-full px-[5%]">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
