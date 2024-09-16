'use client'

import React, { useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';

import { injected } from 'wagmi/connectors';
import { Account } from './account';
import { WalletOptions } from './wallet-options';

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

    </div>
  );
}