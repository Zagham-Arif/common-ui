import React from 'react'

export interface AddButtonProps {
    text?: string;
}

export const AddButton: React.FC<AddButtonProps> = ({ text }) => {
    return (
        <button> {text}</button>
    )
}