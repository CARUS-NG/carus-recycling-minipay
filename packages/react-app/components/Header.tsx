'use client'
import React, { useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';

import { injected } from 'wagmi/connectors';
import { Account } from './account';
import { WalletOptions } from './wallet-options';


export default function Header() {
  const { connect } = useConnect();
  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      connect({connector: injected()});
  }  }, [])
  return (
    <div className="bg-[#F3F3F3]">

    </div>
  );
}