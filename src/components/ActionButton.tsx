import React from 'react'
import { Link } from 'react-router-dom'

type ActionButtonProps = {
    icon: React.JSX.Element
    label: string
    link: string
    inactive?: boolean
}
const ActionButton = ({ icon, label, link, inactive }: ActionButtonProps) => {
    return (
        <Link to={link} className={`${inactive ? 'cursor-not-allowed' : 'cursor-pointer'} bg-[#CCE1D7] flex flex-col items-center w-32 p-3 rounded-[10px] space-y-2`}>
            {icon}
            <p className='text-xs font-semibold'>{label}</p>
        </Link>
    )
}

export default ActionButton