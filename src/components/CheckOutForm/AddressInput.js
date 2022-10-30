import { TextField } from '@mui/material';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const AddressInput = ({name, label, required}) => {

    const { control } = useFormContext();

    return (
        <div>
            <Controller
                control={control}
                name={name}
                render={({ field: {onChange, onBlur, value} }) => (
                <TextField
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                    value={value}
                    label={label}
                    required={required}
                />
                )}
            />
        </div>
    )
}

export default AddressInput