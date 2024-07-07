import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
    const { connectors, connect } = useConnect()

    return connectors.map((connector) => (
        <button key={connector.uid} onClick={() => connect({ connector })} className='bg-[#0E6A37] px-4 py-1 text-white font-bold'>
            {connector.name}
        </button>
    ))
}