import React from 'react'
import { useDisconnect } from 'wagmi'

export function Account() {
    const { disconnect } = useDisconnect()

    return (
        <div>
            <button onClick={() => disconnect()} className='bg-[#0E6A37] px-4 py-1 text-white font-bold'>Disconnect</button>
        </div>
    )
}