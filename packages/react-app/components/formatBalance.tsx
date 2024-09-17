'use client'
import React from 'react';

interface NumberProps {
    value: number;
    wholeNumberClassName: string
    decimalClassName: string
}

const FormatBalance: React.FC<NumberProps> = ({ value, wholeNumberClassName, decimalClassName }) => {
    const wholePart = Math.floor(value);
    const decimalPart = value % 1 !== 0 ? value.toString().split('.')[1] : null;

    return (
        <div>
            <span className={wholeNumberClassName}>
                {wholePart}
            </span>
            {decimalPart && (
                <span className={decimalClassName}>
                    .{decimalPart}
                </span>
            )}
        </div>
    );
};

export default FormatBalance;
