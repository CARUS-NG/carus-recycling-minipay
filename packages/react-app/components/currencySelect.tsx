"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'

const currencies = [
    {
        value: "ngn",
        label: <div className='flex items-center space-x-1'>
            <figure className='relative w-4 aspect-square'>
                <Image src={'/ng.png'} alt='ng' fill />
            </figure>
            <p className='text-xs font-medium'>Nigerian Naira ~ NGN</p>
        </div>,
    },
]

export function CurrencySelect() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    role="combobox"
                    aria-expanded={open}
                    className="flex items-center space-x-3 border rounded-lg p-1"
                >
                    {value
                        ? currencies.find((currency) => currency.value === value)?.label
                        : currencies[0].label}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="p-0 bg-white">
                <Command>
                    <CommandInput className='text-xs' placeholder="Search currency..." />
                    <CommandList>
                        <CommandEmpty>No currency found.</CommandEmpty>
                        <CommandGroup>
                            {currencies.map((currency) => (
                                <CommandItem
                                    key={currency.value}
                                    value={currency.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4 opacity-100",
                                        )}
                                    />
                                    {currency.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
