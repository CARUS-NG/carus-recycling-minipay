
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import { Account } from './account';
import { WalletOptions } from './wallet-options';
import { injected } from 'wagmi/connectors';

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

export default function Header() {
  const { connect } = useConnect();
  useEffect(() => {
    connect({ connector: injected() })
  }, [])
  return (
    <div className="bg-[#F3F3F3]">
      <div className="max-w-3xl mx-auto py-3 px-2">
        <div className="flex justify-between items-center">
          <Link to={'/'}>
            <img
              className="block h-8 w-auto"
              src="/logo.svg"
              width="24"
              height="24"
              alt="Carus Logo"
            />
          </Link>
          {/* <ConnectWallet /> */}
        </div>
      </div>
    </div>
  );
}

// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }
