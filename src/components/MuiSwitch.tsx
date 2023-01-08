import React, { useState } from 'react'
import {Box, FormControlLabel, Switch} from '@mui/material'

const MuiSwitch = () => {
    const [checked, setChecked] = useState<any>(false)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setChecked(e.target.value)
    }
  return (
    <Box>
        <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleOnChange}/>} />
    </Box>
  )
}

export default MuiSwitch