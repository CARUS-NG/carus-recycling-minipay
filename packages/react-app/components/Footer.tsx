import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 py-6'>
      <div className='flex justify-between'>
        <Link href={'/'}>
          <Home className='text-[#036937]'/>
        </Link>

      </div>
    </footer>
  )
}

export default Footer