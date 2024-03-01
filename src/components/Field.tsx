import React from 'react'

export interface FieldProps {
    text?: string;
}

export const Field: React.FC<FieldProps> = ({ text }) => {
    return (
        <input type='text' value={text} />
    )
}
