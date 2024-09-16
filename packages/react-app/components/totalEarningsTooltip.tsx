"use client"

import * as React from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { InfoIcon } from 'lucide-react'


export function TotalEarningsTooltip() {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    role="combobox"
                    aria-expanded={open}
                    className="flex items-center space-x-2 border rounded-lg px-3 py-2 bg-[#EFEFEF] shadow-md text-xs"
                >
                    <span className='font-medium'>Total Earnings</span>
                    <InfoIcon size={12} />
                </button>
            </PopoverTrigger>
            <PopoverContent className="p-3 bg-white text-xs">
                This is the total amount earned from recycling.
            </PopoverContent>
        </Popover>
    )
}
